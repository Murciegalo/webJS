console.log('works');
//SHOW NAV WHEN SCROLLS + 20 px
const rolling = () =>{
  (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? document.getElementById('navbar').style.top = "0" : document.getElementById('navbar').style.top = "-70px"
}

// On scrolldown
window.onscroll = function() {rolling()};
//--------------------------------------------------
// HIDE NAV WHEN USER SCROLLS DOWN AND SHOW IT WHEN SCROLLS UP
// let prevScrollpos = window.pageYOffset;
// window.onscroll = () => {
//   let currentScrollPos = window.pageYOffset;
//   (prevScrollpos > currentScrollPos) ?
//     document.getElementById("navbar").style.top = "0" :
//     document.getElementById("navbar").style.top = "-50px";
//
// prevScrollpos = currentScrollPos;
// }
//window.pageYOffset
//window.pageXOffset
