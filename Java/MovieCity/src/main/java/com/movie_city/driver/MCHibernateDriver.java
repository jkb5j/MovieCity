package com.movie_city.driver;

import com.movie_city.dao.MovieDao;
import com.movie_city.dao.UserDao;
import com.movie_city.models.Movie;

public class MCHibernateDriver {

	private static MovieDao moviedao = new MovieDao();
	//private static UserDao ud = new UserDao();
	public static void main(String[] args) {
		//Movie mv = moviedao.findById(4);
		//System.out.println(mv);
		System.out.println("hello");
	}
}