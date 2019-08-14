package com.movie_city.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie_city.models.Pending;
import com.movie_city.services.PendingService;

@RestController
@RequestMapping("Pending")
public class PendingController {
	@Autowired
	private PendingService ps;
	
	@GetMapping
	private List<Pending> findAll() {
		return ps.findAll();
	}
}
