// Navbar
let hamburgerIcon = document.getElementById('hamburger');
let navigation = document.querySelector('#navMobile');
let closeIcon = document.querySelector('#close');
let body = document.querySelector('body');

function tampilkanNav(){
    console.log('Tampilkan');
    navigation.classList.remove("translate-x-full");
    navigation.classList.add("-translate-x-0");
    body.classList.add("overflow-hidden")
}

function hilangkanNav(){
    console.log('hilangkan');
    navigation.classList.remove("-translate-x-0");
    navigation.classList.add("translate-x-full");
    body.classList.remove("overflow-hidden")
}
