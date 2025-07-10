import React, { createContext, useEffect } from 'react';
import { buildSearchUrl } from '../api/fetchCall';
import { useFetch } from  '../hooks/useFetch'



// CONTEXTO (creación)
export const UserContext = createContext(null);

// PROVIDER: user (envuelve la app)
export const UserProvider = ({ children }) => {
  const endpoint = buildSearchUrl("users", "", "/1")
  const { data, loading, error, fetchData } = useFetch(endpoint, "GET");
  
  //Coprobación de data en consola
  useEffect(()=>{
    data ? console.log("data", data) : console.log("No existe este usuario");
  }, [data])
  
  // Para que se ejecute sólo cuando sucede un cambio concreto como cuando cambie un estado del componente, o cuando se carge por primera vez el componente ello utilizamos un useEffect()
  useEffect(() => {
      fetchData()
  }, [])


  return (
    <UserContext.Provider value={{ data, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};