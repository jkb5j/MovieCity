package com.movie_city.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_city.models.Genre;
import com.movie_city.repos.GenreRepo;

@Service
public class GenreService {
	@Autowired
	private GenreRepo genreRepo;
	
	public List<Genre> findAll() {
		return genreRepo.findAll();
	}
}
