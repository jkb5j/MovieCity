package com.movie_city.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "recommendations")
public class Recommendations {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "recommendation_id")
	private int recommendationId;
	
	@OneToMany
	@JoinColumn(name="user_id")
	private User receiver;
	@OneToMany
	@JoinColumn(name="user_id")
	private User sender;
	@OneToMany
	@JoinColumn(name="movie_id")
	private Movie movie;
}
