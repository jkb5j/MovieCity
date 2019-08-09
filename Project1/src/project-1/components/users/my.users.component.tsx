import React, { Component } from 'react';
import { environment } from "../../../environment";
import UserReimb from "../../models/user.reimb";


interface IState {
    user: any
}

export default class MyUser extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state ={
            user: {}
        }
    }

    async componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const resp = await fetch(environment.context + '/users/0', {
            credentials: 'include'
        });
        const allUsersFromServer = await resp.json();

        this.setState({
            ...this.state,
            user: allUsersFromServer
        });


    }

    render() {
        const user = this.state.user;
        return (
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
                            user&& (
                            <tr key={'userId-' + user.userId}>
                                    <td>{user.userId}</td>
                                    <td>{user.username}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role&&user.role.role}</td>
                            </tr>)
                            
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}