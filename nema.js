var map = L.map('map').setView([43.893934,22.104492], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let musliman = L.icon ({
iconUrl : 'icons/bracamuslimani.png',
iconSize: [26,26],
iconAnchor: [13, 13],
popupAnchor: [0, -30]
})

let krst = L.icon ({
iconUrl : 'icons/Christianity-orthodoxcross-bold-400w.png',
iconSize: [26,26],
iconAnchor: [13, 13],
popupAnchor: [0, -30]
})

let kampf = L.icon ({
iconUrl : 'icons/sportskicentar.png',
iconSize: [50,26],
iconAnchor: [13, 13],
popupAnchor: [15, -40]
})

let spomenici = L.icon ({
iconUrl : 'icons/Museum_Icon_local.png',
iconSize: [26,26],
iconAnchor: [13, 13],
popupAnchor: [0, -30]
})

var nikolaAran = L.marker([43.542532 , 21.707719],{icon:krst}).addTo(map); 
var  vazensija = L.marker([43.21896704936562, 22.312041413590837],{icon:krst}).addTo(map); 
var  Dimitrije = L.marker([43.18670700239434, 22.292984553031324],{icon:krst}).addTo(map); 
var  rojBogorodice = L.marker([ 43.01477305112, 22.779503696043662],{icon:krst}).addTo(map); 
var  nikolaKurs = L.marker([43.1401045319514, 21.2769441331748],{icon:krst}).addTo(map); 
var  useksvjovan = L.marker([42.91840103613758, 21.73636751153732],{icon:krst}).addTo(map); 
var  jasSvJovan = L.marker([43.09595492294104, 22.0473585593041],{icon:krst}).addTo(map); 
var  rodjHristPirot = L.marker([43.1565471898356, 22.58758262583658
],{icon:krst}).addTo(map); 

var  islamAge = L.marker([43.32053374292916, 21.89317409700806],{icon:musliman}).addTo(map); 
var  dzenet = L.marker([42.46030908489542, 21.761646355825544
],{icon:musliman}).addTo(map); 

var  kartas = L.marker([44.655258843391245, 22.537913425732025],{icon:kampf}).addTo(map); 
var  pozarevac = L.marker([44.61932415143109, 21.173681539389506],{icon:kampf}).addTo(map); 
var  cair = L.marker([43.31421682078194, 21.908180939045295],{icon:kampf}).addTo(map); 
var  stara = L.marker([43.36954775872553, 22.608863452835447],{icon:kampf}).addTo(map); 

var  djavoljav= L.marker([43.01143186220718, 21.409060384951285],{icon:spomenici}).addTo(map); 
var  samar= L.marker([44.12054355934829, 21.89584516095248],{icon:spomenici}).addTo(map); 
var  vir= L.marker([44.560440538382394, 22.024351077707912],{icon:spomenici}).addTo(map); 
var  smederevska= L.marker([44.67355113505217, 20.928505237608135],{icon:spomenici}).addTo(map); 
var  manasija= L.marker([44.10117277499978, 21.469491566359668],{icon:spomenici}).addTo(map); 
var  golubacka= L.marker([44.66088675192418, 21.677765139391155],{icon:spomenici}).addTo(map); 

const places = [
    { name: "Crkva Svetog Nikole, Aleksinac", marker: nikolaAran },
    { name: "Crkva Vaznesenja", marker: vazensija },
    { name: "Crkva Svetog Dimitrija", marker: Dimitrije },
    { name: "Crkva Rođenja Presvete Bogorodice", marker: rojBogorodice },
    { name: "Manastir Svetog Nikole (kod Kuršumlije)", marker: nikolaKurs },
    { name: "Crkva Usekovanja glave Svetog Jovana Krstitelja, Lebane", marker: useksvjovan },
    { name: "Jašunjski manastir Svetog Jovana", marker: jasSvJovan },
    { name: "Crkva Rođenja Hristovog, Pirot", marker: rodjHristPirot },

    { name: "Džamija Islama Agi", marker: islamAge },
    { name: "Dženet Džamija", marker: dzenet },

    { name: "Sportski kamp KaraTaš", marker: kartas },
    { name: "Sportski centar Požarevac", marker: pozarevac },
    { name: "Sportski centar Čair", marker: cair },
    { name: "Stara planina", marker: stara },

    { name: "Đavolja Varoš", marker: djavoljav },
    { name: "Prerast Šamar", marker: samar },
    { name: "Lepenski Vir", marker: vir },
    { name: "Smederevska tvrđava", marker: smederevska },
    { name: "Manastir Manasija", marker: manasija },
    { name: "Golubačka tvrđava", marker: golubacka }
];

const quiz = {
    running: false,
    targets: [],
    current: 0,
    misses: 0,
    startTime: 0,
    timerInterval: null
};

function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function startQuiz(count) {
    quiz.running = true;
    quiz.current = 0;
    quiz.misses = 0;
    quiz.targets = shuffle(places).slice(0, count);
    quiz.startTime = Date.now();

    updateQuizDisplay();

    clearInterval(quiz.timerInterval);

    quiz.timerInterval = setInterval(() => {
        const elapsed = ((Date.now() - quiz.startTime) / 1000).toFixed(1);

        document.getElementById("timer").textContent =
            "Vreme: " + elapsed + "s";
    }, 100);
}

function updateQuizDisplay() {
    if (!quiz.running) return;

    document.getElementById("target").textContent =
        "Pronađi: " + quiz.targets[quiz.current].name;

    document.getElementById("progress").textContent =
        "Napredak: " +
        quiz.current +
        "/" +
        quiz.targets.length;

    document.getElementById("misses").textContent =
        "Greške: " + quiz.misses;
}

function finishQuiz() {
    quiz.running = false;

    clearInterval(quiz.timerInterval);

    const seconds =
        ((Date.now() - quiz.startTime) / 1000).toFixed(1);

    const best =
        localStorage.getItem(
            "best_" + quiz.targets.length
        );

    if (!best || seconds < parseFloat(best)) {
        localStorage.setItem(
            "best_" + quiz.targets.length,
            seconds
        );

        alert(
            "Novi rekord!\n\n" +
            "Vreme: " + seconds +
            "s\nGreške: " + quiz.misses
        );
    } else {
        alert(
            "Kraj kviza!\n\n" +
            "Vreme: " + seconds +
            "s\nGreške: " + quiz.misses +
            "\nRekord: " + best + "s"
        );
    }

    document.getElementById("target").textContent =
        "Kviz završen!";
}

places.forEach(place => {

    place.marker.on("click", () => {

        if (!quiz.running) return;

        const target =
            quiz.targets[quiz.current];

        if (place === target) {

            quiz.current++;

            if (
                quiz.current >=
                quiz.targets.length
            ) {
                finishQuiz();
            } else {
                updateQuizDisplay();
            }

        } else {

            quiz.misses++;

            document.getElementById("misses").textContent =
                "Greške: " + quiz.misses;
        }
    });

});