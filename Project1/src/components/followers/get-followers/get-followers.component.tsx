import React, { Component } from 'react';
import { environment } from '../../../environment';
import { User } from '../../../models/user';
import { Button, Card, CardHeader } from 'reactstrap';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';

interface IState {
    follower: User[]
}

export class GetFollowers extends Component<RouteComponentProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            follower: []
        };
    }

    async componentDidMount() {
        this.getFollowers();
    };
    // /followers/{userId}
    getFollowers = async () => {
        const resp = await fetch(environment.context + '/users/followers/' + localStorage.getItem('userId'), {
            credentials: 'include'
        });
        const followersFromServer = await resp.json();
        this.setState({
            follower: followersFromServer
        });
    }
    unfollow = async (followerId: Number) => {
        const resp = await fetch(environment.context + '/users/followers/' + localStorage.getItem('userId')/*logged in user*/
            + '/unfollow/' + followerId, {
                method: 'DELETE',
                credentials: 'include'
            });
        const followersFromServer = await resp.json();
        this.setState({
            follower: followersFromServer
        });
        window.location.reload();
    }
    signIn(userId: any, username: any) {
        localStorage.setItem("otherUserId", userId)
        localStorage.setItem("otherUsername", username)
        this.props.history.push("/other-profile");
    }

    render() {
        const followers = this.state.follower;
        return (
            <div className="following-card">
                <h3>Following</h3>
                <Card>
                    <table className="table table-striped table-light">
                        <thead className="fol-thead">
                            <tr>
                                <th scope="col">Username</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody className="fol-tbody">
                            {
                                followers.map(follower =>
                                    <tr key={'followerId-' + follower.userId}>
                                        <td onClick={() => {this.signIn(follower.userId, follower.username)}}>{follower.username}</td>
                                        <td onClick={() => {this.signIn(follower.userId, follower.username)}}>{follower.firstName}</td>
                                        <td onClick={() => {this.signIn(follower.userId, follower.username)}}>{follower.lastName}</td>
                                        <td onClick={() => {this.signIn(follower.userId, follower.username)}}>{follower.email}</td>
                                        <td>
                                            <Button className="btn btn-warning" type="button"
                                                onClick={() => this.unfollow(follower.userId)}>
                                                Unfollow
                                        </Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </Card>
            </div>
        )
    }
}

export default withRouter(GetFollowers);