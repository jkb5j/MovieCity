package com.movie_city.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie_city.models.Pending;

public interface PendingRepo extends JpaRepository<Pending, Integer>{

}
