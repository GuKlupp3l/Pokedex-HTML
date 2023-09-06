function aparecerMenu(){
    const menu = document.getElementById("menu");

    if(menu.style.display == "none" || menu.style.display == ""){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
}

function fecharMenu(){
    var menu = document.getElementById('menu');

    menu.style.display = 'none';

}