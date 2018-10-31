console.log('works');
// Open
// EVENT DELEGATION TO BE ADDED

//--------------------
const stock = document.getElementsByClassName('column');
const dis1 = () =>{
  for (let i = 0; i < stock.length; i++){
    stock[i].style.flex = "100%";
  }
}
// 50%
const dis2 = () =>{
  for (let i = 0; i < stock.length; i++){
    stock[i].style.flex = "50%";
  }
}
// 25%
const dis4 = () =>{
  for (let i = 0; i < stock.length; i++){
    stock[i].style.flex = "25%";
  }
}
//--------------------------------
