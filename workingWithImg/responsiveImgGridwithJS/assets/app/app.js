console.log('works');
// Open
// EVENT DELEGATION TO BE ADDED
const tobeDisplayed = document.getElementById('displayEdeleg');
const stock = document.getElementsByClassName('column');

tobeDisplayed.addEventListener('click', (e) =>{
    for (let i = 0;  i  < stock.length;  i++){
        (e.target.id === "button1") ? stock[i].style.flex = "100%" :
        (e.target.id === "button2") ? stock[i].style.flex = "50%" :
        (e.target.id === "button4") ? stock[i].style.flex = "25%" :
        'condition expressed wrong way';
    }
});

//--------------------------------
