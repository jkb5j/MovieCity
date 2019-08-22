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
        const resp = await fetch(environment.context + '/users/followers/' + localStorage.getItem('otherUserId'), {
            credentials: 'include'
        });
        const followersFromServer = await resp.json();
        this.setState({
            follower: followersFromServer
        });
    }

    signIn(userId: any, username: any) {
        localStorage.setItem("otherUserId", userId)
        console.log(localStorage.getItem("otherUserId"))
        localStorage.setItem("otherUsername", username)
        console.log(localStorage.getItem("otherUsername"))
        this.props.history.push("/other-profile");
        window.location.reload();
    }

    render() {
        const followers = this.state.follower;
        return(
            <div>
                <table className="follower-table table-striped">
                    <thead>
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
                                <tr key={'followerId-'+follower.userId} onClick={() => {this.signIn(follower.userId, follower.username)}}>
                                    <td>{follower.username}</td>
                                    <td>{follower.firstName}</td>
                                    <td>{follower.lastName}</td>
                                    <td>{follower.email}</td>
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