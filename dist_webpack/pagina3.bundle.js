(()=>{"use strict";window.onload=()=>{document.getElementById("lanzamientos").appendChild((()=>{var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="estilos.css",document.head.appendChild(e);let t=document.createElement("div");document.body.appendChild(t);const n=document.createElement("header"),a=document.createElement("h1");a.textContent="Nuevos lanzamientos",n.appendChild(a);let d=document.createElement("ol");d.className="animate__animated animate__bounce",[{titulo:"Historia Zombie",autor:"Daniel Morales",url:"Inicio-historia.html"},{titulo:"Cien años de soledad",autor:"Gabriel García Márquez"},{titulo:"1984",autor:"George Orwell"},{titulo:"Un mundo feliz",autor:"Aldous Huxley"},{titulo:"Crimen y castigo",autor:"Fiódor Dostoyevski"},{titulo:"En busca del tiempo perdido",autor:"Marcel Proust"}].forEach((e=>{const t=document.createElement("li"),n=document.createElement("a");null!=e.url&&(n.href=e.url);const a=document.createElement("b"),o=document.createElement("i");a.textContent=e.titulo,o.textContent=e.autor,n.appendChild(a),n.appendChild(document.createTextNode(", ")),n.appendChild(o),t.appendChild(n),d.appendChild(t)}));const o=document.createElement("footer"),l=document.createElement("a");l.href="index.html",l.textContent="Regresar a página de inicio",l.classList.add("btn","btn-primary"),o.appendChild(l),t.appendChild(n);let i=document.createElement("div");i.classList.add("row"),t.appendChild(i);let r=document.createElement("div");return r.classList.add("col"),i.appendChild(r),r.appendChild(d),t.appendChild(o),t})())}})();