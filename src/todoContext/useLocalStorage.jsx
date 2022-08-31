import React, {useState, useEffect} from 'react';

//custom hook
// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState(initialValue)


  useEffect(() => {
    setTimeout(() => {
      try {
             // Guardamos nuestro item en una constante
      const localStorageTodos = localStorage.getItem(itemName)
      let parseTodos;

      // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
      if (!localStorageTodos) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parseTodos = initialValue
      } else {
        parseTodos = JSON.parse(localStorageTodos)
      }
      setTodos(parseTodos)
      setLoading(false)
      } catch(error) {
        setError(error)
      }
    }, 1000)
  });
  
 // ¡Podemos utilizar otros hooks de react!

    // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveTodos = (newTodos) => {
    try {
      const stringifyTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifyTodos);
      setTodos(newTodos)
    } catch(error) {
      setError(error)
    }
  }
// Regresamos los datos que necesitamos
  return {
    todos,
    saveTodos,
    loading,
    error
};
  // Ahora que hemos creado nuestro custom hook podemos usarlo las veces que queramos.
}

export default useLocalStorage;