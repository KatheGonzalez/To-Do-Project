import React from "react";

function UselocalStorage(itemName, initialValue) {  
    const [error, setError] = React.useState(false);  
    const [loading, setLoading] = React.useState(true); 
    const [item, setItem] = React.useState(initialValue); //nuestro estado inicial sera un string vacio alguna cosa
    const [sincronizedItem, setSincronizedItem] = React.useState(true); // este estado nos dira si estan sincronizadas todas las ventanas abiertas 
//pero le vamos a otorgar este setsincronixed a todas las ventanas 

    React.useEffect(() => {  //nuestro useeffect sera un codigo que estara insertado en un settimeout para que se ejecute en cierto tiempo 
      //y cuando pase ese tiempo llama a la funcion setitem para actualizar
      
      setTimeout(()=>{
         try{
            const localStorageItem = localStorage.getItem(itemName); 
            let parsedItem; 
            console.log('Estoy pasando dentro del timeout');
            console.log(localStorageItem);
            
            
            if (!localStorageItem){ 
              localStorage.setItem(itemName, JSON.stringify(initialValue));  
              parsedItem = initialValue; 
            } else {                                                       
              parsedItem = JSON.parse(localStorageItem);                   
            }

            setItem(parsedItem);
            setLoading(false);
            setSincronizedItem(true); //aqui estoy volviendo a poner todo normal en que este todo sincronizado

         }catch(error){
          setError(error);
         }
      }, 1000);
      
    }, [sincronizedItem]) //cada vez que haya cambios en sincronized item volvemos a cargar los elementos y demas 
 
            
    const saveItem = (newItem) => {                                     
      try{
        const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem); 
      setItem(newItem);
      }catch(error){
        setError(error);
      }
    };

    const sincronizeItem = () => {// disparar dos cambios a los estados, primero debemos volver al estado de carga 
    //cuando sepamos que huubo cambios se ponga a cargar, cuando le demos a sincronizar, llamemos al efecto setsincronizeditem 
    // y le decimos que ahora es false 

    //en change alert tenemos que disparar el evento sincronized, cuando lo llamemos ponemos nuestra app en loading que estamos en carga 
    //porque no estamos sincronizados vamos a mostrar el estado de carga y vamos a cambiar el estado de carga para que el efecto se 
    //vuelva a disparar , volvamos a cargar los todos y nuestro estado de carga vuelva a quedar en false , ni cargando ni sincronizando
    // debeos compartir la funcion al resto de la app 

      setLoading(true);
      setSincronizedItem(false)
    }

    return {
      item,
      saveItem,      
      loading,
      error,
      sincronizeItem
    }                  
}


export { UselocalStorage }

//crearemos un nuevo estado para comunicar este componente change alert con el resto de la app, para lograr volver a hacer una 
//consulta a localstorage y traer los todos actualizados 