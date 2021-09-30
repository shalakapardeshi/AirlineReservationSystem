package com.app.service;

import com.app.dto.CityDTO;
import com.app.dto.UserDTO;
import com.app.pojos.User;

public interface ISuperAdminService {
	//method to add admin 
	User addAdmin(UserDTO admin);
	
	//method to get total number of bookings
	int getTotalBooking();
	
	//method to get total number of cancelled bookings
	int getCancelledBooking();
	

	//method to add City in City Table
	void addCity(CityDTO cityDto);

}
