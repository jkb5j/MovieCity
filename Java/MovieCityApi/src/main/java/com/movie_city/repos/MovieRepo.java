package com.movie_city.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.movie_city.models.Movie;
	
public interface MovieRepo extends JpaRepository<Movie, Integer>{

	@Query("FROM Movie m ORDER BY title")
	List<Movie> findMovieOrderByTitle();
	
	@Query("FROM Movie m ORDER BY genre")
	List<Movie> findMovieOrderByGenre();
	
	@Query("FROM Movie m ORDER BY releaseYear")
	List<Movie> findMovieOrderByReleaseYear();

}
