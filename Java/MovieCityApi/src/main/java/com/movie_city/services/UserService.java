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

	public User update(int id, User user) {
		if(id == user.getUserId()) { // add test for authentication
			return userRepo.saveAndFlush(user);
		} else {
			return null;
		}
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

	public List<Movie> findFavorites(int userId) {
		User u = userRepo.getOne(userId);
		return u.getFavorites();
	}

	public List<User> findFriends(int userId) {
		User u = userRepo.getOne(userId);
		return u.getFriends();
	}

	public List<User> unfriend(int userId, User u) {
		User mainUser = userRepo.getOne(userId);
		mainUser.getFriends().remove(u);
		mainUser.getFollowers().add(u);
		return mainUser.getFriends();
	}

	public List<User> addFriend(int userId, User u) {
		User mainUser = userRepo.getOne(userId);
		mainUser.getFriends().add(u);
		return mainUser.getFriends();
	}

	public List<User> findFollowers(int userId) {
		User mainUser = userRepo.getOne(userId);
		return mainUser.getFollowers();
	}
	
}
