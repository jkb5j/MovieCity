import React, { Component } from 'react';
import { environment } from '../../../environment';
import { User } from '../../../models/user';
import { Button } from 'reactstrap';

interface IState {
    users: User[]
}

export default class MyFriends extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: []
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

    render() {
        const users = this.state.users;
        return(
            <div id="reimb-table-container">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr key={'userId-'+user.userId}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td><Button className="btn btn-primary" type="button" onClick={() => this.unfriend(user.userId)}>
                                        Unfriend
                                        </Button></td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}