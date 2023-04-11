
export const libros_populares = () => {
    var link = document.createElement("link");
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'estilos.css';
    document.head.appendChild(link);
    let divGrande = document.createElement("div");
    document.body.appendChild(divGrande);

    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Libros populares';
    header.appendChild(headerTitle);
    
    const ul = document.createElement('ul');
    const libros = ['El señor de los anillos', 'Harry potter', 'Los juegos del hambre', '20 mil leguas de viaje submarino'];
    libros.forEach((libro) => {
      const li = document.createElement('li');
      const strong = document.createElement('strong');
      const em = document.createElement('em');
      em.textContent = libro;
      strong.appendChild(em);
      li.appendChild(strong);
      ul.appendChild(li);
    });
    ul.id = "ul_diferente";
    let Rowdiv = document.createElement('div');
    Rowdiv.classList.add("row");
    ul.className="animate__animated animate__bounce";

    let col = document.createElement("div");
    col.classList.add("col");
    Rowdiv.appendChild(col);
    col.appendChild(ul);
    
    const footer = document.createElement('footer');
    const footerLink = document.createElement("a");

    footerLink.textContent = 'Regresar a página de inicio';
    footerLink.href = 'index.html';
    footerLink.classList.add('btn', 'btn-primary');
    footer.appendChild(footerLink);
    
    divGrande.appendChild(header);
    divGrande.appendChild(Rowdiv);
    divGrande.appendChild(footer);
    return(divGrande);
} 