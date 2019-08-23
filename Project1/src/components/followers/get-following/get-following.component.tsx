import React, { Component } from 'react';
import { environment } from '../../../environment';
import { User } from '../../../models/user';
// import { Button } from 'reactstrap';
import { RouteComponentProps, withRouter } from 'react-router';

interface IState {
    follower: User[]
}

export class GetFollowing extends Component<RouteComponentProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            follower: []
        };
    }

    async componentDidMount() {
        this.getFollowers();
    };
    getFollowers = async () => {
        const resp = await fetch(environment.context + '/users/followers/' + localStorage.getItem('userId'), {
            credentials: 'include'
        });
        const followersFromServer = await resp.json();
        this.setState({
            follower: followersFromServer
        });
    }

    signIn(userId: any, username: any) {
        localStorage.setItem("otherUserId", userId)
        localStorage.setItem("otherUsername", username)
        this.props.history.push("/other-profile");
    }

    render() {
        const followers = this.state.follower;
        return(
            <div>
                <table className="table table-striped table-light">
                    <thead className="fol-thead">
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            followers.map(follower =>
                                <tr key={'followerId-'+follower.userId}>
                                    <td onClick={() => {this.signIn(follower.userId, follower.username)}}>{follower.username}</td>
                                    <td onClick={() => {this.signIn(follower.userId, follower.username)}}>{follower.firstName}</td>
                                    <td onClick={() => {this.signIn(follower.userId, follower.username)}}>{follower.lastName}</td>
                                    <td onClick={() => {this.signIn(follower.userId, follower.username)}}>{follower.email}</td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter(GetFollowing);