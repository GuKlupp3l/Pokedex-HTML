//Botão para menu esquerdo
const btnMenu = document.getElementById('btn-redondo');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', function(){

    if (menu.classList.contains('esconder')){
        menu.classList.remove('esconder');
        menu.classList.add('mostrar');
    }else{
        menu.classList.remove('mostrar');
        menu.classList.add('esconder');
    }
})



let currentpoke = 1;

//lista pokemons
const pokemons = [
    {numero: "001" , nome: "Bulbasaur" },
    {numero: "002" , nome: "Ivysaur" },
    {numero: "003" , nome: "Venusaur" },
    {numero: "004" , nome: "Charmander" },
    {numero: "005" , nome: "Charmeleon" },
    {numero: "006" , nome: "Charizard" },
    {numero: "007" , nome: "Squirtle" },
    {numero: "008" , nome: "Wartotle" },
    {numero: "009" , nome: "Blastoise" }
];

window.onload = function(){
    atualizarDescricao();
}

function alterarImagem(direcao){
    currentpoke += direcao;

    if(currentpoke < 1){
        currentpoke = 1;
    }else if(currentpoke>9){
        currentpoke = 9;
    }
    atualizarDescricao();
}
function atualizarDescricao(){
    let formattedNumber = String(currentpoke).padStart(3, '0');
    document.getElementById('pokeImagem').src = 'IMG/Pokes/poke' + formattedNumber + '.png';
    document.getElementById('pokeImagem').alt = 'Pokemon' + formattedNumber;

    let pokeData = pokemons[currentpoke - 1];
    document.getElementById('NomePoke').textContent = "Nome: " + pokeData.nome;
    document.getElementById('PokeDex').textContent = "Pokedex:  " + pokeData.numero;
}


