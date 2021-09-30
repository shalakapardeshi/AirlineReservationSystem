import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080';

class ApiService {

    fetchUserById(userid) {
        return axios.get(USER_API_BASE_URL + '/user/get_user/'+userid );
    }

    editUser(user, uid) {
        return axios.put(USER_API_BASE_URL+'/user/edit_profile', user, { params: { uid : uid } })
    }
    getbookingsByUserId(uid)
    {
        return axios.get(USER_API_BASE_URL+'/customer/get_userbookings/'+uid)
    }
   
    bookTicket(book){
        return axios.post(USER_API_BASE_URL + '/customer/book-ticket', book)
    }
}

export default new ApiService();