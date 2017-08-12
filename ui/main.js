console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
element.innerHTML='New Value';
 //move the image
 var img=document.getElementById('madi');
 img.onclick = function (){
     var interval=setInterval(moveRight, 50);
 }