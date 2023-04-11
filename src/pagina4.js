import 'bootstrap/dist/css/bootstrap.css'
import './estilos.css' 
import { inicio_historia } from "./Inicio-Historia";
window.onload = () =>{
    document.getElementById("historia").appendChild(inicio_historia());
}
    
