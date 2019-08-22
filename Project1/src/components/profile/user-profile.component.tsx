import React, { Component, unstable_Profiler } from 'react';
import { User } from '../../models/user';
import { Input, Button } from 'reactstrap';
import FavMovies from '../movies/favorite-movies/fav-movies.component';
import MyFriends from '../friends/get-friends/get-friends.component';
import { RouteComponentProps } from 'react-router';
import GetFollowing from '../followers/get-following/get-following.component';


interface IState {
    users: User[]
}

export class UserProfile extends Component<RouteComponentProps, IState> {

    logout() {
        localStorage.clear();
        this.props.history.push("/sign-in");
    }

    render() {

        return (
            <div className="user-profile">
                <div className="row user-box">
                    <div className="row col-md-9">
                        <h3>User Profile</h3>
                    </div>
                    <div className="row user-credentials col-md-3">
                        <p>User: {localStorage.getItem('username')}</p>
                        <Button color="danger" id="logout Button" onClick={() => { this.logout() }}>Logout</Button>
                    </div>

                </div>
                <hr />
                <div className="fav-movies-table">
                    <h3>Favorite Movies</h3>
                    <FavMovies />
                </div>
                <div className="user-followers row">
                    <div className="following-table col-md-6">
                        <h3>Following</h3>
                        <GetFollowing />
                    </div>
                    <div className="col-md-6">
                        <h3>Friends</h3>
                        <MyFriends />
                    </div>
                </div>
            </div>
        )
    }
}