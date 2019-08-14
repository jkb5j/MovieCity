package com.movie_city.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.movie_city.models.Movie;
	
public interface MovieRepo extends JpaRepository<Movie, Integer>{

}
