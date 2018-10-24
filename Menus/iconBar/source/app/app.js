console.log('does it work?');
const sec = document.querySelector("#animated");
sec.addEventListener('click', () => {
    let result = document.querySelector('.animatedMenu');
    result.classList.toggle('change');
})
