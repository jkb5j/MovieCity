package com.movie_city.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.movie_city.models.User;

public interface UserRepo extends JpaRepository<User, Integer>{

}
