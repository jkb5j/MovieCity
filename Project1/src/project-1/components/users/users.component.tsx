import React, { Component } from 'react';
import { environment } from "../../../environment";
import UserReimb from "../../models/user.reimb";


interface IState {
    users: UserReimb[]
}

export default class Users extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: []
        };
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const resp = await fetch(environment.context + '/users', {
            credentials: 'include'
        });
        const allUsersFromServer = await resp.json();
        this.setState({
            users: allUsersFromServer
        });
    }

    render() {
        const users = this.state.users;
        return(
            <div id="users-table-container">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(users =>
                                <tr key={'userId-'+users.userId}>
                                    <td>{users.userId}</td>
                                    <td>{users.username}</td>
                                    <td>{users.firstName}</td>
                                    <td>{users.lastName}</td>
                                    <td>{users.email}</td>
                                    <td>{users.role.role}</td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}