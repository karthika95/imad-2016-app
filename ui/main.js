console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML="Hello. Now text is changed through java script :) ";

//To move the pic 
var image = document.getElementById('madi');
image.onclick = function() {
    image.style.marginleft='100px';
}