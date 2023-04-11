
export const inicio = ()=>{
    let divGrande = document.createElement("div");
    document.body.appendChild(divGrande);
    let header = document.createElement("header");
    
    let titleH1 = document.createElement("h1");
    divGrande.appendChild(header);
    header.appendChild(titleH1);
    titleH1.innerText = "Página de inicio"; 
    
    let DivRow = document.createElement("div");
    DivRow.classList.add("row");
    divGrande.appendChild(DivRow);
    let col1 = document.createElement("div");
    let col2 = document.createElement("div");
    col1.classList.add("col");
    col2.classList.add("col");
    DivRow.appendChild(col1);
    DivRow.appendChild(col2);

    let ul1 = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let a1 = document.createElement("a");
    let a2 = document.createElement("a");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    ul1.className="animate__animated animate__bounce";
    button1.classList.add('btn', 'btn-primary');
    button2.classList.add('btn', 'btn-primary');

    a1.appendChild(button1);
    a2.appendChild(button2);
    
    col1.appendChild(ul1);
    li1.appendChild(a1);
    li2.appendChild(a2);
    ul1.appendChild(li1);
    ul1.appendChild(li2);
    
    a1.innerText = "Libros populares";
    a1.href = "libros-populares.html";
    a2.innerText = "Nuevos lanzamientos";
    a2.href = "nuevos-lanzamientos.html";
    
    // let div = document.createElement("div");
    // document.body.appendChild(div);
    let img = document.createElement("img");
    img.src = "https://i.pinimg.com/736x/f2/c7/f6/f2c7f62b7cfa21d1e92088c855aa3bd4.jpg";
    col2.appendChild(img);
    img.style.paddingTop = '20px';
    img.style.paddingBottom = '20px';
    return(divGrande);

}
