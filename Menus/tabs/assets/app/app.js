console.log('works?');
// ALL BUTTONS
const handlers = document.getElementsByClassName('tablinks');
//ALL CONTENT TO BE DISPLAYED
const tabcontent = document.getElementsByClassName("tabcontent");
//EVENTLISTENERS
for (let i = 0;  i < handlers.length; i++){
  //make sure no Active class is populated on any other element when you run
  handlers[i].addEventListener('click', (e) => {
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }
    // add Active class just on selected element
    let result = handlers[i].innerHTML;
    let comparator = document.getElementById(result);
    comparator.classList.toggle('active');
  });
}
