import axios from 'axios';

export default axios.create({
    baseUrl: 'https://localhost:44380/api/'
});