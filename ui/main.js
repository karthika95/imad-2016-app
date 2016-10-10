console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML="Hello. Now text is changed through java script :) ";

//To move the pic 
var image = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft+=1;
    image.style.marginLeft= marginLeft +'px';
}
image.onclick = function() {
    var interval = setInterval(moveRight,50);
    image.style.marginleft='100px';
}