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
	@GetMapping("/username/{username}")
	private User findByUsername(@PathVariable String username) {
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
	@PutMapping("/{id}") // Test
	private User update(@PathVariable int id, @RequestBody User user) {
		return userService.update(id, user);
	}
	@DeleteMapping("/favorites/{userId}") // Test
	private User unfavoriteMovie(@PathVariable int userId, Movie m) {
		return userService.unfavoriteMovie(userId, m);
	}
	@PutMapping("/favorites/{userId}") // Test
	private User favoriteMovie(@PathVariable int userId, Movie m) {
		return userService.favoriteMovie(userId, m);
	}
	@GetMapping("/favorites/{userId}")
	private List<Movie> findFavorites(@PathVariable int userId) {
		return userService.findFavorites(userId);
	}
	@GetMapping("/friends/{userId}")
	private List<User> findFriends(@PathVariable int userId) {
		return userService.findFriends(userId);
	}
	@DeleteMapping("friends/{userId}") // Test
	private List<User> unfriend(@PathVariable int userId, User u) {
		return userService.unfriend(userId, u);
	}
	@PutMapping("friends/{userId}") // Test
	private List<User> addFriend(@PathVariable int userId, User u) {
		return userService.addFriend(userId, u);
	}
	
}
