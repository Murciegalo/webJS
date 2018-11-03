console.log('works');
// Open
const n = document.querySelectorAll('#nature');
const c = document.querySelectorAll('#cars');
const p = document.querySelectorAll('#people');
document.getElementById('btnContainer').addEventListener('click', (e)=>{
    if(e.target.name === 'nature') {
       for (let i = 0; i < n.length; i++){
        n[i].style.display = 'block';
      }
    }
    if(e.target.name === 'cars') {
       for (let i = 0; i < c.length; i++){
        c[i].style.display = 'block';
      }
    }
    if(e.target.name === 'cars') {
       for (let i = 0; i < p.length; i++){
        p[i].style.display = 'block';
      }
    }
});
//--------------------------------
