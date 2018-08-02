function slideone(){
   document.getElementById("footone").style.display="block";
   document.getElementById("foottwo").style.display="none"; 
   document.getElementById("footthree").style.display="none"; 
   document.getElementById("footfour").style.display="none"; 

}
function slidetwo(){
   document.getElementById("foottwo").style.display="block"; 
   document.getElementById("footthree").style.display="none"; 
   document.getElementById("footfour").style.display="none";
   document.getElementById("footone").style.display="none";

}
function slidethree(){
   document.getElementById("footthree").style.display="block"; 
   document.getElementById("footfour").style.display="none"; 
   document.getElementById("footone").style.display="none";
   document.getElementById("foottwo").style.display="none"; 

}
function slidefour(){
   document.getElementById("footfour").style.display="block";
   document.getElementById("footone").style.display="none";
   document.getElementById("foottwo").style.display="none"; 
   document.getElementById("footthree").style.display="none";  

}
function slide(){
    setTimeout(slideone,1000);
    setTimeout(slidetwo,3000);
    setTimeout(slidethree,5000);
    setTimeout(slidefour,7000);
}
setInterval(slide,9000);
