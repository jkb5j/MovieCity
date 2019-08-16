import React, { Component } from 'react';
import {User} from '../../models/user';
import { Input } from 'reactstrap';
// import {follower} from '../../models/followers';
// import {friend} from '../../models/friends';
// import {movie} from '../../models/movie';
// import {environment} from '../../../environment';


interface IState{
    users:User[],

}

export class UserProfile extends Component<{}, IState> {

    render(){
        //const user = this.state.users;

        return(
                <div>
                    <div className="row profile-container">
                        <div className="col-md-5 user-container">
                            <p>Users</p>
                            <div className="view-user-container">
                                <p>Image will go here</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <p>Movies</p>
                            <Input type="text" placeholder="Title"></Input>
                            <button type="submit">Submit</button>
                            <div className="view-movies-container">
                                <p>Movies will go here</p>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-5 follower-container">
                        <p>Followers</p>
                        <div className="view-followers-container">
                            <p>followers will go here</p>
                        </div>
                    </div>

                </div>
        )
    }
}