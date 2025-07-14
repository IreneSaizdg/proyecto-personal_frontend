import React, { useState, useEffect } from 'react';
import { SearchBarResourcesForm } from './SearchBarResourcesForm';
import { ResourcesGrid } from './ResourcesGrid';
import { fetchCall } from '../../utils/fetchCall';
import { useUser } from '../../hooks/useUser';



export const ResourcesGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useUser();

  // Manejador: hacer la búsqueda por tags 
  const handleSearch = async (tag) => {
    try {
      setSearchTerm(tag); // Guardar lo que escribió el user
      const data = await fetchCall(
        `http://localhost:5000/api/v1/resources/search/${encodeURIComponent(tag)}`, //Codifica la URL para que sea compatible con el navegador
        'GET',
      );
      setSearchResults(data);
    } catch (err) {
      console.error('Error buscando por tag:', err.message);
      setSearchResults([]);
    }
  };

  // Cargar todos los recursos al iniciar
  useEffect(() => {
    const fetchAllResources = async () => {
      try {
        const data = await fetchCall(
          'http://localhost:5000/api/v1/resources',
          'GET',
        );
        setSearchResults(data);
      } catch (err) {
        console.error('Error cargando recursos:', err.message);
      }
    };

    fetchAllResources();
  }, []); // Se ejecuta una sola vez al montar, cuando el token esté disponible

  return (
    <>
      <SearchBarResourcesForm onSearch={handleSearch} />
      <div className="container">
        <ResourcesGrid cards={searchResults} collectionTitle={searchTerm} />
      </div>
    </>
  );
};