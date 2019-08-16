package com.movie_city.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie_city.models.Movie;
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
	
	@GetMapping("/sender/{userid}")
	public List<Recommendations> findBySender(@PathVariable int userid) {
		return recommendService.findBySender(userid);
	}
	
	@GetMapping("/receiver/{userid}")
	public List<Recommendations> findByReceiver(@PathVariable int userid) {
		return recommendService.findByReceiver(userid);
	}
	@PutMapping("receiver/{recId}/sender/{sendId}") // Test
	private Recommendations recommendMovie(@PathVariable int recId, @PathVariable int sendId, @RequestBody Movie m) {
		return recommendService.recommendMovie(recId, sendId, m);
	}
}
