import axios from 'axios'

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
    baseURL: 'https://c5a2-193-137-92-29.eu.ngrok.io/',
    timeout: 10000,
});

// Set JSON Web Token in Client to be included in all calls
export const setClientCookies = cookies => {
    APIKit.interceptors.request.use(function(config) {
        config.headers.Authorization = cookies;
        return config;
    });
};

export default login = async (username, password) => {
    return await APIKit.post("login", {"username": username,"password": password},{withCredentials: false})
        .then((response) => {
            // Access the headers
            const headers = response.headers;

            // Get a specific header value
            var cookies = headers['set-cookie'][0];

            // Handle the response data
            cookies = cookies.split(';');
            const token = cookies[0].split('=')[1]
            const sessionId = cookies[4].split(',')[1].split(';')[0].split('=')[1]
            console.log(token);
            console.log(sessionId);

            setClientCookies("csrftoken=" + token + "; sessionid=" + sessionId);
        })
        .catch((error) => {
            // Handle the error
            console.error(error);
        });
    

}
