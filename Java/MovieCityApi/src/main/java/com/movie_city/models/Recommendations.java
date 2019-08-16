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
	public Recommendations() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Recommendations(int recommendationId, User receiver, User sender, Movie movie) {
		super();
		this.recommendationId = recommendationId;
		this.receiver = receiver;
		this.sender = sender;
		this.movie = movie;
	}
	public int getRecommendationId() {
		return recommendationId;
	}
	public void setRecommendationId(int recommendationId) {
		this.recommendationId = recommendationId;
	}
	public User getReceiver() {
		return receiver;
	}
	public void setReceiver(User receiver) {
		this.receiver = receiver;
	}
	public User getSender() {
		return sender;
	}
	public void setSender(User sender) {
		this.sender = sender;
	}
	public Movie getMovie() {
		return movie;
	}
	public void setMovie(Movie movie) {
		this.movie = movie;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((movie == null) ? 0 : movie.hashCode());
		result = prime * result + ((receiver == null) ? 0 : receiver.hashCode());
		result = prime * result + recommendationId;
		result = prime * result + ((sender == null) ? 0 : sender.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Recommendations other = (Recommendations) obj;
		if (movie == null) {
			if (other.movie != null)
				return false;
		} else if (!movie.equals(other.movie))
			return false;
		if (receiver == null) {
			if (other.receiver != null)
				return false;
		} else if (!receiver.equals(other.receiver))
			return false;
		if (recommendationId != other.recommendationId)
			return false;
		if (sender == null) {
			if (other.sender != null)
				return false;
		} else if (!sender.equals(other.sender))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Recommendations [recommendationId=" + recommendationId + ", receiver=" + receiver + ", sender=" + sender
				+ ", movie=" + movie + "]";
	}
	
}
