package com.movie_city.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_city.repos.MovieRepo;

@Service
public class MovieService {
	@Autowired
	private MovieRepo movieRepo;
	
}
