console.log('works');
//p0
let slideIndex = 1;
const showSlides = (n) =>{
  //all imgs in an array
    const stock = document.getElementsByClassName('mySlides');
  //second array with all imgs
    const imgS = document.getElementsByClassName('demo');
  //captions to be added along with each img
    const captions = document.getElementById('caption');
    //img selector > total imgs, starts again from the first one *
    if (n > stock.length) {slideIndex = 1} //starts from Begin *
    if (n < 1) {slideIndex = stock.length} //starts from End *
  //hide all images with array1
    for (let i = 0;  i < stock.length; i++){
        stock[i].style.display = 'none';
    }
  //Pass 'active' class to next picture when function runs
    for (let j = 0; j < imgS.length; j++){
        imgS[j].className = imgS[j].className.replace(' active', ' ');
    }
    stock[slideIndex-1].style.display = "block";
    imgS[slideIndex-1].className += " active";
    captions.innerHTML = imgS[slideIndex-1].alt;
}
showSlides(slideIndex);

const plusSlides = (n) =>{
  showSlides(slideIndex += n);
}
//--------------------------------
