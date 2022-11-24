import React from "react";
import ReactDOM from "react-dom";
import './modal.css'

function Modal( {children} ) {
    return ReactDOM.createPortal(
        //podemos enviar cualquier componente
        // nuestro componente modal nos permite ser reutilizado y poderselo enviar a nuestro modal
        //vamos a enviar algun contenido
        <div className="modal_estilos">
            {children}
        </div>,
         //nodo del html donde vamos a mandar a nuestro hijo de nuestro componente modal
        document.getElementById('modal')
    )   
}

export { Modal };