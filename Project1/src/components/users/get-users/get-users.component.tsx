import React, { Component } from 'react';
import { environment } from '../../../environment';
import { User } from '../../../models/user';
import { Button } from 'reactstrap';

interface IState {
    users: User[],
    username: string,
    slection: string,
    errorMessage?: string
}

export default class GetUsers extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
            username: '',
            slection: ''
        };
    }

    async componentDidMount() {
        this.getAllUsers();
    };

    getAllUsers = async () => {
        const resp = await fetch(environment.context + '/users/except/' + localStorage.getItem('userId'), {
            credentials: 'include'
        });
        const usersFromServer = await resp.json();
        this.setState({
            users: usersFromServer
        });
    }


    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        this.setState({
            username: event.target.value,
        });
    }

    findAUsers = async (username: String) => {
        //change the 1 to the session user
        const resp = await fetch(environment.context + '/users/username/' + username, {
            credentials: 'include'
        });
        const usersFromServer = await resp.json();
        console.log(usersFromServer);
        this.setState({
            users: usersFromServer
        });
    }

    addFriend = async (recipientId: Number) => {
        const resp = await fetch(environment.context + '/pending/request/' + localStorage.getItem('userId') +'/' + recipientId, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
        window.location.reload();
    }
    
    follow = async (recipientId: Number) => {
        const resp = await fetch(environment.context + '/users/followers/' +localStorage.getItem('userId') + '/follow/' + recipientId, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
        window.location.reload();
    }

    render() {
        const users = this.state.users;
        return (
            <div className="find-users">
                <h3>Find Users</h3>
                <div className="find-input">
                    <input type="text" id="inputUserName" name="username" placeholder="Enter Friend Username"
                        className="form-control" onChange={this.handleChange} value={this.state.username} />
                    <Button color="success" id="inputUserName"
                        onClick={() => { this.findAUsers(this.state.username) }}>Find User</Button>
                    <Button color="success" id="inputUserName"
                        onClick={() => { this.getAllUsers() }}>All Users</Button>
                </div>
                <table className="table table-striped table-light">
                    <thead className="fr-thead">
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                        </tr>
                    </thead>
                    <tbody className="fr-body">
                        {
                            users.map(user =>
                                <tr key={'userId-' + user.userId}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td><Button className="btn btn-primary" type="button" onClick={() => this.follow(user.userId)}>
                                            Follow
                                        </Button></td>
                                    <td><Button className="btn btn-primary" type="button" onClick={() => this.addFriend(user.userId)}>
                                            Send Friend Request
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