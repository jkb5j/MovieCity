package com.movie_city.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_city.models.Movie;
import com.movie_city.repos.MovieRepo;

@Service
public class MovieService {
	@Autowired
	private MovieRepo movieRepo;
	
	public List<Movie> findAll() {
		return movieRepo.findAll();
	}

	public List<Movie> findMovieOrderByTitle() {
		return movieRepo.findMovieOrderByTitle();
	}
	
	public List<Movie> findMovieOrderByGenre() {
		return movieRepo.findMovieOrderByGenre();
	}
	
	public List<Movie> findMovieOrderByReleaseYear() {
		return movieRepo.findMovieOrderByReleaseYear();
	}
	
}
