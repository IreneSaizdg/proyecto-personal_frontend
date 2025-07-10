const BACK_URL_BASE = 'http://localhost:5000/api/v1'


/*FUNCIÓN: para construir la URL con parámetros
    encodeURIComponent -> convierte los caracteres especiales para ser legible por navegadores y servidores*/
export const buildSearchUrl = (mainRoute, secondaryRoute, searchVar) => {
    return `${BACK_URL_BASE}/${mainRoute}${secondaryRoute}${searchVar}`; //Ej de searchVar = `/${userId}`
}


//FUNCIÓN: reutilizable para hacer peticiones a una API
export const fetchCall = async (url, method = "GET", headers = {}, body = {}) => {

    //Configuración de las opciones del fetch
    const token = null
    const options = {
        method,
        headers: {
        'Content-Type': 'application/json', //Formato de los datos que se envían en el cuerpo de la petición (JSON)
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}), //Si token existe lo coge si no devuelve un objeto vacío. SPREAD, desempaqueta las propiedades del objeto
        ...headers
        }
    };

    if (method === 'POST' || method === 'PUT') { //Si el método es POST O PUT añade el body a las opciones
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options);
            if (!response.ok) {
                throw await response.json();
            }
            const json = await response.json();
            return json;
    } catch (error) {
        throw error;
    }
};