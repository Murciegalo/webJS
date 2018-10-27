console.log('works?');
//event delegation to be added on menu

window.onscroll = function(){ scrolling()}

const scrolling = () =>{
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    document.getElementById('navbar').style.padding = "30px 10px"
    document.getElementById('logo').style.fontSize = "25px";
  }else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
