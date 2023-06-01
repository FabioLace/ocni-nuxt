/* import axios from 'axios';

export const register = ($axios, data) => {
    return $axios.post('/api/register', data)
        .then(response => response.data)
        .catch(error => {
            return Promise.reject(error);
        });
} */

import axios from 'axios';

export const register = ($axios, data) => {
    console.log("REGISTER IN AUTH.JS");
    console.log(data);
    return $axios.post('/api/register', data)
        .catch(error => {
            console.log("ERROR IN AUTH.JS",error);
            throw error;
        });
}

