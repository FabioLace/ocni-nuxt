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