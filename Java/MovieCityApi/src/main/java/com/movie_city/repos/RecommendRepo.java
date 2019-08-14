package com.movie_city.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.movie_city.models.Recommendations;

public interface RecommendRepo extends JpaRepository<Recommendations, Integer> {
	@Query("FROM Recommendations r LEFT JOIN User u ON (r.receiver = u.userId) "
			+ "LEFT JOIN User us ON (sender = us.userId) LEFT JOIN Movie m ON (r.movie = m.movieId)")
	List<Recommendations> findAll();
	
}
