package com.movie_city.driver;

import com.movie_city.dao.MovieDao;
import com.movie_city.models.Movie;

public class MCHibernateDriver {

	private static MovieDao moviedao = new MovieDao();
	public static void main(String[] args) {
//		Movie mv = moviedao.findById(3);
		
//		Movie mv = moviedao.findByTitle("When Marnie Was There");
		
		Movie mv = moviedao.findByGenre(2);
	}
}