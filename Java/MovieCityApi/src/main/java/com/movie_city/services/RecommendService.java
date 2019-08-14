package com.movie_city.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_city.models.Recommendations;
import com.movie_city.repos.RecommendRepo;

@Service
public class RecommendService {
	@Autowired
	private RecommendRepo recommendRepo;
	
	public List<Recommendations> findAll() {
		return recommendRepo.findAll();
	}
}
