import React from 'react';
import '../hojas-de-estilo/boton.css'

function Boton({texto, BotonDeClick, manejarClick }){

return(
    <button
    className={ BotonDeClick ? 'boton-click' : 'boton-reiniciar' }
    onClick={manejarClick}>
    {texto}    
    </button>

);
}



export default Boton;