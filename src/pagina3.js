import 'bootstrap/dist/css/bootstrap.css'
import './estilos.css' 
import { lanzamientos } from "./nuevos-lanzamientos";
window.onload = () => {
    document.getElementById("lanzamientos").appendChild(lanzamientos());
}