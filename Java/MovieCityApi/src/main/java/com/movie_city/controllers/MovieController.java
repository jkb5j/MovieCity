package com.movie_city.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie_city.models.Movie;
import com.movie_city.services.MovieService;

@RestController
@RequestMapping("movies")
public class MovieController {
	@Autowired
	private MovieService movieService;
	
	@GetMapping
	public List<Movie> findAll() {
		return movieService.findAll();
	}
	
	
}
