import React, { createContext, useContext, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import { buildSearchUrl } from './api/apiFetch';



// CONTEXTO (creación)
const UserContext = createContext(null);

// PROVIDER (envuelve la app)
export const UserProvider = ({ children }) => {
  const { data: user, isLoading, error, fetchData } = useFetch();

  useEffect(() => {
    // Suponiendo que el userId viene de algún lugar (localStorage, auth, etc)
    const userId = '123'; 
    const url = buildSearchUrl('users', '', `/${userId}`);
    fetchData(url);
  }, [fetchData]);

  return (
    <UserContext.Provider value={{ user, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};

// HOOK PERSONALIZADO: para consumir el contexto más fácilmente
export const useUser = () => useContext(UserContext);