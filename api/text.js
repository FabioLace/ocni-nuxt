const test = axios.get('http://localhost:8000/test') 
  .then(res => console.log(res.data))
