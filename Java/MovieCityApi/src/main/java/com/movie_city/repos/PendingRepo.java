package com.movie_city.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie_city.models.Pending;
import com.movie_city.models.User;

public interface PendingRepo extends JpaRepository<Pending, Integer>{

	List<Pending> findByBeingAskedUserId(int beingAskedId);

	List<Pending> findByAskingUserId(int askingId);
	
	List<Pending> findByBeingAskedUserIdAndStatus(int beingAskedId, int status);

}
