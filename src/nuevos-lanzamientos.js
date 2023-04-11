
export const lanzamientos = () => {
    var link = document.createElement("link");
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'estilos.css';
    document.head.appendChild(link);
    let divGrande = document.createElement("div");
    document.body.appendChild(divGrande);

    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Nuevos lanzamientos';
    header.appendChild(h1);

    let ol = document.createElement('ol');
    ol.className="animate__animated animate__bounce";
    const libros = [
      { titulo: 'Historia Zombie', autor: 'Daniel Morales', url: 'Inicio-historia.html' },
      { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
      { titulo: '1984', autor: 'George Orwell' },
      { titulo: 'Un mundo feliz', autor: 'Aldous Huxley' },
      { titulo: 'Crimen y castigo', autor: 'Fiódor Dostoyevski' },
      { titulo: 'En busca del tiempo perdido', autor: 'Marcel Proust' }
    ];
    libros.forEach(libro => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      if(libro.url != null)
        a.href = libro.url;
      const titulo = document.createElement('b');
      const autor = document.createElement('i');
      titulo.textContent = libro.titulo;
      autor.textContent = libro.autor;
      a.appendChild(titulo);
      a.appendChild(document.createTextNode(', '));
      a.appendChild(autor);
      li.appendChild(a);
      ol.appendChild(li);
    });


    const footer = document.createElement('footer');
    const a = document.createElement('a');
    a.href = 'index.html';
    a.textContent = 'Regresar a página de inicio';
    a.classList.add('btn', 'btn-primary');
    footer.appendChild(a);

    divGrande.appendChild(header);

    let DivRow = document.createElement("div");
    DivRow.classList.add("row");

    divGrande.appendChild(DivRow);
    let col = document.createElement("div");
    col.classList.add("col");
  
    DivRow.appendChild(col);

    col.appendChild(ol);
    divGrande.appendChild(footer);
    return(divGrande);
}
