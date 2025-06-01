//header
function OnLine()
{
    alert("prossimamente...")
}
//mazzo di carte, Picche = \u2660, Cuori = \u2665, Quadri = \u2666, Fiori = \u2663
let carte = 
[
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

]
for (let i = 0; i < carte.length; i++)
{

}
//.
//.
let g1 = [], g2 = [], g3 = [], g4 = [];
//carta random dal mazzo
function daiCarte()
{
    let dim = (Math.floor(Math.random() * carte.length * carte[0].length)), x;
    for(let i = 0; i < carte.length; i++)
        for(let j = 0; j < carte[0].length; j++)
        {
            if(dim == 0)
                return x = carte[i][j];
            dim--;
        }
}

