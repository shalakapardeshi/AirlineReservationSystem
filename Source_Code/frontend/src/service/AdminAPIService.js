import axios from 'axios';
const ADMIN_API_BASE_URL = 'http://localhost:8080';

class ApiService{
    fetchPassengersByFlightId(airId) {
        return axios.get(ADMIN_API_BASE_URL + '/admin/passenger_list/' + airId );
    }
}

export default new ApiService();