// Eliminar de Local Storage
localStorage.clear();
let nuevoEncabezado = document.createElement('h1');

nuevoEncabezado.id = 'create';
nuevoEncabezado.textContent = 'Catálogo de Cursos';
nuevoEncabezado.style.padding = '20px';

let tobesub = document.querySelector('#encabezado');

let padre = document.querySelector('#lista-cursos');



padre.replaceChild(nuevoEncabezado, tobesub);

console.log(nuevoEncabezado);
