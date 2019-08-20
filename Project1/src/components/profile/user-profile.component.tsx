import React, { Component, unstable_Profiler } from 'react';
import {User} from '../../models/user';
import { Input } from 'reactstrap';
import FavMovies from '../movies/favorite-movies/fav-movies.component';
import GetFollowers from '../followers/get-followers/get-followers.component';
import MyFriends from '../friends/get-friends/get-friends.component';
// import {follower} from '../../models/followers';
// import {friend} from '../../models/friends';
// import {movie} from '../../models/movie';
// import {environment} from '../../../environment';


interface IState{
    users:User[]
}

export class UserProfile extends Component<{}, IState> {

    render(){
        //const user = this.state.users;

        return(
                <div>
                    <div >
                        <div >
                            <p>User</p>
                            <p>req.session.user.userId</p>
                        </div>
                        <div >
                            <div >
                                <FavMovies/>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <p>Followers</p>
                        <div>
                            <GetFollowers/>
                        </div>
                    </div>
                    <div>
                        <p>Friends</p>
                        <MyFriends/>    
                    </div> 
                    

                </div>
        )
    }
}