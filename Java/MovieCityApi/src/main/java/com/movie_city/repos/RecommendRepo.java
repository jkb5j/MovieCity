package com.movie_city.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.movie_city.models.Movie;
import com.movie_city.models.Recommendations;
import com.movie_city.models.User;

public interface RecommendRepo extends JpaRepository<Recommendations, Integer> {
	@Query("FROM Recommendations r LEFT JOIN User u ON (r.sender = u.userId) "
			+ "LEFT JOIN User us ON (r.receiver = us.userId) LEFT JOIN Movie m ON (r.movie = m.movieId)")
	List<Recommendations> findAll();
	
	@Query("FROM Recommendations r LEFT JOIN User u ON (r.sender = u.userId) "
			+ "LEFT JOIN User us ON (r.receiver = us.userId) LEFT JOIN Movie m ON "
			+ "(r.movie = m.movieId) WHERE u.userId = :userid")
	List<Recommendations> findBySender(int userid);
	
	@Query("FROM Recommendations r LEFT JOIN User u ON (r.sender = u.userId) "
			+ "LEFT JOIN User us ON (r.receiver = us.userId) LEFT JOIN Movie m ON "
			+ "(r.movie = m.movieId) WHERE us.userId = :userid")
	List<Recommendations> findByReceiver(int userid);
	
//	@Query("FROM Recommendations r LEFT JOIN User u ON (r.sender = u.userId) "
//			+ "LEFT JOIN User us ON (r.receiver = us.userId) LEFT JOIN Movie m ON "
//			+ "(r.movie = m.movieId) WHERE us.userId = :recId AND m.movieId = :movieId")
//	List<Recommendations> delete(int recId, int movieId);
	List<Recommendations> findByReceiverAndMovie(User u, Movie m);
	
	
	
}
