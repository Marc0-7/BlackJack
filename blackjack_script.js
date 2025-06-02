//mazzo di carte
//Picche = \u2660, Cuori = \u2665, Quadri = \u2666, Fiori = \u2663
let carte = 
[
    //cuori
    {nome: "A_cuori", img: Object.assign(new Image(), {src: ""})},
    {nome: "2_cuori", img: Object.assign(new Image(), {src: ""})},
    {nome: "3_cuori", img: Object.assign(new Image(), {src: ""})},
    {nome: "4_cuori", img: Object.assign(new Image(), {src: ""})},
    {nome: "5_cuori", img: Object.assign(new Image(), {src: ""})},
    {nome: "6_cuori", img: Object.assign(new Image(), {src: ""})},
    {nome: "7_cuori", img: Object.assign(new Image(), {src: ""})},
    {nome: "8_cuori", img: Object.assign(new Image(), {src: ""})},
    {nome: "9_cuori", img: Object.assign(new Image(), {src: ""})},
    {nome: "10_cuori", img: Object.assign(new Image(), {src: ""})},
    {nome: "J_cuori", img: Object.assign(new Image(), {src: ""})},
    {nome: "Q_cuori", img: Object.assign(new Image(), {src: ""})},
    {nome: "K_cuori", img: Object.assign(new Image(), {src: ""})},
    //fiori
    {nome: "A_fiori", img: Object.assign(new Image(), {src: ""})},
    {nome: "2_fiori", img: Object.assign(new Image(), {src: ""})},
    {nome: "3_fiori", img: Object.assign(new Image(), {src: ""})},
    {nome: "4_fiori", img: Object.assign(new Image(), {src: ""})},
    {nome: "5_fiori", img: Object.assign(new Image(), {src: ""})},
    {nome: "6_fiori", img: Object.assign(new Image(), {src: ""})},
    {nome: "7_fiori", img: Object.assign(new Image(), {src: ""})},
    {nome: "8_fiori", img: Object.assign(new Image(), {src: ""})},
    {nome: "9_fiori", img: Object.assign(new Image(), {src: ""})},
    {nome: "10_fiori", img: Object.assign(new Image(), {src: ""})},
    {nome: "J_fiori", img: Object.assign(new Image(), {src: ""})},
    {nome: "Q_fiori", img: Object.assign(new Image(), {src: ""})},
    {nome: "K_fiori", img: Object.assign(new Image(), {src: ""})},
    //picche
    {nome: "A_picche", img: Object.assign(new Image(), {src: ""})},
    {nome: "2_picche", img: Object.assign(new Image(), {src: ""})},
    {nome: "3_picche", img: Object.assign(new Image(), {src: ""})},
    {nome: "4_picche", img: Object.assign(new Image(), {src: ""})},
    {nome: "5_picche", img: Object.assign(new Image(), {src: ""})},
    {nome: "6_picche", img: Object.assign(new Image(), {src: ""})},
    {nome: "7_picche", img: Object.assign(new Image(), {src: ""})},
    {nome: "8_picche", img: Object.assign(new Image(), {src: ""})},
    {nome: "9_picche", img: Object.assign(new Image(), {src: ""})},
    {nome: "10_picche", img: Object.assign(new Image(), {src: ""})},
    {nome: "J_picche", img: Object.assign(new Image(), {src: ""})},
    {nome: "Q_picche", img: Object.assign(new Image(), {src: ""})},
    {nome: "K_picche", img: Object.assign(new Image(), {src: ""})},
    //quadri
    {nome: "A_quadri", img: Object.assign(new Image(), {src: ""})},
    {nome: "2_quadri", img: Object.assign(new Image(), {src: ""})},
    {nome: "3_quadri", img: Object.assign(new Image(), {src: ""})},
    {nome: "4_quadri", img: Object.assign(new Image(), {src: ""})},
    {nome: "5_quadri", img: Object.assign(new Image(), {src: ""})},
    {nome: "6_quadri", img: Object.assign(new Image(), {src: ""})},
    {nome: "7_quadri", img: Object.assign(new Image(), {src: ""})},
    {nome: "8_quadri", img: Object.assign(new Image(), {src: ""})},
    {nome: "9_quadri", img: Object.assign(new Image(), {src: ""})},
    {nome: "10_quadri", img: Object.assign(new Image(), {src: ""})},
    {nome: "J_quadri", img: Object.assign(new Image(), {src: ""})},
    {nome: "Q_quadri", img: Object.assign(new Image(), {src: ""})},
    {nome: "K_quadri", img: Object.assign(new Image(), {src: ""})}];

//dichiaro i giocatori (denaro, carte)
let player = {denaro: 50, puntata: 0, carte: []}, bot1 = {denaro: 50, puntata: 0, carte: []},
bot2 = {denaro: 50, puntata: 0, carte: []}, bot3 = {denaro: 50, puntata: 0, carte: []};


//carta random dal mazzo
function daiCarte()
{
    let dim = (Math.floor(Math.random() * carte.length));
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

//funzione partita
function gioca()
{
    document.getElementById("bottoneGioca").remove();
    prompt("Inserisci la tua puntata: ");
}

