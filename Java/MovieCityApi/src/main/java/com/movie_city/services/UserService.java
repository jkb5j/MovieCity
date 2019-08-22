package com.movie_city.services;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.movie_city.models.Movie;
import com.movie_city.models.Role;
import com.movie_city.models.User;
import com.movie_city.repos.MovieRepo;
import com.movie_city.repos.UserRepo;
import com.movie_city.dtos.Credential;

@Service
public class UserService {
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private MovieRepo movieRepo;

	public List<User> findAll() {
		return userRepo.findAll();
	}

	public List<User> findByUsername(String username) {
		return userRepo.findByUsername(username);
	}

	public User findById(int id) {
		return userRepo.getOne(id);
	}

	public User save(User user) {
		user.setRole(new Role(2, "user"));
		user.setUserId(0);
		return userRepo.saveAndFlush(user);
	}

	public User update(int id, User user) {
		if(id == user.getUserId()) { // add test for authentication
			return userRepo.saveAndFlush(user);
		} else {
			return null;
		}
	}
	@Transactional
	public User unfavoriteMovie(int userId, int movieId) {
		User u = userRepo.getOne(userId);
		u.getFavorites().removeIf(Movie -> Movie.getMovieId() == movieId);
		return u;
	}
	@Transactional
	public User favoriteMovie(int userId, int movieId) {
		User u = userRepo.getOne(userId);
		Movie movie = movieRepo.getOne(movieId);
		u.getFavorites().add(movie);
		return u;
	}

	public List<Movie> findFavorites(int userId) {
		User u = userRepo.getOne(userId);
		return u.getFavorites();
	}

	public List<User> findFriends(int userId) {
		User u = userRepo.getOne(userId);
		return u.getFriends();
	}
	@Transactional
	public List<User> unfriend(int userId, int friendId) {
		User mainUser = userRepo.getOne(userId);
		User oldUser = userRepo.getOne(userId);
		mainUser.getFriends().removeIf(User -> User.getUserId() == friendId);
		mainUser.getFollowers().add(oldUser);
		return mainUser.getFriends();
	}
	@Transactional
	public List<User> addFriend(int userId, int friendId) {
		User mainUser = userRepo.getOne(userId);
		User oldUser = userRepo.getOne(friendId);
		mainUser.getFriends().add(oldUser);
		return mainUser.getFriends();
	}

	public List<User> findFollowers(int userId) {
		User mainUser = userRepo.getOne(userId);
		return mainUser.getFollowers();
	}
	@Transactional
	public List<User> unfollow(int userId, int unfollowId) {
		User mainUser = userRepo.getOne(userId);
		mainUser.getFollowers().removeIf(User -> User.getUserId() == unfollowId);
		return mainUser.getFollowers();
	}
	@Transactional
	public List<User> follow(int userId, int followId) {
		User mainUser = userRepo.getOne(userId);
		User oldUser = userRepo.getOne(followId);
		mainUser.getFollowers().add(oldUser);
		return mainUser.getFollowers();
	}
	
	public User login(Credential cred) {
		User u = userRepo.findByUsernameAndPassword(cred.getUsername(), cred.getPassword());

		if (u != null) {
			HttpServletRequest req = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes())
					.getRequest();
			req.getSession().setAttribute("user", u);
		}
		return u;
	}

	public List<User> findAllBut(int userId) {
		return userRepo.findAllBut(userId);
	}
	
	public List<User> findFollowing(int userId) {
		List<User> all = userRepo.findAll();
		List<User> following = new ArrayList<User>();
		User mainUser = userRepo.getOne(userId);
		for(User u: all) {
			if(u.getFollowers().contains(mainUser)) {
				following.add(u);
			}
		}
		return following;
	}
}
