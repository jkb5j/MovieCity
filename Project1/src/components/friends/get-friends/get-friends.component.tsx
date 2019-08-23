import React, { Component } from 'react';
import { environment } from '../../../environment';
import { User } from '../../../models/user';
import { Button } from 'reactstrap';

interface IState {
    users: User[],
    showRec: boolean
}

export default class MyFriends extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
            showRec: false
        };
    }

    async componentDidMount() {
        this.getFriends();
    };
    unfriend = async (recipientId: Number) => {
        const resp = await fetch(environment.context + '/users/friends/' + localStorage.getItem('userId') + '/unfriend/' + recipientId, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
        //window.location.reload();
    }
    getFriends = async () => {
        const resp = await fetch(environment.context + '/users/friends/' + localStorage.getItem('userId'), {
            credentials: 'include'
        });
        const usersFromServer = await resp.json();
        this.setState({
            users: usersFromServer,
        });
    }

    recommendMovie = async (recId: Number) => {
        const resp = await fetch(environment.context + '/recs/receiver/' + recId + '/sender/' + localStorage.getItem("userId") + '/movie/' + localStorage.getItem('movieId'), {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
        localStorage.removeItem("movieId");
        localStorage.setItem("display", "null");
        window.location.reload();
    }

    render() {
        const users = this.state.users;
        return (
            <div>
                <table className="table table-striped table-light">
                    <thead className="fr-thead">
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr key={'userId-' + user.userId}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>
                                        <Button className="btn btn-warning" type="button"
                                            onClick={() => this.unfriend(user.userId)}>
                                            Unfriend
                                        </Button>
                                    </td>
                                    {/* <td className={"display" + localStorage.getItem("display")}>
                                        <Button className="btn btn-success" type="button"
                                            onClick={() => this.recommendMovie(user.userId)}>
                                            Recommend Movie
                                        </Button>
                                    </td> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}