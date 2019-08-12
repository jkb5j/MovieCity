package com.movie_city.dao;

import java.util.List;
import java.util.stream.Collectors;

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
		return m;
	}
	// not finished
	public List<Movie> findAllMovies() {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		
		t.commit();
		s.close();
		return null;
	}
	// needs to be tested
	public Movie findById(int id) {
		Session s = sf.openSession();
		Movie m = (Movie) s.load(Movie.class, id);
		s.close();
		return m;
	}
	// needs to be tested
	public Movie findByTitle(String title) {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		String queryString = "SELECT * FROM movies " + 
				"LEFT JOIN genres USING (genre_id) " + 
				"WHERE title = title " + 
				"ORDER BY genre_type;";
		Query q = s.createQuery(queryString);
		q.setString("title", title);
		List<Object[]> movieArr = q.list();
		List<Movie> movie = movieArr.stream().map(ele -> (Movie) ele[0]).collect(Collectors.toList());
		t.commit();
		s.close();
		return movie.get(0);
	}
	// needs to be tested
	public List<Movie> findByGenre(String genre) {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		String queryString = "SELECT * FROM movies " + 
				"LEFT JOIN genres USING (genre_id) " + 
				"WHERE genre_type = genre " + 
				"ORDER BY genre_type";
		Query q = s.createQuery(queryString);
		q.setString("genre", genre);
		List<Object[]> movieArr = q.list();
		List<Movie> movies = movieArr.stream().map(ele -> (Movie) ele[0]).collect(Collectors.toList());
		t.commit();
		s.close();
		return movies;
	}
	// needs to be tested
	public List<Movie> findByYear(int year) {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		String queryString = "SELECT * FROM movies " + 
				"WHERE release_year = year " + 
				"ORDER BY genre_type;";
		Query q = s.createQuery(queryString);
		q.setInteger("year", year);
		List<Object[]> movieArr = q.list();
		List<Movie> movie = movieArr.stream().map(ele -> (Movie) ele[0]).collect(Collectors.toList());
		t.commit();
		s.close();
		return null;
	}
}
