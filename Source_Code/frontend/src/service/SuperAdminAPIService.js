import axios from 'axios';
import qs from 'qs';
const SUPERADMIN_API_BASE_URL = 'http://localhost:8080';

class ApiService{
   
   
    
    getTotalBookings(){
        return axios.get(SUPERADMIN_API_BASE_URL + '/superadmin/get_total_bookings');
    }
    getCancelledBookings(){
        return axios.get(SUPERADMIN_API_BASE_URL + '/superadmin/get_cancelled_bookings'); 
    }
   
}

export default new ApiService();