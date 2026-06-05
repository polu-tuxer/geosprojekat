
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

/*nikolaAran.bindPopup("<b>Crkva Svetog Nikole, Aleksinac</b>")
vazensija.bindPopup("<b>Crkva Vaznesenja</b>")
Dimitrije.bindPopup("<b>Crkva Svetog Dimitrija</b>")
rojBogorodice.bindPopup("<b>Crkva Rođenja Presvete Bogorodice</b>")
nikolaKurs.bindPopup("<b>Manastir Svetog Nikole, kod Kuršumlije</b>")
useksvjovan.bindPopup("<b>Crkva Усековања главе Светог Јована Крститеља, Lebane</b>")
jasSvJovan.bindPopup("<b>Јашуњски манастир Светог Јована</b>")
rodjHristPirot.bindPopup("<b>Crkva Rođenja Hristovog, Pirot</b>")*/



var  islamAge = L.marker([43.32053374292916, 21.89317409700806],{icon:musliman}).addTo(map); 
var  dzenet = L.marker([42.46030908489542, 21.761646355825544
],{icon:musliman}).addTo(map); 

/*islamAge.bindPopup("<b>Džamija Islama Agi (Džamija Islama-aga)</b>")
dzenet.bindPopup("<b>Dženet Džamija")*/

var  kartas = L.marker([44.655258843391245, 22.537913425732025],{icon:kampf}).addTo(map); 
var  pozarevac = L.marker([44.61932415143109, 21.173681539389506],{icon:kampf}).addTo(map); 
var  cair = L.marker([43.31421682078194, 21.908180939045295],{icon:kampf}).addTo(map); 
var  stara = L.marker([43.36954775872553, 22.608863452835447],{icon:kampf}).addTo(map); 

/*kartas.bindPopup("<b>Sportski kamp KaraTaš</b>")
pozarevac.bindPopup("<b>Sportski centar Požarevac")
cair.bindPopup("Sportski centar Čair")
stara.bindPopup("Stara planina")*/





var  djavoljav= L.marker([43.01143186220718, 21.409060384951285],{icon:spomenici}).addTo(map); 
var  samar= L.marker([44.12054355934829, 21.89584516095248],{icon:spomenici}).addTo(map); 
var  vir= L.marker([44.560440538382394, 22.024351077707912],{icon:spomenici}).addTo(map); 
var  smederevska= L.marker([44.67355113505217, 20.928505237608135],{icon:spomenici}).addTo(map); 
var  manasija= L.marker([44.10117277499978, 21.469491566359668],{icon:spomenici}).addTo(map); 
var  golubacka= L.marker([44.66088675192418, 21.677765139391155],{icon:spomenici}).addTo(map); 

/*djavoljav.bindPopup("<b>Đavolja Varoš ")
samar.bindPopup("<b>Prerast Šamar ")
vir.bindPopup("<b>Lepenski Vir")
smederevska.bindPopup("<b>Smederevska tvrđava")
manasija.bindPopup("<b>Manastir Manasija")
golubacka.bindPopup("<b>Golubačka tvrđava")*/

function openInfo(title, text, imgSrc) {
  const payload = { title, text, imgSrc };
  sessionStorage.setItem('markerInfo', JSON.stringify(payload));
  window.location.href = 'info.html';
}
// Photos below do NOT have local images yet.
// Replace "icons/slike/placeholder.png" with the correct image path when you add them.

dzenet.on('click', () => openInfo(
'Dženet Džamija',
'Dženet džamija (primerno ime) predstavlja lokalnu islamsku bogomolju koja u mnogim zajednicama igra centralnu ulogu u verskom i društvenom životu.',
'icons/slike/placeholder.jpg'
));


// Existing entries rewritten to Latin script

nikolaAran.on('click', () => openInfo(
'Crkva Svetog Nikole, Aleksinac',
'Crkva Svetog Nikole u Aleksincu je pravoslavna crkva i spomenik kulture. Sagrađena je 1836–1837. po naredbi kneza Miloša Obrenovića i predstavlja značajan verski i istorijski spomenik u mestu.',
'icons/slike/sveti nikola.png'
));

vazensija.on('click', () => openInfo(
'Crkva Vaznesenja',
'Crkva Vaznesenja (Vaznesenjska crkva) je pravoslavni hram posvećen Vaznesenju Gospodnjem; mnoge Vaznesenjske crkve u Srbiji potiču iz različitih epoha i često sadrže vredne freske i ikonostase.',
'icons/slike/Crkva Vaznesenja.png'
));

Dimitrije.on('click', () => openInfo(
'Crkva Svetog Dimitrija',
'Crkva Svetog Dimitrija je pravoslavni hram posvećen Svetom Dimitriju, mučeniku i jednom od najpoštovanijih svetitelja u pravoslavnom svetu; u Srbiji postoji više crkava sa ovim zaštitnikom, često sa bogatom unutrašnjom dekoracijom.',
'icons/slike/crkva svetog dmitrija.png'
));

rojBogorodice.on('click', () => openInfo(
'Crkva Rođenja Presvete Bogorodice',
'Crkva Rođenja Presvete Bogorodice je hram posvećen prazniku Rođenja Presvete Bogorodice; takve crkve su u pravoslavlju česte i predstavljaju važne parohijske centre sa ikonostasima i freskama.',
'icons/slike/Crkva Rodenja Presvete Bogorodice.png'
));

nikolaKurs.on('click', () => openInfo(
'Manastir Svetog Nikole (kod Kuršumlije)',
'Manastir Svetog Nikole kraj Kuršumlije je srpski pravoslavni manastir posvećen Svetom Nikoli; manastiri ovog imena u Srbiji često imaju dugu istoriju i vrednu monumentalnu ikonografiju.',
'icons/slike/Manastir Svetog Nikole (Kursumlija).png'
));

useksvjovan.on('click', () => openInfo(
'Crkva Usekovanja glave Svetog Jovana Krstitelja, Lebane',
'Crkva Usekovanja glave Svetog Jovana Krstitelja je hram posvećen tom događaju u hrišćanskom kalendaru; takvi hramovi nose lokalne obredne i kulturne značajnosti u parohijama gde se nalaze.',
'icons/slike/usvjovan.png'
));

jasSvJovan.on('click', () => openInfo(
'Jašunjski manastir Svetog Jovana',
'Jašunjski manastir posvećen Svetom Jovanu predstavlja duhovni i kulturni centar u regionu; manastirske zajednice obično čuvaju tradicije i bogatu crkvenu umetnost.',
'icons/slike/Jasunjski manastir Svetog Jovana.png'
));

rodjHristPirot.on('click', () => openInfo(
'Crkva Rođenja Hristovog, Pirot',
'Crkva Rođenja Hristovog u Pirotu je pravoslavni hram posvećen rođenju Isusa Hrista; unutrašnjost takvih crkava često je ukrašena ikonama i freskama vrednim kulturno-istorijske zaštite.',
'icons/slike/Crkva Rodenja Hristovog, Pirot.png'
));

islamAge.on('click', () => openInfo(
'Džamija Islama Age',
'Džamija Islama Age je istorijska džamija koja nosi ime Islama Age; džamije sa lokalnim imenima često predstavljaju važne verske i arhitektonske spomenike u svojim zajednicama.',
'icons/slike/Dzamija Islama Age.png'
));

kartas.on('click', () => openInfo(
'Sportski kamp KaraTaš',
'Sportski kamp KaraTaš je kompleks za treninge i sportske aktivnosti; sportski kampovi obično pružaju terene, smeštaj i prateće sadržaje za sportiste i posetioce.',
'icons/slike/Sportski kamp KaraTas.png'
));

pozarevac.on('click', () => openInfo(
'Sportski centar Požarevac',
'Sportski centar u Požarevcu je lokalni multisportski objekat koji služi za treninge, takmičenja i rekreaciju; moderni centri obuhvataju zatvorene i otvorene terene i prateću infrastrukturu.',
'icons/slike/Sportski centar Pozarevac.png'
));

cair.on('click', () => openInfo(
'Sportski centar Čair',
'Sportski centar Čair je veliki kompleks sa višenamenskim halama, terenima i pratećim sadržajima za sport i događaje; poznat je kao važan gradski sportski kompleks u Nišu.',
'icons/slike/Sportski centar Cair.png'
));

stara.on('click', () => openInfo(
'Stara planina',
'Stara planina je planinski masiv na granici Srbije i Bugarske, poznat po biodiverzitetu, planinarskim rutama i zimskim sportovima.',
'icons/slike/Stara planina.png'
));

djavoljav.on('click', () => openInfo(
'Đavolja Varoš',
'Đavolja Varoš je prirodni fenomen u Srbiji, poznat po jedinstvenim stubastim formacijama od vulkanskih sedimenata i zaštićen kao prirodni spomenik.',
'icons/slike/Davolja Varos.png'
));

samar.on('click', () => openInfo(
'Prerast Šamar',
'Prerast Šamar je prirodni spomenik i geološka formacija, poznat po impresivnim stenama i pejzažu; koristi se kao turistička atrakcija i prirodni lokalitet za posete.',
'icons/slike/Prerast Samar.png'
));

vir.on('click', () => openInfo(
'Lepenski Vir',
'Lepenski Vir je arheološko nalazište u Srbiji sa značajnim neolitskim ostacima i složenom praistorijskom kulturom; mesto je jedno od najvažnijih praistorijskih nalazišta na Balkanu.',
'icons/slike/Lepenski Vir.png'
));

smederevska.on('click', () => openInfo(
'Smederevska tvrđava',
'Smederevska tvrđava je srednjovekovni utvrđeni grad na Dunavu, podignut u 15. veku kao prestonički zamak despota; predstavlja značajan istorijski i arhitektonski spomenik.',
'icons/slike/Smederevska tvrdava.png'
));

manasija.on('click', () => openInfo(
'Manastir Manasija',
'Manasija je srpski pravoslavni manastir iz 15. veka, poznat po svojim moćnim bedemima, freskama i Manasijskoj školi; nalazi se kod Despotovca i predstavlja važan spomenik srednjovekovne srpske kulture.',
'icons/slike/Manastir Manasija.png'
));

golubacka.on('click', () => openInfo(
'Golubačka tvrđava',
'Golubačka tvrđava je utvrđenje na Dunavu kod Golupca, sa istorijskim značajem kao strategijska tačka na granici; tvrđava je dobro očuvana i važna turistička destinacija.',
'icons/slike/Golubacka tvrdava.png'
));