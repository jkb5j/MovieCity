package com.movie_city.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.movie_city.models.Genre;

public interface GenreRepo extends JpaRepository<Genre, Integer> {
	@Query("FROM Genre g ORDER BY genre")
	List<Genre> findAll();

}
