console.log('works');
// SEARCH menu with JS
const search = document.getElementById('mySearch');
search.addEventListener('keyup', () =>{
  //filter
  const filter = search.value.toUpperCase();
  const stock = document.getElementsByTagName('li');
  for (let i = 0; i  < stock.length;  i++){
    let result = stock[i].getElementsByTagName('a')[0];  //H...
    if(result.innerText.toUpperCase().indexOf(filter) > -1) {
        stock[i].style.display = ' '
    }else { stock[i].style.display = 'none'; } //if li not contains it, hide it
  }
});
//---------------------------------------
