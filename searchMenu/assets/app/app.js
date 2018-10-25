console.log('works');
// SEARCH menu with JS
let search = document.getElementById('mySearch');
//filter
const filter = search.value.toUpperCase();
const stock = document.getElementsByTagName('li');
search.addEventListener('keydown', () =>{
  for (let i = 0; i  < stock.length;  i++){
    let result = stock[i].getElementsByTagName('a')[0];  //HTML (NO str)
    if(result.innerHTML.toUpperCase().indexOf(filter) > -1)
    {
        stock[i].style.display = ' '
    }else { stock[i].style.display = 'none'; }
  }
});
