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
	public Pending update(int pendingId, int pstatus) {
			Pending pend = pr.getOne(pendingId);
			if(1 == pstatus) {
				User beingAsked = pend.getBeingAsked();
				User asking = pend.getAsking();
				beingAsked.getFriends().add(asking);
				asking.getFriends().add(beingAsked);
				pend.setStatus(pstatus);
			return pr.saveAndFlush(pend);
			} else {
				pend.setStatus(pstatus);
			}
			return null;
	}

	public List<Pending> findByBeingAsked(int beingAskedId) {
		
		return pr.findByBeingAskedUserId(beingAskedId);
	}
	public Pending save(int askingId, int beingAskedId) {
		Pending p = new Pending();
		p.setStatus(0);
		p.setAsking(ur.getOne(askingId));
		p.setBeingAsked(ur.getOne(beingAskedId));
		p.setPendingId(0);
		return pr.saveAndFlush(p);
	}
	public List<Pending> findByAsking(int askingId) {
		return pr.findByAskingUserId(askingId);
	}
	// find all with pending status
	public List<Pending> findByBeingAskedAndStatus(int beingAskedId) {
		return pr.findByBeingAskedUserIdAndStatus(beingAskedId, 0);
	}

}
