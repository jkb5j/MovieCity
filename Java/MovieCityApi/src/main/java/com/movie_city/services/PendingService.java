package com.movie_city.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.movie_city.models.Pending;
import com.movie_city.repos.PendingRepo;

public class PendingService {
	@Autowired
	private PendingRepo pr;
	public List<Pending> findAll() {
		return pr.findAll();
	}

}
