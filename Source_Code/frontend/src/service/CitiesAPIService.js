import axios from 'axios';

const CITIES_API_BASE_URL = 'http://localhost:8080';

class ApiService {

    fetchCities() {
        return axios.get(CITIES_API_BASE_URL + '/cities');
    }

}

export default new ApiService();