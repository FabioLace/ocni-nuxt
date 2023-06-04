import axios from 'axios';
export const index = ($axios) => {
    return $axios.get('http://localhost:8000/api/dispositivi',{
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => {
        console.error(error);
        throw error;
    })
}

export const create = ($axios) => {
    return $axios.post('http://localhost:8000/api/creadispositivo',data,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Passa il token JWT nell'header della richiesta
        }
    }).catch(error => {
        console.error(error);
        throw error;
    })
}
