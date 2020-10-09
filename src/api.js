const axios = require('axios').default

axios.defaults.withCredentials = true;

async function getToken(product) {
  try {
      const {data} = await axios({
          method: 'POST',
          url: `https://avalon-show.herokuapp.com/api/auth/sign-in`,
          // url: `http://localhost:8080/api/auth/sign-in`,
          timeout: 3000,
          data: {
            "apiKeyToken":"e335916b9ca9647b1cf3365a94817d9f93eedd6b2a5a87741b5069c12aa985b5"
          },
          headers: {
            "Content-Type": "application/json",
            // 'X-Requested-With': 'XMLHttpRequest',
            // 'Access-Control-Allow-Origin': '*',  
          },
          auth: {
            username: 'cguzman@expressingenieria.com',
            password: 'ing870915' // Bad password
          },
      });
      console.log(data);
      return data;
  } catch (error) {
    console.error(error);
    console.log(error);
    return error;
  }
}



module.exports = {
  getToken,
}