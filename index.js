var classData = {
    'Prima': ['Adam Urx', 'Alexander Forrest', 'Antonín Prukl', 'Daniel Štefka', 'David Eismann', 'Eliška Zaňková', 'Emma Marušková', 'Gabriela Slavíčková', 'Hugo Ferianc', 'Jáchym Michálek', 'Jiřina Kotková', 'Lada Karásková', 'Leopold Fejo', 'Linda Štěpánková', 'Lukáš Benke', 'Mariana Filipová', 'Markéta Lisá', 'Martina Vojteková', 'Matouš Brčák', 'Nela Michalíková', 'Rudolf Kučera', 'Ruslan Ibragimov', 'Samuel Bitala', 'Tobiáš Hajs', 'Vladerik Usatyuk', 'Vojtěch Pešl'],
    'Sekunda': ['Roman Bašo', 'Šimon Boček', 'Mariana Brázdová', 'Terezie Duchková', 'Doroteja Džakić', 'Jan Daniel Elleder', 'Adéla Horová', 'Jan Jiří Hrodek', 'Gerasimos Chortis', 'Eduard Janků', 'Klára Keřková', 'Adam Král', 'Vojtěch Krčál', 'Viktorie Kubíková', 'Tomáš Kvapil', 'Jiří Mlynář', 'Filip Němec', 'Čestmír Nývlt', 'Jolana Očenášková', 'Václav Panáček', 'Alexandra Poláková', 'Kristýna Procházková', 'Nela Rabiňák', 'Andrej Rydval', 'Jan Srch', 'Filip Svobodný'],
    'Tercie': ['Marek Bureš', 'Jonáš Dinga', 'Daniela Ďurovcová', 'Kristýna Gudevová', 'Ronja Chlupáčová', 'Vojtěch Kadlec', 'Max Körber', 'Jitka Kotková', 'Martin Maláč', 'Veronika Medková', 'Marek Nechvátal', 'Filip Nielsen', 'Jakub Pešl', 'Šimon Pelák', 'Klára Peroutková', 'Vojtěch Plecháček', 'David Pohlreich', 'Noel Probst', 'Anežka Procházková', 'Petr Sobol', 'Lukáš Stanovský', 'Antonín Šolc', 'Josefína Svatušková', 'Denisa Tesařová', 'Julie Trčková', 'Michal Večeřa'],
    'Kvarta': ['Matyáš Brázda', 'Jakub Černovický', 'Daniela Dobíšková', 'Agáta Ferianc', 'Maxim Filip', 'Samuel Furinda', 'Olga Heranová', 'Štěpán Kramařík', 'Marie Lisa Krátká', 'Samuel Liška', 'Lukáš Martinek', 'Kristína Mészárosová', 'Matyáš Moffitt', 'Klára Pastrňáková', 'Alexandr Pecherek', 'Sophie Porubová', 'Erik Rössler', 'Patrik Semotan', 'Veronika Sergejeva', 'Sebastian Sopko', 'Martin Svobodný', 'Jakub Škoda', 'Jan Šlosar', 'Luisa Troupová', 'Vojtěch Uher', 'Vojtěch Diviš Vlček', 'Edita Volešová'],
    'Kvinta': ['Johana Cibulová', 'Edgar David', 'Mikuláš Děták', 'Helena Dražanová', 'Lucie Emrová', 'Matěj Hynek', 'Leona Kaslová', 'Marie Kolísková', 'Matyáš Král', 'Jan Martinek', 'Julie Maříková', 'Eliška Palušová', 'Valentýna Páníková', 'Robin Patočka', 'Vojtěch Pečený', 'Adam Pelák', 'Štěpán Pořízek', 'Samuel Probst', 'Matěj Přecechtěl', 'Alexandra Rydvalová', 'Eliška Slámová', 'Jakub Šída', 'Linda Šolcová', 'Matěj Tillman', 'Adéla Valeriánová', 'Jan Večeřa'],
    'Sexta': ['Berta Bašta', 'Šimon Bortlík', 'Nikol Bystrovová', 'Michael Černohlávek', 'Justína Dingová', 'Kristián Doležal', 'Antonín Drlík', 'Benjamin Hudec', 'Linda Jechová', 'Matyáš Koukal', 'Julie Kozmíková', 'Andrea Kubcová', 'Štěpán Linhart', 'Filip Martinek', 'Veronika Mašíčková', 'Rebeka Mayerová', 'Ondřej Medek', 'Julie Nádaská', 'Anežka Julia Peimer', 'Mikuláš Peroutka', 'Viktorie Poláková', 'Ádám Sátor', 'David Štefka', 'Ema Tillová', 'Ivan Tran', 'Barbora Valeriánová'],
    'Septima': ['Josef Bednář', 'Vladimír Blažek', 'Magdalena Dašková', 'Anna Dingová', 'Anna Fialová', 'Benjamin Florián', 'Karolína Fojtíková', 'Kateřina Hrubá', 'Patrik Jásek', 'Šimon Kobulej', 'Štěpánka Kratochvílová', 'František Pečený', 'Ana Rudić', 'Mikuláš Růžička', 'Tobiáš Rydvan', 'Adam Sedlecký', 'Milena Sergejeva', 'Petr Souček', 'Jakub Otakar Svoboda', 'Anna Štrosová', 'Jan Vabroušek', 'Václav Verner', 'Sofie Vévodová', 'Tatiana Vlčková', 'Rebeka Zábranská', 'Markéta Zemanová'],
    'Oktáva': ['Nicol Arenbergerová', 'František Arnot', 'Ondřej Čvančar', 'Ester Davidová', 'Valérie Dušková', 'David Dvořák', 'Magdalena Formánková', 'Magdalena Janečková', 'Ondřej Klíč', 'Adam Kobulej', 'Kamila Krátká', 'Filip Krtek', 'Ema Nevřelová', 'Kristián Rosenkranz', 'Markéta Růžičková', 'Matěj Sedláček', 'Daniel Semotan', 'Lucie Slámová', 'Sofie Slezáková', 'Tom Suchomel', 'Julie Šejnohová', 'Anna Švejnohová', 'Markéta Šídlová', 'Dominik Šíma', 'Emma Štorková', 'Jákob Ruben Weil', 'Ondřej Zeman']
};

// Emaily, servery apod. obsuscatovány pro účely GitHubu.
let names = ['Adam Urx', 'Alexander Forrest', 'Antonín Prukl', 'Daniel Štefka', 'David Eismann', 'Eliška Zaňková', 'Emma Marušková', 'Gabriela Slavíčková', 'Hugo Ferianc', 'Jáchym Michálek', 'Jiřina Kotková', 'Lada Karásková', 'Leopold Fejo', 'Linda Štěpánková', 'Lukáš Benke', 'Mariana Filipová', 'Markéta Lisá', 'Martina Vojteková', 'Matouš Brčák', 'Nela Michalíková', 'Rudolf Kučera', 'Ruslan Ibragimov', 'Samuel Bitala', 'Tobiáš Hajs', 'Vladerik Usatyuk', 'Vojtěch Pešl', 'Roman Bašo', 'Šimon Boček', 'Mariana Brázdová', 'Terezie Duchková', 'Doroteja Džakić', 'Jan Daniel Elleder', 'Adéla Horová', 'Jan Jiří Hrodek', 'Gerasimos Chortis', 'Eduard Janků', 'Klára Keřková', 'Adam Král', 'Vojtěch Krčál', 'Viktorie Kubíková', 'Tomáš Kvapil', 'Jiří Mlynář', 'Filip Němec', 'Čestmír Nývlt', 'Jolana Očenášková', 'Václav Panáček', 'Alexandra Poláková', 'Kristýna Procházková', 'Nela Rabiňák', 'Andrej Rydval', 'Jan Srch', 'Filip Svobodný', 'Marek Bureš', 'Jonáš Dinga', 'Daniela Ďurovcová', 'Kristýna Gudevová', 'Ronja Chlupáčová', 'Vojtěch Kadlec', 'Max Körber', 'Jitka Kotková', 'Martin Maláč', 'Veronika Medková', 'Marek Nechvátal', 'Filip Nielsen', 'Jakub Pešl', 'Šimon Pelák', 'Klára Peroutková', 'Vojtěch Plecháček', 'David Pohlreich', 'Noel Probst', 'Anežka Procházková', 'Petr Sobol', 'Lukáš Stanovský', 'Antonín Šolc', 'Josefína Svatušková', 'Denisa Tesařová', 'Julie Trčková', 'Michal Večeřa', 'Matyáš Brázda', 'Jakub Černovický', 'Daniela Dobíšková', 'Agáta Ferianc', 'Maxim Filip', 'Samuel Furinda', 'Olga Heranová', 'Štěpán Kramařík', 'Marie Lisa Krátká', 'Samuel Liška', 'Lukáš Martinek', 'Kristína Mészárosová', 'Matyáš Moffitt', 'Klára Pastrňáková', 'Alexandr Pecherek', 'Sophie Porubová', 'Erik Rössler', 'Patrik Semotan', 'Veronika Sergejeva', 'Sebastian Sopko', 'Martin Svobodný', 'Jakub Škoda', 'Jan Šlosar', 'Luisa Troupová', 'Vojtěch Uher', 'Vojtěch Diviš Vlček', 'Edita Volešová', 'Johana Cibulová', 'Edgar David', 'Mikuláš Děták', 'Helena Dražanová', 'Lucie Emrová', 'Matěj Hynek', 'Leona Kaslová', 'Marie Kolísková', 'Matyáš Král', 'Jan Martinek', 'Julie Maříková', 'Eliška Palušová', 'Valentýna Páníková', 'Robin Patočka', 'Vojtěch Pečený', 'Adam Pelák', 'Štěpán Pořízek', 'Samuel Probst', 'Matěj Přecechtěl', 'Alexandra Rydvalová', 'Eliška Slámová', 'Jakub Šída', 'Linda Šolcová', 'Matěj Tillman', 'Adéla Valeriánová', 'Jan Večeřa', 'Berta Bašta', 'Šimon Bortlík', 'Nikol Bystrovová', 'Michael Černohlávek', 'Justína Dingová', 'Kristián Doležal', 'Antonín Drlík', 'Benjamin Hudec', 'Linda Jechová', 'Matyáš Koukal', 'Julie Kozmíková', 'Andrea Kubcová', 'Štěpán Linhart', 'Filip Martinek', 'Veronika Mašíčková', 'Rebeka Mayerová', 'Ondřej Medek', 'Julie Nádaská', 'Anežka Julia Peimer', 'Mikuláš Peroutka', 'Viktorie Poláková', 'Ádám Sátor', 'David Štefka', 'Ema Tillová', 'Ivan Tran', 'Barbora Valeriánová', 'Josef Bednář', 'Vladimír Blažek', 'Magdalena Dašková', 'Anna Dingová', 'Anna Fialová', 'Benjamin Florián', 'Karolína Fojtíková', 'Kateřina Hrubá', 'Patrik Jásek', 'Šimon Kobulej', 'Štěpánka Kratochvílová', 'František Pečený', 'Ana Rudić', 'Mikuláš Růžička', 'Tobiáš Rydvan', 'Adam Sedlecký', 'Milena Sergejeva', 'Petr Souček', 'Jakub Otakar Svoboda', 'Anna Štrosová', 'Jan Vabroušek', 'Václav Verner', 'Sofie Vévodová', 'Tatiana Vlčková', 'Rebeka Zábranská', 'Markéta Zemanová', 'Nicol Arenbergerová', 'František Arnot', 'Ondřej Čvančar', 'Ester Davidová', 'Valérie Dušková', 'David Dvořák', 'Magdalena Formánková', 'Magdalena Janečková', 'Ondřej Klíč', 'Adam Kobulej', 'Kamila Krátká', 'Filip Krtek', 'Ema Nevřelová', 'Kristián Rosenkranz', 'Markéta Růžičková', 'Matěj Sedláček', 'Daniel Semotan', 'Lucie Slámová', 'Sofie Slezáková', 'Tom Suchomel', 'Julie Šejnohová', 'Anna Švejnohová', 'Markéta Šídlová', 'Dominik Šíma', 'Emma Štorková', 'Jákob Ruben Weil', 'Ondřej Zeman']
let email_list = ['urxadam@placeholder.asd', 'forrestalexander@placeholder.asd', 'pruklantonin@placeholder.asd', 'stefkadaniel@placeholder.asd', 'eismanndavid@placeholder.asd', 'zankovaeliska@placeholder.asd', 'maruskovaemma@placeholder.asd', 'slavickovagabriela@placeholder.asd', 'ferianchugo@placeholder.asd', 'michalekjachym@placeholder.asd', 'kotkovajirina@placeholder.asd', 'karaskovalada@placeholder.asd', 'fejoleopold@placeholder.asd', 'stepankovalinda@placeholder.asd', 'benkelukas@placeholder.asd', 'filipovamariana@placeholder.asd', 'lisamarketa@placeholder.asd', 'vojtekovamartina@placeholder.asd', 'brcakmatous@placeholder.asd', 'michalikovanela@placeholder.asd', 'kucerarudolf@placeholder.asd', 'ibragimovruslan@placeholder.asd', 'bitalasamuel@placeholder.asd', 'hajstobias@placeholder.asd', 'usatyukvladerik@placeholder.asd', 'peslvojtech@placeholder.asd', 'basoroman@placeholder.asd', 'boceksimon@placeholder.asd', 'brazdovamariana@placeholder.asd', 'duchkovaterezie@placeholder.asd', 'dzakicdoroteja@placeholder.asd', 'ellederjan@placeholder.asd', 'horovaadela@placeholder.asd', 'hrodekjan@placeholder.asd', 'chortisgerasimos@placeholder.asd', 'jankueduard@placeholder.asd', 'kerkovaklara@placeholder.asd', 'kraladam@placeholder.asd', 'krcalvojtech@placeholder.asd', 'kubikovaviktorie@placeholder.asd', 'kvapiltomas@placeholder.asd', 'mlynarjiri@placeholder.asd', 'nemecfilip@placeholder.asd', 'nyvltcestmir@placeholder.asd', 'ocenaskovajolana@placeholder.asd', 'panacekvaclav@placeholder.asd', 'polakovaalexandra@placeholder.asd', 'prochazkovakristyna@placeholder.asd', 'rabinaknela@placeholder.asd', 'rydvalandrej@placeholder.asd', 'srchjan@placeholder.asd', 'svobodnyfilip@placeholder.asd', 'buresmarek@placeholder.asd', 'dingajonas@placeholder.asd', 'durovcovadaniela@placeholder.asd', 'gudevovakristyna@placeholder.asd', 'chlupacovaronja@placeholder.asd', 'kadlecvojtech@placeholder.asd', 'korbermax@placeholder.asd', 'kotkovajitka@placeholder.asd', 'malacmartin@placeholder.asd', 'medkovaveronika@placeholder.asd', 'nechvatalmarek@placeholder.asd', 'nielsenfilip@placeholder.asd', 'pesljakub@placeholder.asd', 'pelaksimon@placeholder.asd', 'peroutkovaklara@placeholder.asd', 'plechacekvojtech@placeholder.asd', 'pohlreichdavid@placeholder.asd', 'probstnoel@placeholder.asd', 'prochazkovaanezka@placeholder.asd', 'sobolpetr@placeholder.asd', 'stanovskylukas@placeholder.asd', 'solcantonin@placeholder.asd', 'svatuskovajosefina@placeholder.asd', 'tesarovadenisa@placeholder.asd', 'trckovajulie@placeholder.asd', 'veceramichal@placeholder.asd', 'brazdamatyas@placeholder.asd', 'cernovickyjakub@placeholder.asd', 'dobiskovadaniela@placeholder.asd', 'feriancagata@placeholder.asd', 'filipmaxim@placeholder.asd', 'furindasamuel@placeholder.asd', 'heranovaolga@placeholder.asd', 'kramarikstepan@placeholder.asd', 'kratkamarie@placeholder.asd', 'liskasamuel@placeholder.asd', 'martineklukas@placeholder.asd', 'meszarosovakristina@placeholder.asd', 'moffittmatyas@placeholder.asd', 'pastrnakovaklara@placeholder.asd', 'pecherekalexandr@placeholder.asd', 'porubovasophie@placeholder.asd', 'rosslererik@placeholder.asd', 'semotanpatrik@placeholder.asd', 'sergejevaveronika@placeholder.asd', 'sopkosebastian@placeholder.asd', 'svobodnymartin@placeholder.asd', 'skodajakub@placeholder.asd', 'slosarjan@placeholder.asd', 'troupovaluisa@placeholder.asd', 'uhervojtech@placeholder.asd', 'vlcekvojtech@placeholder.asd', 'volesovaedita@placeholder.asd', 'cibulovajohana@placeholder.asd', 'davidedgar@placeholder.asd', 'detakmikulas@placeholder.asd', 'drazanovahelena@placeholder.asd', 'emrovalucie@placeholder.asd', 'hynekmatej@placeholder.asd', 'kaslovaleona@placeholder.asd', 'koliskovamarie@placeholder.asd', 'kralmatyas@placeholder.asd', 'martinekjan@placeholder.asd', 'marikovajulie@placeholder.asd', 'palusovaeliska@placeholder.asd', 'panikovavalentyna@placeholder.asd', 'patockovarut@placeholder.asd', 'pecenyvojtech@placeholder.asd', 'pelakadam@placeholder.asd', 'porizekstepan@placeholder.asd', 'probstsamuel@placeholder.asd', 'precechtelmatej@placeholder.asd', 'rydvalovaalexandra@placeholder.asd', 'slamovaeliska@placeholder.asd', 'sidajakub@placeholder.asd', 'solcovalinda@placeholder.asd', 'tillmanmatej@placeholder.asd', 'valerianovaadela@placeholder.asd', 'vecerajan@placeholder.asd', 'bastaberta@placeholder.asd', 'bortliksimon@placeholder.asd', 'bystrovovanikol@placeholder.asd', 'cernohlavekmichael@placeholder.asd', 'dingovajustina@placeholder.asd', 'dolezalkristian@placeholder.asd', 'drlikantonin@placeholder.asd', 'hudecbenjamin@placeholder.asd', 'jechovalinda@placeholder.asd', 'koukalmatyas@placeholder.asd', 'kozmikovajulie@placeholder.asd', 'kubcovaandrea@placeholder.asd', 'linhartstepan@placeholder.asd', 'martinekfilip@placeholder.asd', 'masickovaveronika@placeholder.asd', 'mayerovarebeka@placeholder.asd', 'medekondrej@placeholder.asd', 'nadaskajulie@placeholder.asd', 'peimeranezka@placeholder.asd', 'peroutkamikulas@placeholder.asd', 'polakovaviktorie@placeholder.asd', 'satoradam@placeholder.asd', 'stefkadavid@placeholder.asd', 'tillovaema@placeholder.asd', 'tranivan@placeholder.asd', 'valerianovabarbora@placeholder.asd', 'bednarjosef@placeholder.asd', 'blazekvladimir@placeholder.asd', 'daskovamagdalena@placeholder.asd', 'dingovaanna@placeholder.asd', 'fialovaanna@placeholder.asd', 'florianbenjamin@placeholder.asd', 'fojtikovakarolina@placeholder.asd', 'hrubakaterina@placeholder.asd', 'jasekpatrik@placeholder.asd', 'kobulejsimon@placeholder.asd', 'kratochvilovastepanka@placeholder.asd', 'pecenyfrantisek@placeholder.asd', 'rudicana@placeholder.asd', 'ruzickamikulas@placeholder.asd', 'rydvantobias@placeholder.asd', 'sedleckyadam@placeholder.asd', 'sergejevamilena@placeholder.asd', 'soucekpetr@placeholder.asd', 'svobodajakub@placeholder.asd', 'strosovaanna@placeholder.asd', 'vabrousekjan@placeholder.asd', 'vernervaclav@placeholder.asd', 'vevodovasofie@placeholder.asd', 'vlckovatatiana@placeholder.asd', 'zabranskarebeka@placeholder.asd', 'zemanovamarketa@placeholder.asd', 'arenbergerovanicol@placeholder.asd', 'arnotfrantisek@placeholder.asd', 'cvancarondrej@placeholder.asd', 'davidovaester@placeholder.asd', 'duskovavalerie@placeholder.asd', 'dvorakdavid@placeholder.asd', 'formankovamagdalena@placeholder.asd', 'janeckovamagdalena@placeholder.asd', 'klicondrej@placeholder.asd', 'kobulejadam@placeholder.asd', 'kratkakamila@placeholder.asd', 'krtekfilip@placeholder.asd', 'nevrelovaema@placeholder.asd', 'rosenkranzkristian@placeholder.asd', 'ruzickovamarketa@placeholder.asd', 'sedlacekmatej@placeholder.asd', 'semotandaniel@placeholder.asd', 'slamovalucie@placeholder.asd', 'slezakovasofie@placeholder.asd', 'suchomeltom@placeholder.asd', 'sejnohovajulie@placeholder.asd', 'svejnohovaanna@placeholder.asd', 'sidlovamarketa@placeholder.asd', 'simadominik@placeholder.asd', 'storkovaemma@placeholder.asd', 'weiljakob@placeholder.asd', 'zemanondrej@placeholder.asd']

document.getElementById('send-button').addEventListener('click', function () {
    // alert("Nové valentýnky už nepřijímáme.");

    const recipient_name = document.getElementById('name-dropdown').value;
    const recipient_email = getEmailByName(recipient_name)
    const recipient_class = document.getElementById("class-dropdown").value;
    const message = document.getElementById('message-input').value;
    if (message != "" & recipient_name != "" & recipient_class != "") {
        const dateTime = new Date().toLocaleString('cs-CZ');
        console.log(recipient_name + ", " + recipient_class + " (" + recipient_email + ")" + ": '" + message + "' (" + dateTime + ")")
        fetch('https://mujserver.com:8443/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ recipient_name, recipient_email, recipient_class, message, dateTime }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Server to client: Request received.');
                alert("Zprávu jsme obdrželi. Můžeš poslat další.");
                location.reload();
            })
            .catch(error => {
                console.error('Error:', error);
                console.log('Server to client: Failed to process request.');
                alert("Něco se pokazilo a zprávu jsme neobdrželi. Kontaktuj septimána.");
            });

        resetInputs();
    } else {
        alert("Napiš zprávu a vyber, komu ji chceš poslat.");
        location.reload();
    }
});

function updatePeopleDropdown() {
    var selectedClass = document.getElementById("class-dropdown").value;
    var peopleDropdown = document.getElementById("name-dropdown");
    peopleDropdown.innerHTML = "";
    var peopleInClass = classData[selectedClass];
    if (peopleInClass) {
      for (var i = 0; i < peopleInClass.length; i++) {
        var option = document.createElement("option");
        option.text = peopleInClass[i];
        option.value = peopleInClass[i];
        peopleDropdown.add(option);
      }
    }
}

function getEmailByName(name) {
    const index = names.indexOf(name);
    if (index !== -1) {
      const email = email_list[index];
      return email;
    } else {
      console.log("Name not found");
      return null;
    }
}

function resetInputs(){
    document.getElementById('message-input').value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    getAmount();
});

function setAmount(data){
    document.getElementById('subtitle').innerHTML = "Už jsme obdrželi " + data.length + " valentýnek.<br>Napiš zprávu, vyber, komu ji chceš poslat, a my ji na valentýna doručíme:";
}

function getAmount() {
    fetch('fetch_data.php')
        .then(response => response.json())
        .then(data => {
            setAmount(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}