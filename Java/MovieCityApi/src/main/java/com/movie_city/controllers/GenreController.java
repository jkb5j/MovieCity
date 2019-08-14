package com.movie_city.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie_city.models.Genre;
import com.movie_city.services.GenreService;

@RestController
@RequestMapping("genres")
public class GenreController {
	
	@Autowired
	private GenreService genreService;
	
	@GetMapping
	public List<Genre> findAll() {
		return genreService.findAll();
	}
	
	

}
