
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
nikolaAran.on('click', () => openInfo(
  'Crkva Svetog Nikole, Aleksinac',
  'Црква Светог Николе у Алексинцу је православна црква и споменик културе. Саграђена је 1836–1837. по наредби кнеза Милоша Обреновића и представља значајан верски и историјски споменик у месту.',
  'https://upload.wikimedia.org/wikipedia/commons/4/4d/Wiki.Biseri_V_Crkva_Svetog_Nikole_006.jpg'
));

vazensija.on('click', () => openInfo(
  'Crkva Vaznesenja',
  'Црква Вазнесења (Вазнесењска црква) је православни храм посвећен Вазнесењу Господњем; многе Вазнесењске цркве у Србији потичу из различитих епоха и често садрже вредне фреске и иконостасе.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Crkva_Vaznesenja_%28primerak%29.jpg/250px-Crkva_Vaznesenja_%28primerak%29.jpg'
));

Dimitrije.on('click', () => openInfo(
  'Crkva Svetog Dimitrija',
  'Црква светог Димитрија је православни храм посвећен Светом Димитрију, мученику и једном од најпоштованијих светитеља у православном свету; у Србији постоји више цркава са овим заштитником, често са богатом унутрашњом декорацијом.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Church_of_Saint_Demetrius.jpg/250px-Church_of_Saint_Demetrius.jpg'
));

rojBogorodice.on('click', () => openInfo(
  'Crkva Rođenja Presvete Bogorodice',
  'Црква Рођења Пресвете Богородице је храм посвећен празнику Рођења Пресвете Богородице; такве цркве су у православљу честе и представљају важне парохијске центре са иконостасима и фрескама.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Church_of_the_Nativity_of_the_Virgin.jpg/250px-Church_of_the_Nativity_of_the_Virgin.jpg'
));

nikolaKurs.on('click', () => openInfo(
  'Manastir Svetog Nikole (kod Kuršumlije)',
  'Манастир Светог Николе крај Куршумлије је српски православни манастир посвећен светом Николи; манастири овог имена у Србији често имају дугу историју и вредну монументалну иконографију.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Manastir_Svetog_Nikole_%28primerak%29.jpg/250px-Manastir_Svetog_Nikole_%28primerak%29.jpg'
));

useksvjovan.on('click', () => openInfo(
  'Crkva Усековања главе Светог Јована Крститеља, Lebane',
  'Црква Усековања главе Светог Јована Крститеља је храм посвећен том догађају у хришћанском календару; такви храмови носе локалне обредне и културне значајности у парохијама где се налазе.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Church_of_the_Head_of_John_the_Baptist.jpg/250px-Church_of_the_Head_of_John_the_Baptist.jpg'
));

jasSvJovan.on('click', () => openInfo(
  'Јашуњски манастир Светог Јована',
  'Јашуњски манастир посвећен Светом Јовану представља духовни и културни центар у региону; манастирске заједнице обично чувају традиције и богату црквену уметност.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Monastery_of_St_John_%28example%29.jpg/250px-Monastery_of_St_John_%28example%29.jpg'
));

rodjHristPirot.on('click', () => openInfo(
  'Crkva Rođenja Hristovog, Pirot',
  'Црква Рођења Христовог у Пироту је православни храм посвећен рођењу Исуса Христа; унутрашњост таквих цркава често је украшена иконама и фрескама вредним културно-историјске заштите.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Church_of_the_Nativity_%28example%29.jpg/250px-Church_of_the_Nativity_%28example%29.jpg'
));

islamAge.on('click', () => openInfo(
  'Džamija Islama Agi',
  'Джамија Ислама Аги је историјска џамија која носи име Ислама Аги; џамије са локалним именима често представљају важне верске и архитектонске споменике у својим заједницама.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Islam_Aga_Mosque.jpg/250px-Islam_Aga_Mosque.jpg'
));

dzenet.on('click', () => openInfo(
  'Dženet Džamija',
  'Дженет џамија (примерно име) представља локалну исламску богомољу која у многим заједницама игра централну улогу у верском и друштвеном животу.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Local_Mosque_example.jpg/250px-Local_Mosque_example.jpg'
));

kartas.on('click', () => openInfo(
  'Sportski kamp KaraTaš',
  'Спортски камп Караташ је комплекс за тренинге и спортске активности; спортски кампови обично пружају терене, смештај и пратеће садржаје за спортисте и посетиоце.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sports_camp_example.jpg/250px-Sports_camp_example.jpg'
));

pozarevac.on('click', () => openInfo(
  'Sportski centar Požarevac',
  'Спортски центар у Пожаревцу је локални мултиспортивни објекат који служи за тренинге, такмичења и рекреацију; модерни центри обухватају затворене и отворене терене и пратећу инфраструктуру.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sports_center_example.jpg/250px-Sports_center_example.jpg'
));

cair.on('click', () => openInfo(
  'Sportski centar Čair',
  'Спортски центар Чаир је велики комплекс са вишенамеским халама, теренима и пратећим садржајима за спорт и догађаје; познат је као важан градски спортски комплекс у Нишу.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cair_Sports_Center.jpg/250px-Cair_Sports_Center.jpg'
));

stara.on('click', () => openInfo(
  'Stara planina',
  'Стара планина (Ђердап/и други називи у региону) је планински масив на граници Србије и Бугарске, познат по биодиверзитету, планинарским рутама и зимским спортовима.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stara_planina_example.jpg/250px-Stara_planina_example.jpg'
));

djavoljav.on('click', () => openInfo(
  'Đavolja Varoš',
  'Ђавоља Вaroш је природни феномен у Србији, познат по јединственим стубастим формацијама од вулканских седимента и заштићен као природни споменик.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Djavolja_Varo%C5%A1_panorama.jpg/250px-Djavolja_Varo%C5%A1_panorama.jpg'
));

samar.on('click', () => openInfo(
  'Prerast Šamar',
  'Прераст Шамар је природни споменик и геолошка формација, познат по импресивним стенама и пејзажу; користи се као туристичка атракција и природни локалитет за посете.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Prerast_Samar_example.jpg/250px-Prerast_Samar_example.jpg'
));

vir.on('click', () => openInfo(
  'Lepenski Vir',
  'Лепенски Вир је археолошко налазиште у Србији са значајним неолитским остацима и сложеном праисторијском културом; место је једно од најважнијих праисторијских налазишта на Балкану.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Lepenski_Vir.jpg/250px-Lepenski_Vir.jpg'
));

smederevska.on('click', () => openInfo(
  'Smederevska tvrđava',
  'Смедеревска тврђава је средњевековни утврђени град на Дунаву, подигнут у 15. веку као престонички замак деспота и краљева; представља значајан историјски и архитектонски споменик.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Smederevo_fortress.jpg/250px-Smederevo_fortress.jpg'
));

manasija.on('click', () => openInfo(
  'Manastir Manasija',
  'Манасија је српски православни манастир из 15. века, познат по својим моћним бедемима, фрескама и школе монашке књижевности (Манасијска школа); налази се код Деспотовца и представља важан споменик средњевековне српске културе.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Manasija_monastery.jpg/250px-Manasija_monastery.jpg'
));

golubacka.on('click', () => openInfo(
  'Golubačka tvrđava',
  'Голубачка тврђава је утврђење на Дунаву код Голупца, са историјским значајем као стратегијска тачка на граници; тврђава је добро очувана и важна туристичка дестинација.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Golubac_fortress.jpg/250px-Golubac_fortress.jpg'
));