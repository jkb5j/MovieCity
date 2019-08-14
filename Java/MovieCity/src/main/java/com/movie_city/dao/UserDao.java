package com.movie_city.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

import com.movie_city.models.Role;
import com.movie_city.models.User;
import com.movie_city.util.SessionUtil;




public class UserDao {
	
	//Login  user
	private SessionFactory sf = SessionUtil.getSessionFactory();
//	Session s = sf.openSession();
//	Transaction t = s.beginTransaction();
	
	public List<User> findByUsernameAndPasswordCriteria(String username,String password) {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		
		Criteria c = s.createCriteria(User.class);
		c.add(
				Restrictions.and(
						Restrictions.eq("username", username),
						Restrictions.eq("password", password)
						)
			
		);
		List<User> users = c.list();
		users.forEach(ele -> System.out.println(ele));
		t.commit();
		s.close();
		return users;
	}
	
	
	public void CreatNewUser(String username, String password,String email,String first_name, String last_name){
		
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		
		//not sure why dosen't like get here
		//will it work if i just make role_id =2
		//need to look up syntax
		 User u= new User();
		 
		u.setUsername(username);
		u.setPassword(password);
		u.setEmail(email);
		u.setFirstName(first_name);
		u.setLastName(last_name);
		Role myRole = new Role(2, "User");
		u.setRole(myRole);
		t.commit();
		s.close();
	}
	
	//want to update user account where the userId matches the account 
	//not getting the set parameter syntax at the moment broseph
	public void update(String username, String password,String email,String first_name, String last_name) {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		User u= new User();
		
		Query q= s.createQuery("update user set username = :username, set password = :pass, "
				+ "set email =: email, set firstName = :first_name, set lastName =: last_name "
				+ "where userId= :user_id");
		q.setParameter("user_id", u.getUserId());
		
		int result = q.executeUpdate(); 
        s.getTransaction().commit();
		
	}
	
	//want to find followers of user by userID show user name 
	public void findfollowers() {
		Session s = sf.openSession();
		Transaction t = s.beginTransaction();
		User u= new User();
		//lenaa.lenaa_
		Query q=s.createQuery("select followers.*, username,first_name,last_name from followers left join User"
		+ "where being_followed = : user_id");
		
		q.setParameter("user_id",  u.getUserId());
		
	}
	
	
}
