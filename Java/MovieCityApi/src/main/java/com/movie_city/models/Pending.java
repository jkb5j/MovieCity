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
@JsonFilter("depth_2")
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

	public Pending() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Pending(int pendingId, User beingAsked, User asking, int status) {
		super();
		this.pendingId = pendingId;
		this.beingAsked = beingAsked;
		this.asking = asking;
		this.status = status;
	}

	public int getPendingId() {
		return pendingId;
	}

	public void setPendingId(int pendingId) {
		this.pendingId = pendingId;
	}

	public User getBeingAsked() {
		return beingAsked;
	}

	public void setBeingAsked(User beingAsked) {
		this.beingAsked = beingAsked;
	}

	public User getAsking() {
		return asking;
	}

	public void setAsking(User asking) {
		this.asking = asking;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((asking == null) ? 0 : asking.hashCode());
		result = prime * result + ((beingAsked == null) ? 0 : beingAsked.hashCode());
		result = prime * result + pendingId;
		result = prime * result + status;
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
		Pending other = (Pending) obj;
		if (asking == null) {
			if (other.asking != null)
				return false;
		} else if (!asking.equals(other.asking))
			return false;
		if (beingAsked == null) {
			if (other.beingAsked != null)
				return false;
		} else if (!beingAsked.equals(other.beingAsked))
			return false;
		if (pendingId != other.pendingId)
			return false;
		if (status != other.status)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Pending [pendingId=" + pendingId + ", beingAsked=" + beingAsked + ", asking=" + asking + ", status="
				+ status + "]";
	}
	
	
}
