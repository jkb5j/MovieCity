import React, { Component, unstable_Profiler } from 'react';
import {User} from '../../models/user';
// import { Input, Button } from 'reactstrap';
// import FavMovies from '../movies/favorite-movies/fav-movies.component';
// import MyFriends from '../friends/get-friends/get-friends.component';
// import { RouteComponentProps } from 'react-router';
// import GetFollowing from '../followers/get-following/get-following.component';
import OtherFavMovies from '../movies/favorite-movies/other-fav-movies.component';
import OtherGetFollowing from '../followers/get-following/other-get-following.component';
import OtherFriends from '../friends/get-friends/other-get-friends.component';


interface IState{
    users:User[]
}

export class OtherUserProfile extends Component<{}, IState> {

    render(){

        return(
                <div className="work">
                    <div className="work">
                        <div className="work">
                            <p>User</p>
                            <p>{localStorage.getItem('OtherUsername')}</p>
                        </div>
                        <div className="work">
                            <div className="work">
                                <OtherFavMovies/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="work">
                        <p>Following Me</p>
                        <div className="work">
                            <OtherGetFollowing/>
                        </div>
                    </div>
                    <div className="work">
                        <p>Friends</p>
                        <OtherFriends/>    
                    </div> 
                </div>
        )
    }
}