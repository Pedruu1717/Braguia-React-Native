import axios from 'axios'

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
    baseURL: 'https://c5a2-193-137-92-29.eu.ngrok.io/',
    timeout: 10000,
});

export default getTrails = async () => {
        return await APIKit.get("trails")
            .then((response) => {
                return response
            })
            .catch((error) => {
                // Handle the error
                console.error(error);
            })
}
