var slideIndex = 1;
showslider(slideIndex);

//next image controls
function plusSlides(n){
    showslider(slideIndex += n);
}
//dot image controls
function currentSlide(n){
    showslider(slideIndex = n);
}
function showslider(n){
    var i;
    var slides =document.getElementsByClassName("myslides");
    var dots =document.getElementsByClassName("dot");
    if (n>slides.length){slideIndex=1;}
    if (n<1){slideIndex=slides.length;}
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active"," ");

    }
    slides[slideIndex -1].style.display="block";
    dots[slideIndex -1].className +=" active";
}


  