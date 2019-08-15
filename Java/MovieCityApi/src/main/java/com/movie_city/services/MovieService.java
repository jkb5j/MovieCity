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
	
	public List<Movie> findMovieOrderByReleaseYear() {
		return movieRepo.findMovieOrderByReleaseYear();
	}

	public List<Movie> findByReleaseYear(int year) {
		return movieRepo.findByReleaseYear(year);
	}

	public List<Movie> findByReleaseYearOrderByGenre(int year) {
		return movieRepo.findByReleaseYearOrderByGenre(year);
	}
	
	public List<Movie> findByReleaseYearOrderByTitle(int year) {
		return movieRepo.findByReleaseYearOrderByTitle(year);
	}
	
	public List<Movie> findByGenreGenreId(int genreid) {
		return movieRepo.findByGenreGenreId(genreid);
	}
	
	public List<Movie> findByTitle(String title) {
		return movieRepo.findByTitle(title);
	}
	
}
