package com.movie_city.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie_city.services.MovieService;

@RestController
@RequestMapping("movies")
public class MovieController {
	@Autowired
	private MovieService movieService;
	
	
}
