(()=>{"use strict";window.onload=()=>{document.getElementById("libros").appendChild((()=>{var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="estilos.css",document.head.appendChild(e);let t=document.createElement("div");document.body.appendChild(t);const n=document.createElement("header"),d=document.createElement("h1");d.textContent="Libros populares",n.appendChild(d);const l=document.createElement("ul");["El señor de los anillos","Harry potter","Los juegos del hambre","20 mil leguas de viaje submarino"].forEach((e=>{const t=document.createElement("li"),n=document.createElement("strong"),d=document.createElement("em");d.textContent=e,n.appendChild(d),t.appendChild(n),l.appendChild(t)}));let a=document.createElement("div");a.classList.add("row");let o=document.createElement("div");o.classList.add("col"),a.appendChild(o),o.appendChild(l);const c=document.createElement("footer"),r=document.createElement("a");return r.textContent="Regresar a página de inicio",r.href="index.html",r.classList.add("btn","btn-primary"),c.appendChild(r),t.appendChild(n),t.appendChild(a),t.appendChild(c),t})())}})();