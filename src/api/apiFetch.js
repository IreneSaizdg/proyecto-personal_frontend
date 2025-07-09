const BACK_URL_BASE = 'http://localhost:5000/api/v1'
const PER_PAGE = 15


/*FUNCIÓN: para construir la URL con parámetros
    encodeURIComponent -> convierte los caracteres especiales para ser legible por navegadores y servidores*/
export const buildSearchUrl = (mainRoute, secondaryRoute, searchVar) => {
    return `${BACK_URL_BASE}/${mainRoute}/${secondaryRoute}${searchVar}`; //Ej de searchVar = `/${userId}`
}


//FUNCIÓN: reutilizable para hacer peticiones a una API
/**
 * Realiza una petición HTTP reutilizable usando fetch con configuración predefinida.
 *
 * @param {string} url - URL de la API a la que se hace la petición.
 * @param {string} [method='GET'] - Método HTTP (GET, POST, PUT, etc.).
 * @param {Object} [headers={}] - Headers personalizados para la petición.
 * @param {Object} [body={}] - Cuerpo de la petición (solo para métodos POST o PUT).
 * @returns {Promise<Object>} - Devuelve la respuesta de la API en formato JSON.
 * @throws {Object} - Lanza el error devuelto por la API si la respuesta no es satisfactoria.
 */
export const apiFetch = async (url, method = "GET", headers = {}, body = {}) => {

    //Configuración de las opciones del fetch
    const options = {
        method,
        headers: {
        'Content-Type': 'application/json', //Formato de los datos que se envían en el cuerpo de la petición (JSON)
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}), //Si token existe lo coge si no devuelve un objeto vacío. SPREAD, desempaqueta las propiedades del objeto
        ...headers //Permite añadir o sobreescribir headers desde fuera
        }
    };

    if (method === 'POST' || method === 'PUT') { //Si el método es POST O PUT añade el body a las opciones
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options); //Espera a recibir la respuesta
        if (!response.ok) {
            throw await response.json(); //Si no está bien la respuesta, lanza el error con el contenido del error en JSON
        }
        return await response.json(); //Devuelve la respuesta

    } catch (error) {
        throw error; //Si ocurre cualquier error lo lanza al exterior
    }
};