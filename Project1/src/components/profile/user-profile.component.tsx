import React, { Component, unstable_Profiler } from 'react';
import {User} from '../../models/user';
import { Input, Button } from 'reactstrap';
import FavMovies from '../movies/favorite-movies/fav-movies.component';
import GetFollowers from '../followers/get-followers/get-followers.component';
import MyFriends from '../friends/get-friends/get-friends.component';
import { RouteComponentProps } from 'react-router';
// import {follower} from '../../models/followers';
// import {friend} from '../../models/friends';
// import {movie} from '../../models/movie';
// import {environment} from '../../../environment';


interface IState{
    users:User[]
}

export class UserProfile extends Component<RouteComponentProps, IState> {

    logout(){
        localStorage.clear();
        this.props.history.push("/sign-in");
    }

    render(){
        //const user = this.state.users;

        return(
                <div className="work">
                    <div className="work">
                        <div className="work">
                            <p>User</p>
                            <p>{localStorage.getItem('username')}</p>
                        </div>
                        <div className="work">
                            <Button color="secondary"  id="logout Button" onClick={() => {this.logout()}}>Logout</Button>
                        </div>
                        <div className="work">
                            <div className="work">
                                <FavMovies/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="work">
                        <p>Followers</p>
                        <div className="work">
                            <GetFollowers/>
                        </div>
                    </div>
                    <div className="work">
                        <p>Friends</p>
                        <MyFriends/>    
                    </div> 
                </div>
        )
    }
}