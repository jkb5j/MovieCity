package com.movie_city.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_city.models.Movie;
import com.movie_city.models.User;
import com.movie_city.repos.UserRepo;

@Service
public class UserService {
	@Autowired
	private UserRepo userRepo;

	public List<User> findAll() {
		return userRepo.findAll();
	}

	public User findByUsername(String username) {
		return userRepo.findByUsername(username);
	}

	public User findById(int id) {
		return userRepo.getOne(id);
	}

	public User save(User user) {
		return userRepo.saveAndFlush(user);
	}

	public User update(User user) {
		return userRepo.saveAndFlush(user);
	}
	@Transactional
	public User unfavoriteMovie(int userId, Movie m) {
		User u = userRepo.getOne(userId);
		u.getFavorites().remove(m);
		return u;
	}
	@Transactional
	public User favoriteMovie(int userId, Movie m) {
		User u = userRepo.getOne(userId);
		u.getFavorites().add(m);
		return u;
	}
	
}
