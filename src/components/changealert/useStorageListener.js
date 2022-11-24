import React from 'react';

function useStorageListener(sincronize){
    
        const [storageChange, setStorageChange] = React.useState(false) //le daremos a ese warpped componente una propiedad especial despues del estado

        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1'){
                console.log('Hubo cambios de TODOS_V1');
                setStorageChange(true); // esto va a notificarle a nuestro wrapped component que ha habido algun cambio va a omstrar el mensaje porque el estado del show
                //ha cambiado
            }
        } ) // despues de que lea el storage entonces el segundo argumento sera una funcion  que va a devolvernos 
        //el cambio del addeventlistener , que haya habido, y luego preguntarle a ese change, si esl cambio que hubo fue en el key , en la variable del localstorage 
        //que se llama TODOS_V1, entonces llamar un console log con el cambio que hubo y queremos actualizar el estado

        const toggleShow = () => {
            sincronize();
            setStorageChange(false);  //
        };
 
        return {
            show: storageChange,
            toggleShow
        }
}    

export { useStorageListener }
//vamos a darle un props donde React useState nos avise cuando haya algun cambio en alguna ventana diferente a la que tenemos
//si hubo cambios en otra ventana del navegador, vamos a avisar eso 
//le podemos decir al warpped componente que solo se muestre cuando 
//el storagechange sea true o hayamos descubierto que hubo algun cambio
//queremos que wrapped componente pueda reaccionar a mi funcion de 
//toggle show es nuestro acxtualizador 
//shors recibimos las propiedsdes y alla las recibimos, nuestro componente que ya tiene HOC  
