package com.movie_city.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("title")
	public List<Movie> findMovieOrderByTitle() {
		return movieService.findMovieOrderByTitle();
	}
	
	@GetMapping("year")
	public List<Movie> findMovieOrderByReleaseYear() {
		return movieService.findMovieOrderByReleaseYear();
	}
	
	@GetMapping("/filter/year/{year}")
	public List<Movie> findByReleaseYear(@PathVariable int year) {
		return movieService.findByReleaseYear(year);
	}
	
	@GetMapping("/filter/year/{year}/genre")
	public List<Movie> findByReleaseYearOrderByGenre(@PathVariable int year) {
		return movieService.findByReleaseYearOrderByGenre(year);
	}
	
	@GetMapping("/filter/year/{year}/title")
	public List<Movie> findByReleaseYearOrderByTitle(@PathVariable int year) {
		return movieService.findByReleaseYearOrderByTitle(year);
	}
	
	@GetMapping("/filter/genre/{genreid}")
	public List<Movie> findByGenreGenreId(@PathVariable int genreid) {
		return movieService.findByGenreGenreId(genreid);
	}
	
	@GetMapping("/filter/title/{title}")
	public List<Movie> findByTitle(@PathVariable String title) {
		return movieService.findByTitle(title);
	}
	
}
