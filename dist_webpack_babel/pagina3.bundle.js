(()=>{"use strict";window.onload=function(){document.getElementById("lanzamientos").appendChild(function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="estilos.css",document.head.appendChild(e);let t=document.createElement("div");document.body.appendChild(t);const n=document.createElement("header"),a=document.createElement("h1");a.textContent="Nuevos lanzamientos",n.appendChild(a);let o=document.createElement("ol");o.className="animate__animated animate__bounce",[{titulo:"Historia Zombie",autor:"Daniel Morales",url:"Inicio-historia.html"},{titulo:"Cien años de soledad",autor:"Gabriel García Márquez"},{titulo:"1984",autor:"George Orwell"},{titulo:"Un mundo feliz",autor:"Aldous Huxley"},{titulo:"Crimen y castigo",autor:"Fiódor Dostoyevski"},{titulo:"En busca del tiempo perdido",autor:"Marcel Proust"}].forEach((function(e){const t=document.createElement("li"),n=document.createElement("a");null!=e.url&&(n.href=e.url);const a=document.createElement("b"),d=document.createElement("i");a.textContent=e.titulo,d.textContent=e.autor,n.appendChild(a),n.appendChild(document.createTextNode(", ")),n.appendChild(d),t.appendChild(n),o.appendChild(t)}));const d=document.createElement("footer"),l=document.createElement("a");l.href="index.html",l.textContent="Regresar a página de inicio",l.classList.add("btn","btn-primary"),d.appendChild(l),t.appendChild(n);let i=document.createElement("div");i.classList.add("row"),t.appendChild(i);let c=document.createElement("div");return c.classList.add("col"),i.appendChild(c),c.appendChild(o),t.appendChild(d),t}())}})();