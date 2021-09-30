package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AirlineDTO;
import com.app.dto.CityDTO;
import com.app.dto.ResponseDTO;
import com.app.dto.UserDTO;
import com.app.service.IAirlineService;
import com.app.service.ISuperAdminService;

@RestController
@RequestMapping("/superadmin")
@CrossOrigin
public class SuperAdminController {
	public SuperAdminController() {
		System.out.println("in ctor of : " + getClass().getName());
	}

	@Autowired
	private ISuperAdminService saService;
	
	@Autowired
	private IAirlineService airService;

	@PostMapping("/add_admin")
	public ResponseEntity<?> signupUser(@RequestBody UserDTO admindto) {
		System.out.println("in signup user : " + admindto);
		
		return new ResponseEntity<>(new ResponseDTO<>("success", saService.addAdmin(admindto)), HttpStatus.OK);

	}
	
	@PostMapping("/add_airline")
	public ResponseEntity<?> addAirline(@RequestBody AirlineDTO airlinedto){
		System.out.println("in add airline : "+airlinedto);
		airService.addAirline(airlinedto);
		return new ResponseEntity<>("Airline added to the db!!!", HttpStatus.OK);
	}
	
	
	
	
	@GetMapping("/airline_names")
	public ResponseEntity<?> AirlineNames() {
		System.out.println("in Airline names : ");
		return new ResponseEntity<>(new ResponseDTO<>("success", airService.getAirlineNames()), HttpStatus.OK);
	}
	
	@GetMapping("/get_total_bookings")
	public ResponseEntity<?> getTotalBooking(){
		return new ResponseEntity<>(new ResponseDTO<>("success", saService.getTotalBooking()), HttpStatus.OK);
	}
	
	@GetMapping("/get_cancelled_bookings")
	public ResponseEntity<?> getCancelledBooking(){
		return new ResponseEntity<>(new ResponseDTO<>("success", saService.getCancelledBooking()), HttpStatus.OK);
	}
	

	@PutMapping("/add_city")
	public ResponseEntity<?> addCity(@RequestBody CityDTO cityDto){
		System.out.println("in addCity : ");
		saService.addCity(cityDto);
		return new ResponseEntity<>("success",  HttpStatus.OK);
	}
}
