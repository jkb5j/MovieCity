package com.movie_city.dao;

import java.util.List;
import java.util.stream.Collectors;

import org.hibernate.Hibernate;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.movie_city.models.Movie;
import com.movie_city.util.SessionUtil;

public class MovieDao {
	private SessionFactory sf = SessionUtil.getSessionFactory();
	// needs to be tested
	public int save(Movie m) {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		s.save(m);
		t.commit();
		s.close();
		return m.getMovieId();
	}
	// needs to be tested
	public Movie update(Movie m) {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		s.update(m);
		t.commit();
		s.close();
		System.out.println(m);
		return m;
	}
	// going to do in Spring Data
	public List<Movie> findAllMovies() {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		
		t.commit();
		s.close();
		return null;
	}
	
	public Movie findById(int id) {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		
		Query q = s.createQuery("FROM Movie m WHERE m.movieId = :movieid");
		q.setInteger("movieid", id);
		List<Movie> mv = (List<Movie>) q.list();
		System.out.println(mv.get(0));
		t.commit();
		s.close();
		return mv.get(0);
	}
	
	public Movie findByTitle(String title) {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		
		Query q = s.createQuery("FROM Movie m WHERE m.title = :title");
		q.setString("title", title);
		List<Movie> mv = (List<Movie>) q.list();
		System.out.println(mv.get(0));
		t.commit();
		s.close();
		return mv.get(0);
	}
	
	public Movie findByGenre(int genre) {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();

		Query q = s.createQuery("FROM Movie m WHERE m.genre = :genre");
		q.setInteger("genre", genre);
		List<Movie> mv = (List<Movie>) q.list();
		if (mv.size() > 0) {
			mv.forEach(ele -> System.out.println(ele));
			t.commit();
			s.close();
			return mv.get(0);
		} else {
			t.commit();
			s.close();
			return null;
		}
	}
	// needs to be tested
	public Movie findByYear(int year) {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();

		Query q = s.createQuery("FROM Movie m WHERE m.releaseYear = :year");
		q.setInteger("year", year);
		List<Movie> mv = (List<Movie>) q.list();
		if (mv.size() > 0) {
			mv.forEach(ele -> System.out.println(ele));
			t.commit();
			s.close();
			return mv.get(0);
		} else {
			t.commit();
			s.close();
			return null;
		}
	}
}
