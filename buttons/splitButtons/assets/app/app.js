console.log('works');
document.getElementById('myBtn').addEventListener('click', ()=>{
    let more = document.getElementById('more');
    let result = document.getElementById('myBtn');
    let dots = document.getElementById('dots');
      if (more.style.display == "none") {
        more.style.display = 'inline';
        result.innerHTML = "Read Less";
        dots.style.display = 'none';
        } else {
          dots.style.display = "inline";
          result.innerHTML = "Read more";
          more.style.display = "none";
        }
}, false);
//--------------------------------
