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
	@PutMapping("/{id}")
	private User update(@PathVariable int id, @RequestBody User user) {
		return userService.update(id, user);
	}
	// internal server error but work
	@DeleteMapping("/favorites/{userId}")
	private User unfavoriteMovie(@PathVariable int userId, @RequestBody Movie m) {
		return userService.unfavoriteMovie(userId, m);
	}
	@PutMapping("/favorites/{userId}")
	private User favoriteMovie(@PathVariable int userId, @RequestBody Movie m) {
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
	@DeleteMapping("/friends/{userId}")
	private List<User> unfriend(@PathVariable int userId, @RequestBody User u) {
		return userService.unfriend(userId, u);
	}
	@PutMapping("/friends/{userId}")
	private List<User> addFriend(@PathVariable int userId, @RequestBody User u) {
		return userService.addFriend(userId, u);
	}
	@GetMapping("/followers/{userId}")
	private List<User> findFollowers(@PathVariable int userId) {
		return userService.findFollowers(userId);
	}
	@DeleteMapping("/followers/{userId}")
	private List<User> unfollow(@PathVariable int userId, @RequestBody User u) {
		return userService.unfollow(userId,u);
	}
	@PutMapping("/followers/{userId}")
	private List<User> follow(@PathVariable int userId, @RequestBody User u) {
		return userService.follow(userId, u);
	}
}
