package com.movie_city.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "pending")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@JsonFilter("depth_4")
public class Pending {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "pending_id")
	private int pendingId;
	
	@OneToOne
	@JoinColumn(name="being_asked")
	private User beingAsked;
	@OneToOne
	@JoinColumn(name="asking")
	private User asking;
	
	private int status;
}
