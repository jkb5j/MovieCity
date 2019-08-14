package com.movie_city.driver;

import java.util.List;

import com.movie_city.dao.MovieDao;
import com.movie_city.dao.UserDao;
import com.movie_city.models.Movie;
import com.movie_city.models.User;

public class MCHibernateDriver {

	private static MovieDao moviedao = new MovieDao();
	private static UserDao userdao = new UserDao();
	public static void main(String[] args) {
//		Movie mv = moviedao.findById(3);
		
//		Movie mv = moviedao.findByTitle("When Marnie Was There");
		
//		Movie mv = moviedao.findByGenre(2);
		
//		Movie mv = moviedao.findByYear(2012);
		
//		List<User> u = userdao.findByUsernameAndPasswordCriteria("nepgear", "pass");
		
		userdao.CreateNewUser("Neptune", "pass", "bluebrenu@moviecity.com", "Nep", "Tester");
	}
}