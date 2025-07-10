// IMPORTS
import { useEffect, useState } from 'react';
import { fetchCall } from '../api/fetchCall';




// CUSTOM HOOK: useFetch (hacer peticiones a la API)
export const useFetch = (url, { method = 'GET', headers = {}, body = null } = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const fetchData = async () => {
    try {
        const data = await fetchCall(url, method, headers, body)

        setData(data);
        setLoading(false);
        setError(null); // Por seguridad
    } catch (error) {
        setError(error);
        setLoading(false);
    }
  }
  return { data, loading, error, fetchData }
}