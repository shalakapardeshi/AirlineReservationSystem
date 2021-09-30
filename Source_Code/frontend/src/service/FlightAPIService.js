import axios from "axios";

const FLIGHT_API_BASE_URL = "http://localhost:8080";

class ApiService {
  fetchFlightById(aid) {
    return axios.get(FLIGHT_API_BASE_URL + "/customer/select_flight", {
      params: { aid: aid },
    });
  }

  editFlight(flight) {
    return axios.put(FLIGHT_API_BASE_URL + "/admin/update_airline", flight);
  }

  getBookingsByFlightId(aid) {
    return axios.get(FLIGHT_API_BASE_URL + "/admin/get_bookings/" + aid);
  }

  getBookingsByUserId(uid){
    return axios.get(FLIGHT_API_BASE_URL + '/customer/get_userbookings/' + uid)
}

  cancelBookingByBookId(bid) {
    return axios.delete(FLIGHT_API_BASE_URL + "/admin/delete_booking", {
      params: { bid: bid },
    });
  }

  addAirline(flight) {
    return axios.post(FLIGHT_API_BASE_URL + "/superadmin/add_airline", flight);
  }
  updateBooking(airlineId) {
    console.log(airlineId);
    return axios.put(
      FLIGHT_API_BASE_URL + "/admin/update_booking/" + airlineId
    );
  }

  cancelBookingByUserId(bId){
    return axios.delete(FLIGHT_API_BASE_URL + '/customer/cancel_ticket' ,{ params: { bId : bId } })
}

  getFlight(from, to, departure) {
    //console.log("in get flight"+fromCity + "  " + toCity + "  " + departureDate);
    return axios.get(
      FLIGHT_API_BASE_URL + "/customer/search_flight/" + departure,
      {
        params: {
          fromCity: from,
          toCity: to,
        },
      }
    );
  }
  getAirlineNames(){
    return axios.get(FLIGHT_API_BASE_URL + '/superadmin/airline_names')
  }
  addCities(cities){
    console.log("in add cities axios");
    return axios.put(FLIGHT_API_BASE_URL + '/superadmin/add_city', cities)
  }
}

export default new ApiService();
