package com.movie_city.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_city.models.Pending;
import com.movie_city.models.User;
import com.movie_city.repos.PendingRepo;
import com.movie_city.repos.UserRepo;

@Service
public class PendingService {
	@Autowired
	private PendingRepo pr;
	@Autowired
	private UserRepo ur;
	
	public List<Pending> findAll() {
		return pr.findAll();
	}
	@Transactional
	public Pending update(int pendingId, Pending p) {
		if(pendingId == p.getPendingId()) {
			Pending pend = pr.getOne(pendingId);
			if(1 == p.getStatus()) {
				
				User beingAsked = pend.getBeingAsked();
				User asking = pend.getAsking();
				beingAsked.getFriends().add(asking);
				asking.getFriends().add(beingAsked);
				pend.setStatus(p.getStatus());
			}
			return pr.saveAndFlush(pend);
		} else {
			return null;
		}
	}

	public List<Pending> findByBeingAsked(int beingAskedId) {
		return pr.findByBeingAskedUserId(beingAskedId);
	}
	public Pending save(int askingId, Pending p) {
		p.setStatus(0);
		p.setAsking(ur.getOne(askingId));
		p.setPendingId(0);
		return pr.saveAndFlush(p);
	}
	public List<Pending> findByAsking(int askingId) {
		return pr.findByAskingUserId(askingId);
	}

}
