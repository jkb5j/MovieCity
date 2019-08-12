package com.movie_city.dao;

import org.hibernate.SessionFactory;

import com.movie_city.util.SessionUtil;

public class UserDao {
	private SessionFactory sf = SessionUtil.getSessionFactory();
}
