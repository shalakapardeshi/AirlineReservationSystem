package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.UserAlreadyExistException;
import com.app.dao.BookingRepository;
import com.app.dao.CitiesRepository;
import com.app.dao.UserRepository;
import com.app.dto.CityDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Cities;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class SuperAdminServiceImpl implements ISuperAdminService{
	@Autowired
	private UserRepository userRepo;

	@Autowired
	private BookingRepository bookRepo;
	
	@Autowired
	private CitiesRepository cityRepo;
	
	@Override
	public User addAdmin(UserDTO admindto) {
		User admin = new User();
		if(userRepo.findByEmail(admindto.getEmail()) == null) {
			BeanUtils.copyProperties(admindto, admin);
			admin.setUserRole(Role.ADMIN);
			System.out.println(admin);
			return userRepo.save(admin);
		}else
			throw new UserAlreadyExistException("User Already Exist, Please login or try with another email");
	}
	
	
	@Override
	public int getTotalBooking() {
		return bookRepo.getTotalBooking();
	}
	
	@Override
	public int getCancelledBooking() {
		return bookRepo.getCancelledBooking();
	}
	
	

	@Override
	public void addCity(CityDTO cityDto) {
		List<Cities> cities=cityRepo.getCities();
		String[] cityArray=cityDto.getCityNames();
		if(cities.isEmpty()) {
			cityRepo.save(new Cities(cityArray[0]));
			cityRepo.save(new Cities(cityArray[1]));
		}
		else {
			for(int i=0; i<cityArray.length; i++) {
				boolean flag=false;
				while(!flag ) {
					for(Cities city:cities) {
						if((cityArray[i].equalsIgnoreCase(city.getCity()))) {
							flag=true;
							break;
						}
					}
					if(!flag)
						break;
				}
				if(!flag)
					cityRepo.save(new Cities(cityArray[i]));
			}
		}
	}
}
