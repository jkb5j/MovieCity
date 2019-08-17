package com.movie_city.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_city.models.Recommendations;
import com.movie_city.repos.MovieRepo;
import com.movie_city.repos.RecommendRepo;
import com.movie_city.repos.UserRepo;

@Service
public class RecommendService {
	@Autowired
	private RecommendRepo recommendRepo;
	@Autowired
	private UserRepo ur;
	@Autowired
	private MovieRepo mr;
	
	public List<Recommendations> findAll() {
		return recommendRepo.findAll();
	}
	
	public List<Recommendations> findBySender(int userid) {
		return recommendRepo.findBySender(userid);
	}
	
	public List<Recommendations> findByReceiver(int userid) {
		return recommendRepo.findByReceiver(userid);
	}
	@Transactional
	public Recommendations recommendMovie(int recId, int sendId, int movieId) {
		Recommendations recom = new Recommendations(0, ur.getOne(recId), 
				ur.getOne(sendId), mr.getOne(movieId));		
		return recommendRepo.saveAndFlush(recom);
	}
	@Transactional
	public List<Recommendations> removeRecommendation(int recId, int movieId) {
		List<Recommendations> recom = recommendRepo.findByReceiverAndMovie(ur.getOne(recId), mr.getOne(movieId));
		int size = recom.size();
		for(int i = 0; i < size; i++) {
			recommendRepo.delete(recom.get(i));
		}
		System.out.println("not null recom");
		System.out.println("recom" + recom);
		return recom;
	}
}
