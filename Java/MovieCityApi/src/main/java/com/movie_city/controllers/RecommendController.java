package com.movie_city.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie_city.models.Recommendations;
import com.movie_city.services.RecommendService;

@RestController
@RequestMapping("recs")
public class RecommendController {
	@Autowired
	private RecommendService recommendService;
	
	@GetMapping
	public List<Recommendations> findAll() {
		return recommendService.findAll();
	}
}
