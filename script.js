//cviceni vyplata

const mmzdaDen = 7 * 320
const pocetDni = 21

document.body.innerHTML += "<p>Mesíční příjem: " + mmzdaDen * pocetDni + " Kč</p>"

const dane = 0.4 * (mmzdaDen * pocetDni)
document.body.innerHTML += "<p>Ke zdanění: " + dane + " Kč</p>"
document.body.innerHTML += "<p>Daně: " + Math.floor(dane * 0.15) + " Kč</p>"


//reseni myslím, že by místo 265 mělo být 320
//document.body.innerHTML += Math.floor(21 * 7 * 265 * (1 - 0.6) * 0.15);

document.body.innerHTML +="<br>"
document.body.innerHTML += "<p>Délka filmu: " + Math.floor(223/60) + " hodiny " + 223 % 60 + " minut</p>"

//% modulo zbytek po dělení

document.body.innerHTML +="<br>"

const jmeno = "Tereza"
const prijmeni = "Svobodova"
document.body.innerHTML += "<p>" + jmeno +"." + prijmeni + "@mujmail.com</p>"


document.body.innerHTML +="<br>"

const start = 15
const delka = 15
const konec = ( start + delka ) % 24
document.body.innerHTML += "<p>Závodník doběhl v " + konec + " hodin</p>"

document.body.innerHTML +="<br>"
document.body.innerHTML += "<p>Náhodné číslo: " + Math.random() + "</p>"
document.body.innerHTML +="<br>"

const wageInEur = 20
const kurzEuro = 24.55
var wageInCzk = Math.round(wageInEur * kurzEuro)
document.body.innerHTML += "<h1>Mzda v korunách: " + wageInCzk + " Kč</h1>"

// pokud chci nadpis <h1> nebo dle formátování