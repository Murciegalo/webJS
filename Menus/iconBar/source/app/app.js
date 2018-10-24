console.log('does it work?');
//ANIMATION FOR MENU BARS
const sec = document.querySelector("#animated");
sec.addEventListener('click', () => {
    let result = document.querySelector('.animatedMenu');
    result.classList.toggle('change');
})
//-----------------------------------------------------
// ANIMATION FOR BUTTONS
//construct array with data I need.
const acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        (panel.style.display === "block") ? panel.style.display = "none" :
           panel.style.display = "block";
  });
}
//-----------------------------------------------------
