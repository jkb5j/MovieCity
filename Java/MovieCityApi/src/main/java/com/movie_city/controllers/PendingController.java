package com.movie_city.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie_city.models.Pending;
import com.movie_city.services.PendingService;

@RestController
@RequestMapping("pending")
public class PendingController {
	@Autowired
	private PendingService pendingService;
	
	@GetMapping
	private List<Pending> findAll() {
		return pendingService.findAll();
	}
	
	@GetMapping("/being-asked/{beingAskedId}")
	private List<Pending> findByBeingAsked(@PathVariable int beingAskedId) {
		return pendingService.findByBeingAsked(beingAskedId);
	}
	
	@GetMapping("/being-asked/{beingAskedId}/pending")
	private List<Pending> findByBeingAskedAndStatus(@PathVariable int beingAskedId) {
		return pendingService.findByBeingAskedAndStatus(beingAskedId);
	}
	
	@GetMapping("/asking/{askingId}")
	private List<Pending> findByAsking(@PathVariable int askingId) {
		return pendingService.findByAsking(askingId);
	}
	
	@PutMapping("/{pendingId}/{p}")
	private Pending update(@PathVariable int pendingId, @PathVariable int p) {
		return pendingService.update(pendingId, p);
	}
	
	@PutMapping("/request/{askingId}/{beingAskedId}")
	private Pending save(@PathVariable int askingId, @PathVariable int beingAskedId) {
		return pendingService.save(askingId, beingAskedId);
	}
}
