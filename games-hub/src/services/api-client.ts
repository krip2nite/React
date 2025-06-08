import axios from "axios";
const apiClient = axios.create({
     baseURL: "https://api.rawg.io/api",
     params: {
        key:'b2a8053714754da7a3a65f819c8bb92a'
     }
})

export default apiClient