console.log('works');
// Open
// BUTTONS
const n = document.querySelectorAll('#nature');
const c = document.querySelectorAll('#cars');
const p = document.querySelectorAll('#people');
document.getElementById('btnContainer').addEventListener('click', (e)=>{
    // CATEGORY 1
    if(e.target.name === 'nature') {
      // SHOW ME THIS ONE
       for (let i = 0; i < n.length; i++){
        n[i].style.display = 'block';
      } //REMOVE THIS CATEGORY
      for (let i = 0; i < c.length; i++){
       c[i].style.display = 'none';
     }  //REMOVE THIS CATEGORY
     for (let i = 0; i < p.length; i++){
      p[i].style.display = 'none';
    }
  }  //CATEGORY 2
    if(e.target.name === 'cars') {
       for (let i = 0; i < c.length; i++){
        c[i].style.display = 'block';
      } //REMOVE THIS CATEGORY
      for (let i = 0; i < n.length; i++){
       n[i].style.display = 'none';
     } //REMOVE THIS CATEGORY
     for (let i = 0; i < p.length; i++){
      p[i].style.display = 'none';
    }
  }  //CATEGORY 3
    if(e.target.name === 'people') {
       for (let i = 0; i < p.length; i++){
        p[i].style.display = 'block';
      }
      for (let i = 0; i < c.length; i++){
       c[i].style.display = 'none';
     }  //REMOVE THIS CATEGORY
     for (let i = 0; i < n.length; i++){
      n[i].style.display = 'none';
    }
  } //ALL CATEGORIES DISPLAYED
  if(e.target.name === 'all') {
     for (let i = 0; i < p.length; i++){
      p[i].style.display = 'block';
    }
    for (let i = 0; i < c.length; i++){
     c[i].style.display = 'block';
   }  //REMOVE THIS CATEGORY
   for (let i = 0; i < n.length; i++){
    n[i].style.display = 'block';
  }
}
});
//--------------------------------
