package com.movie_city.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.movie_city.dtos.Credential;
import com.movie_city.models.User;
import com.movie_city.services.UserService;

@RestController
public class AuthController {
	@Autowired
	private UserService us;

	@PostMapping("/login")
	public User login(@RequestBody Credential cred) {
		return us.login(cred);
	}

	@GetMapping("/check-auth")
	public User checkAuth(HttpServletRequest req) {
		return (User) req.getSession().getAttribute("user");
	}
}
