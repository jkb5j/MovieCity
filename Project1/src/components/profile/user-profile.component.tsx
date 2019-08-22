import React, { Component, unstable_Profiler } from 'react';
import {User} from '../../models/user';
import { Input, Button } from 'reactstrap';
import FavMovies from '../movies/favorite-movies/fav-movies.component';
import MyFriends from '../friends/get-friends/get-friends.component';
import { RouteComponentProps } from 'react-router';
import GetFollowing from '../followers/get-following/get-following.component';


interface IState{
    users:User[]
}

export class UserProfile extends Component<RouteComponentProps, IState> {

    logout(){
        localStorage.clear();
        this.props.history.push("/sign-in");
    }

    render(){

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
                            <GetFollowing/>
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