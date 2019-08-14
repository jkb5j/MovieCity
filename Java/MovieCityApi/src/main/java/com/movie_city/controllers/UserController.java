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
	@PutMapping("/user")
	private User update(@RequestBody User user) {
		return userService.update(user);
	}
	@DeleteMapping("/favorites")
	private User unfavoriteMovie(int userId, Movie m) {
		return userService.unfavoriteMovie(userId, m);
	}
	@PutMapping("/favorites")
	private User favoriteMovie(int userId, Movie m) {
		return userService.favoriteMovie(userId, m);
	}
}
