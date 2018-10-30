console.log('works');
//p0 Position 0 by default
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

// FUNCTION FOR PREVIOUS/NEXT IMG PASSER
const plusSlides = (n) =>{
  showSlides(slideIndex += n);
}
//FUNCTION FOR CLOSING MODAL VIEW
const closeModal = () => { document.getElementById('myModal').style.display = 'none'; }
//FUNCTION FOR OPEN MODAL VIEW
const modalViewer = () =>{
  const imgScolums = document.getElementsByClassName('column1');
  console.log(imgScolums);
  for (let i = 0; i < imgScolums.length; i++){
    imgScolums[i].addEventListener('click', function(){
        document.getElementById('myModal').style.display = 'block';
    });
  }
}
modalViewer();
//--------------------------------
// HANDLERS
// ARROW FOR PREVIOUS PICTURE
const prev = document.getElementById('prev').addEventListener('click', function(){ plusSlides(-1); }, false);
// ARROW FOR NEXT PICTURE
const next = document.getElementById('next').addEventListener('click', function(){ plusSlides(1); }, false);
//CLOSE 'X' MODAL VIEW
const x = document.getElementById('closeMV').addEventListener('click', function(){  closeModal(); }, false);
//OPEN MODAL VIEW
