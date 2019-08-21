package com.movie_city.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie_city.models.Movie;
import com.movie_city.models.User;
import com.movie_city.services.UserService;

@RestController
@RequestMapping("users")
public class UserController {
	@Autowired
	private UserService userService;
	@GetMapping
	private List<User> findAll() {
		return userService.findAll();
	}
	
	@GetMapping("/except/{userId}")
	private List<User> findAllBut(@PathVariable int userId) {
		return userService.findAllBut(userId);
	}
	
	@GetMapping("/username/{username}")
	private List<User> findByUsername(@PathVariable String username) {
		return userService.findByUsername(username);
	}
	@GetMapping("/{id}")
	private User findById(@PathVariable int id) {
		return userService.findById(id);
	}
	@PutMapping("/create-user")
	private User save(@RequestBody User user) {
		return userService.save(user);
	}
	@PutMapping("/{id}")
	private User update(@PathVariable int id, @RequestBody User user) {
		return userService.update(id, user);
	}
	// internal server error but work
	@DeleteMapping("/favorites/{userId}/movie/{movieId}")
	private User unfavoriteMovie(@PathVariable int userId, @PathVariable int movieId) {
		return userService.unfavoriteMovie(userId, movieId);
	}
	@PutMapping("/favorites/{userId}/movie/{movieId}")
	private User favoriteMovie(@PathVariable int userId, @PathVariable int movieId) {
		return userService.favoriteMovie(userId, movieId);
	}
	@GetMapping("/favorites/{userId}")
	private List<Movie> findFavorites(@PathVariable int userId) {
		return userService.findFavorites(userId);
	}
	@GetMapping("/friends/{userId}")
	private List<User> findFriends(@PathVariable int userId) {
		return userService.findFriends(userId);
	}
	@DeleteMapping("/friends/{userId}/unfriend/{friendId}")
	private List<User> unfriend(@PathVariable int userId, @PathVariable int friendId) {
		return userService.unfriend(userId, friendId);
	}
	@PutMapping("/friends/{userId}/add-friend/{friendId}")
	private List<User> addFriend(@PathVariable int userId, @PathVariable int friendId) {
		return userService.addFriend(userId, friendId);
	}
	@GetMapping("/followers/{userId}")
	private List<User> findFollowers(@PathVariable int userId) {
		return userService.findFollowers(userId);
	}
	@DeleteMapping("/followers/{userId}/unfollow/{unfollowId}")
	private List<User> unfollow(@PathVariable int userId, @PathVariable int unfollowId) {
		return userService.unfollow(userId, unfollowId);
	}
	@PutMapping("/followers/{userId}/follow/{followId}")
	private List<User> follow(@PathVariable int userId, @PathVariable int followId) {
		return userService.follow(userId, followId);
	}
}
