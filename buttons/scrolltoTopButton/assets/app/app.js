console.log('works?');
const b = document.getElementById('myBtn');

window.onscroll = function(){ test();}
const test = () => {
  // 730 pixels away from top window
  (document.body.scrollTop > 730 || document.documentElement.scrollTop > 730) ?
        b.style.display = "block":
        b.style.display = "none";
}
b.addEventListener('click', () =>{
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox, IE, Opera
} , false)
//------------------------------------------------------------------
