import React, { Component } from 'react';
import { environment } from '../../../environment';
import { User } from '../../../models/user';
import { Button } from 'reactstrap';

interface IState {
    users: User[],
    username: string,
    slection:string,
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

    // submit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     try{
    //         console.log("usename stuff before");
    //        this.findAUsers(this.state.username);
    //        console.log("usename stuff After");
    //     } catch (err) {
    //         console.error(err);
    //         this.setState({
                
    //             errorMessage: 'Wrong User Name'
    //         });
    //     }
    // }

    findAUsers= async (username:String) => {
        //change the 1 to the session user
        const resp = await fetch(environment.context + '/users/username/'+username, {
            credentials: 'include'
        });
        const usersFromServer = await resp.json();
        console.log(usersFromServer);
        this.setState({
            users: usersFromServer
        });
    }

    render() {
        const users = this.state.users;
        return(
            <div id="">
                  <label>Enter Friend UserName</label>
                  <input type="text" id="inputUserName" name="username" className="form-control" onChange={this.handleChange} value={this.state.username} />
                  <Button color="success"  id="inputUserName" onClick={() => {this.findAUsers(this.state.username)}}>Find User</Button>
                  <Button color="success"  id="inputUserName" onClick={() => {this.getAllUsers()}}>All Users</Button>
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
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}