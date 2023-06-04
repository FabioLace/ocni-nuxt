/* import axios from 'axios';

export const register = ($axios, data) => {
    return $axios.post('/api/register', data)
        .then(response => response.data)
        .catch(error => {
            return Promise.reject(error);
        });
} */

import axios from 'axios';
export const login = ($axios, data) => {
    return $axios.post('http://localhost:8000/api/login', data ,{
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => {
        console.error(error);
        throw error;
    })
}
export const register = ($axios, data) => {
    console.log("REGISTER IN AUTH.JS");
    console.log(data);
    console.log(12)
    return $axios.post('http://localhost:8000/api/register', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        .catch(error => {
          console.log(1.3)
            console.log("ERROR IN AUTH.JS",error);
            throw error;
        });
}

