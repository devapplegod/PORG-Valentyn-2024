const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 8443;


// Níže na serveru spustím discord bota, který mi na discord server pošle každou novou valentýnku v reálném čase, abych měl průběžný přehled.
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: [
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.Guilds
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
  
client.login('private-token-discord-bota');

const sendMessage = (mes) => {client.channels.cache.get("1200437518278082612 tady id kanalu kam na private disc posilat zpravy").send(mes);};

client.once('ready', () => {
        
});

function postEmbed(recipient_name, recipient_email, recipient_class, message, dateTime){
    const embed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Nová valentýnka')
	.addFields(
		{ name: 'Adresát', value: recipient_name, inline: true},
        { name: 'Třída', value: recipient_class, inline: true},
		{ name: 'Email adresáta', value: recipient_email, inline: true },
		{ name: 'Zpráva', value: message }
	)
	.setFooter({ text: 'Zadáno na porg.fun ' + dateTime });
    sendMessage({ embeds: [embed] });
}

// HTTPS a další formality
app.use(express.static(__dirname + 'public'));
app.use(cors({ origin: 'https://porg.fun' }));
app.use(bodyParser.json());


// Kód spuštěn vždy, když z prohlížeče (index.js) příjde nová POST zpráva z path /send
app.post('/send', (req, res) => {
    res.json({ success: true, message: 'new POST received...' });

    const { recipient_name, recipient_email, recipient_class, message, dateTime} = req.body;
    console.log(recipient_name + ", " + recipient_class + " (" + recipient_email + ")" + ": '" + message + "' (" + dateTime + ")")
    // Upload do databaze
    uploadToDatabase(recipient_name, recipient_email, recipient_class, message, dateTime)
    // Zprava mne na discord
    postEmbed(recipient_name, recipient_email, recipient_class, message, dateTime)
});

// Dalsi formality, bez kterych by mi ale HTTPS stranka nemohla na server posilat data
const sslOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/mujserver.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/mujserver.com/fullchain.pem')
};
  

const server = https.createServer(sslOptions, app);

server.listen(port, 'mujserver.com', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server is running at ${host}:${port}`);
});

// Setup databaze
const dbConfig = {
    'host': 'db_server',
    'user': 'username',
    'password': 'heslo',
    'database': 'mysqldatabaze',
}

const table_name = 'valentynky';
const pool = mysql.createPool(dbConfig);

// Odesle info do databaze (prohlizec -> tento server -> databaze)
function uploadToDatabase(name, email, class_, message, datetime){
    const dataToInsert = {
        Name: name,
        Email: email,
        Class: class_,
        Message: message,
        Datetime: datetime
    };
    pool.getConnection((err, connection) => {
        if (err) {
          console.error('Error connecting to the database:', err);
          return;
        }
      
        const query = 'INSERT INTO ' + table_name + ' SET ?';
        connection.query(query, dataToInsert, (err, results) => {
        connection.release();
      
        if (err) {
            console.error('Database to server: Error inserting data:', err);
            return;
        }
      
        console.log('Database to server: Data inserted successfully!');
        });
    });
}

process.on('exit', () => {
    pool.end();
});
