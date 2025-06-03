//mazzo di carte
//Picche = \u2660, Cuori = \u2665, Quadri = \u2666, Fiori = \u2663
let carte = 
[
    //cuori
    {nome: "A_cuori", img: Object.assign(new Image(), {src: "./img/ace_of_hearts.png"})},
    {nome: "2_cuori", img: Object.assign(new Image(), {src: "./img/2_of_hearts.png"})},
    {nome: "3_cuori", img: Object.assign(new Image(), {src: "./img/3_of_hearts.png"})},
    {nome: "4_cuori", img: Object.assign(new Image(), {src: "./img/4_of_hearts.png"})},
    {nome: "5_cuori", img: Object.assign(new Image(), {src: "./img/5_of_hearts.png"})},
    {nome: "6_cuori", img: Object.assign(new Image(), {src: "./img/6_of_hearts.png"})},
    {nome: "7_cuori", img: Object.assign(new Image(), {src: "./img/7_of_hearts.png"})},
    {nome: "8_cuori", img: Object.assign(new Image(), {src: "./img/8_of_hearts.png"})},
    {nome: "9_cuori", img: Object.assign(new Image(), {src: "./img/9_of_hearts.png"})},
    {nome: "10_cuori", img: Object.assign(new Image(), {src: "./img/10_of_hearts.png"})},
    {nome: "J_cuori", img: Object.assign(new Image(), {src: "./img/jack_of_hearts2.png"})},
    {nome: "Q_cuori", img: Object.assign(new Image(), {src: "./img/queen_of_hearts2.png"})},
    {nome: "K_cuori", img: Object.assign(new Image(), {src: "./img/king_of_hearts2.png"})},
    //fiori
    {nome: "A_fiori", img: Object.assign(new Image(), {src: "./img/ace_of_clubs.png"})},
    {nome: "2_fiori", img: Object.assign(new Image(), {src: "./img/2_of_clubs.png"})},
    {nome: "3_fiori", img: Object.assign(new Image(), {src: "./img/3_of_clubs.png"})},
    {nome: "4_fiori", img: Object.assign(new Image(), {src: "./img/4_of_clubs.png"})},
    {nome: "5_fiori", img: Object.assign(new Image(), {src: "./img/5_of_clubs.png"})},
    {nome: "6_fiori", img: Object.assign(new Image(), {src: "./img/6_of_clubs.png"})},
    {nome: "7_fiori", img: Object.assign(new Image(), {src: "./img/7_of_clubs.png"})},
    {nome: "8_fiori", img: Object.assign(new Image(), {src: "./img/8_of_clubs.png"})},
    {nome: "9_fiori", img: Object.assign(new Image(), {src: "./img/9_of_clubs.png"})},
    {nome: "10_fiori", img: Object.assign(new Image(), {src: "./img/10_of_clubs.png"})},
    {nome: "J_fiori", img: Object.assign(new Image(), {src: "./img/jack_of_clubs2.png"})},
    {nome: "Q_fiori", img: Object.assign(new Image(), {src: "./img/queen_of_clubs2.png"})},
    {nome: "K_fiori", img: Object.assign(new Image(), {src: "./img/king_of_clubs2.png"})},
    //picche
    {nome: "A_picche", img: Object.assign(new Image(), {src: "./img/ace_of_spades.png"})},
    {nome: "2_picche", img: Object.assign(new Image(), {src: "./img/2_of_spades.png"})},
    {nome: "3_picche", img: Object.assign(new Image(), {src: "./img/3_of_spades.png"})},
    {nome: "4_picche", img: Object.assign(new Image(), {src: "./img/4_of_spades.png"})},
    {nome: "5_picche", img: Object.assign(new Image(), {src: "./img/5_of_spades.png"})},
    {nome: "6_picche", img: Object.assign(new Image(), {src: "./img/6_of_spades.png"})},
    {nome: "7_picche", img: Object.assign(new Image(), {src: "./img/7_of_spades.png"})},
    {nome: "8_picche", img: Object.assign(new Image(), {src: "./img/8_of_spades.png"})},
    {nome: "9_picche", img: Object.assign(new Image(), {src: "./img/9_of_spades.png"})},
    {nome: "10_picche", img: Object.assign(new Image(), {src: "./img/10_of_spades.png"})},
    {nome: "J_picche", img: Object.assign(new Image(), {src: "./img/jack_of_spades2.png"})},
    {nome: "Q_picche", img: Object.assign(new Image(), {src: "./img/queen_of_spades2.png"})},
    {nome: "K_picche", img: Object.assign(new Image(), {src: "./img/king_of_spades2.png"})},
    //quadri
    {nome: "A_quadri", img: Object.assign(new Image(), {src: "./img/ace_of_diamonds.png"})},
    {nome: "2_quadri", img: Object.assign(new Image(), {src: "./img/2_of_diamonds.png"})},
    {nome: "3_quadri", img: Object.assign(new Image(), {src: "./img/3_of_diamonds.png"})},
    {nome: "4_quadri", img: Object.assign(new Image(), {src: "./img/4_of_diamonds.png"})},
    {nome: "5_quadri", img: Object.assign(new Image(), {src: "./img/5_of_diamonds.png"})},
    {nome: "6_quadri", img: Object.assign(new Image(), {src: "./img/6_of_diamonds.png"})},
    {nome: "7_quadri", img: Object.assign(new Image(), {src: "./img/7_of_diamonds.png"})},
    {nome: "8_quadri", img: Object.assign(new Image(), {src: "./img/8_of_diamonds.png"})},
    {nome: "9_quadri", img: Object.assign(new Image(), {src: "./img/9_of_diamonds.png"})},
    {nome: "10_quadri", img: Object.assign(new Image(), {src: "./img/10_of_diamonds.png"})},
    {nome: "J_quadri", img: Object.assign(new Image(), {src: "./img/jack_of_diamonds2.png"})},
    {nome: "Q_quadri", img: Object.assign(new Image(), {src: "./img/queen_of_diamonds2.png"})},
    {nome: "K_quadri", img: Object.assign(new Image(), {src: "./img/king_of_diamonds2.png"})}];

//dichiaro i giocatori (denaro, carte)
let giocatore = {denaro: 50, puntata: 0, carte: []},
    bot1 = {denaro: 50, puntata: 0, carte: []},
    bot2 = {denaro: 50, puntata: 0, carte: []},  
    bot3 = {denaro: 50, puntata: 0, carte: []};

//statistiche iniziali
document.getElementById("denaroGiocatore").textContent = giocatore.denaro;
document.getElementById("denaroBot1").textContent = bot1.denaro;
document.getElementById("denaroBot2").textContent = bot2.denaro;
document.getElementById("denaroBot3").textContent = bot3.denaro; 
document.getElementById("puntataGiocatore").textContent = giocatore.puntata;
document.getElementById("puntataBot1").textContent = bot1.puntata;
document.getElementById("puntataBot2").textContent = bot2.puntata;
document.getElementById("puntataBot3").textContent = bot3.puntata;

//funzione random
let rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//funzione ferma tempo
function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

//carta random dal mazzo
function daiCarte()
{
    let dim = rand(0, carte.length);
    for(let i = 0; i < carte.length; i++)
    {
        if(dim == 0)
            return carte[i].nome;
        dim--;
    }
}

//funzione OnLine
function OnLine()
{
    alert("prossimamente...")
}

//funzione partita (main)
async function gioca()
{
    //elimina bottone "gioca"
    document.getElementById("bottoneGioca").remove();

    //creazione nuovi elementi (Dealer)
    let h2 = document.createElement("h2");
    h2.textContent = "Dealer";
    h2.style.left = "20px";
    h2.style.fontSize = "40px";
    document.getElementById("tavolo").appendChild(h2);

    //caricamento (random) puntate bot
    bot1.puntata = rand(1, bot1.denaro);
    document.getElementById("puntataBot1").textContent = bot1.puntata;
    bot2.puntata = rand(1, bot2.denaro);
    document.getElementById("puntataBot2").textContent = bot2.puntata;
    bot3.puntata = rand(1, bot3.denaro);
    document.getElementById("puntataBot3").textContent = bot3.puntata;
    alert("bot1 punta " + bot1.puntata + ", bot2 punta " + bot2.puntata + " e bot3 punta " + bot3.puntata);

    //puntata giocatore
    giocatore.puntata = prompt("Inserisci la tua puntata");
    do
    {
        if(giocatore.puntata > giocatore.denaro || giocatore.puntata < 1)
            giocatore.puntata = prompt("puntata scorretta! riprova");
    }
    while(giocatore.puntata > giocatore.denaro || giocatore.puntata < 1);
    document.getElementById("puntataGiocatore").textContent = giocatore.puntata;

}
