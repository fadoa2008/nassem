let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Fedaa = document.querySelector('.Fedaa');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 6 + 'px';
    mountains3.style.top = value * 5 + 'px';
    mountains4.style.top = value * 1.7 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 8 + 'px';
    Fedaa.style.fontSize = value + 'px';
    if(scrollY >= 207){
        Fedaa.style.fontSize = 207 + 'px'; 
        Fedaa.style.position = 'fixed'; 
        if(scrollY >=400){
        Fedaa.style.display = 'none'; 
        }else{
            Fedaa.style.display = 'block'; 
        }
    }
}
