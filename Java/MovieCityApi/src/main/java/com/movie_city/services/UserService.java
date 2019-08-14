package com.movie_city.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_city.models.User;
import com.movie_city.repos.UserRepo;

@Service
public class UserService {
	@Autowired
	private UserRepo userRepo;

	public List<User> findAll() {
		return userRepo.findAll();
	}
	
	
}
