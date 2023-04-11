import { libros_populares } from "./libros-populares";
import 'bootstrap/dist/css/bootstrap.css'
import './estilos.css' 
window.onload = () => {
    document.getElementById("libros").appendChild(libros_populares());
}
    
    
