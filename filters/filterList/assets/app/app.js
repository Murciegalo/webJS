console.log('works?');
// Stock where filter needs to be applied to
const stock = document.getElementsByTagName('li');
// Input to be matched against stock
const inp = document.getElementById('myInput').value.toLowerCase();
const filter = () =>{
  if(inp.length > 0){
    for (let i = 0;  i < stock.length;   i++){
        (stock[i].innerText[0].toLowerCase().indexOf(inp) > -1) ?
            stock[i].style.display = ' ' :
            stock[i].style.display = 'none'
    }
  }
}
// HANDLERS
const inpII = document.getElementById('myInput');
inpII.addEventListener('keyup', filter());
//------------------------------------------------------------------
