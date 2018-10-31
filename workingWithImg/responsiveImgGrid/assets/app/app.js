console.log('works');
// Open
const pimage = document.getElementById('porkyPo');
pimage.addEventListener('click', () => {
    document.getElementById('mySidenav').style.width = "250px"; //or full witdh
  //Push content & opacity
  document.getElementById('main').style.marginLeft = "250px";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
})
//closebtn
const close = document.getElementById('closebtn');
close.addEventListener('click', () => {
  document.getElementById('mySidenav').style.width = "0px";
  //Push content & opacity
  document.getElementById("main").style.marginLeft = "0";
  // document.body.style.backgroundColor = "white";
})
//--------------------------------
