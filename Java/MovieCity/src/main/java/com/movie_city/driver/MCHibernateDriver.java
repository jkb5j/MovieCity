package com.movie_city.driver;

import com.movie_city.dao.MovieDao;
import com.movie_city.models.Movie;

public class MCHibernateDriver {

	private static MovieDao moviedao = new MovieDao();
	public static void main(String[] args) {
		Movie mv = moviedao.findById(4);
		System.out.println(mv);
	}
}
