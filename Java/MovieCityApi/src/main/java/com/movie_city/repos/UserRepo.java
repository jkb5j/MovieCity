package com.movie_city.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.movie_city.models.User;

public interface UserRepo extends JpaRepository<User, Integer>{

	User findByUsername(String username);
	User findByUsernameAndPassword(String username, String password);
	@Query("From User u WHERE NOT userId = :userId")
	List<User> findAllBut(int userId);

}
