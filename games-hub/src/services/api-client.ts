import axios from "axios";
export default axios.create({
     baseURL: "https://api.rawg.io/api",
     params: {
        key:'b2a8053714754da7a3a65f819c8bb92a'
     }
})