package com.movie_city.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "recommendations")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@JsonFilter("depth_4")
public class Recommendations {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "recommendation_id")
	private int recommendationId;
	
	@OneToOne
	@JoinColumn(name="receiver")
	private User receiver;
	@OneToOne
	@JoinColumn(name="sender")
	private User sender;
	@OneToOne
	@JoinColumn(name="movie")
	private Movie movie;
}
