export const inicio_historia = () =>{
var link = document.createElement("link");
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'estilos.css';
document.head.appendChild(link);
let divGrande = document.createElement("div");
document.body.appendChild(divGrande);

const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.textContent = 'Una historia de zombies';
header.appendChild(h1);
divGrande.appendChild(header);

const h3 = document.createElement('h3');
const i = document.createElement('i');
const b = document.createElement('b');
b.textContent = 'Inicio de la infección';
i.appendChild(b);
h3.appendChild(i);
divGrande.appendChild(h3);

const img = document.createElement('img');
img.setAttribute('src', 'https://services.meteored.com/img/article/vuelve-el-virus-zombi-mas-antiguo-de-la-historia-1669831158220_1280.jpg');
img.setAttribute('width', '200');
img.setAttribute('height', '150');
img.setAttribute('alt', 'virus');
img.className="animate__animated animate__bounce";

const p = document.createElement('p');
p.innerHTML = `El 24 de junio del año 2032 te encuentras en tu casa con tu hermano. Aproximadamente a las 10 de la mañana escuchan en las noticias
que ha empezado a brotar un virus que afecta a los humanos por lo que se recomienda no salir de casa. A pesar de esto mucha gente
decide salir ya que al estar encerrados les hará falta comida por lo que deciden ir a traer. Tú y tu hermano deciden quedarse ya que 
tienen suficiente comida para 1 semana. Luego de 4 horas de estar encerrados las noticias anuncian que el contagio ah crecido
demasiado por lo que no deben de salir de casa si no desean contagiarse, en este momento se hace uso por primera vez la palabra 
"Zombie" para referirce a las personas infectadas inmediatamente después de esto la transmición se corta.`;

const progress = document.createElement('progress');
progress.setAttribute('value', '12');
progress.setAttribute('max', '100');

const span = document.createElement('span');
span.textContent = '12/100';

const footer = document.createElement('footer');
const a1 = document.createElement('div');
const a2 = document.createElement('a');

a1.textContent = 'Avanzar';

a2.href = "nuevos-lanzamientos.html";
a2.textContent = 'Regresar a nuevos lanzamientos';
a2.classList.add('btn', 'btn-primary');

footer.appendChild(a1);
footer.appendChild(document.createElement('br'));
footer.appendChild(document.createElement('br'));
footer.appendChild(a2);

let Rowdiv = document.createElement("div");
Rowdiv.classList.add("row");
divGrande.appendChild(Rowdiv);
let col1 = document.createElement("div");
col1.classList.add("col");
Rowdiv.appendChild(col1);
col1.appendChild(p);
col1.appendChild(progress);
col1.appendChild(document.createElement('br'));
col1.appendChild(span);
col1.appendChild(document.createElement('br'));

let col2 = document.createElement("div");
col2.classList.add("col");
Rowdiv.appendChild(col2);

col2.appendChild(img);

divGrande.appendChild(footer);
return(divGrande);
}