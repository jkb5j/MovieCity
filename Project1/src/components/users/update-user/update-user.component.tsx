import React from 'react';
import { RouteComponentProps } from 'react-router';
import { environment } from '../../../environment';
import { Button } from 'reactstrap';



interface IState {
    postinginfo: {
        userId: any,
        username: string,
        password: string,
        email: string,
        firstName: string,
        lastName: string
    },
    errorMessage?: string
}
export class UpdateUser extends React.Component<RouteComponentProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            postinginfo: {
                userId: localStorage.getItem("userId"),
                username: '',
                password: '',
                email: '',
                firstName: '',
                lastName: ''
            }
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        this.setState({
            postinginfo: {
                ...this.state.postinginfo,
                [name]: event.target.value
            }
        });
    }

    submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const resp = await fetch(environment.context + '/users/' + localStorage.getItem("userId"), {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify(this.state.postinginfo),
                headers: {
                    'content-type': 'application/json'
                }
            });
            localStorage.setItem('username', this.state.postinginfo.username);
            console.log(this.state.postinginfo);
            console.log(localStorage.getItem("user"));
            this.props.history.push('/profile');
        } catch (err) {
            console.error(err);
            this.setState({
                errorMessage: 'Wrong Inputs'
            });
        }
    }

    render() {
        return (
            <form className="user-post-form" onSubmit={this.submit}>
                <h1>Update User Information</h1>
                <label htmlFor="inputUsername" className="text-only">Input Username</label>
                <input type="text" id="inputUsername"
                name="username"
                className="form-control"
                // placeholder="new Username"
                onChange={this.handleChange}
                value={this.state.postinginfo.username} required />
                <label htmlFor="inputPassword" className="text-only">Input Password</label>
                <input type="text" id="inputPassword"
                name="password"
                className="form-control"
                // placeholder="new password"
                onChange={this.handleChange}
                value={this.state.postinginfo.password} required />
                <label htmlFor="inputFirstName" className="text-only">Input First Name</label>
                <input type="text" id="inputFirstName"
                name="firstName"
                className="form-control"
                // placeholder="first-name"
                onChange={this.handleChange}
                value={this.state.postinginfo.firstName} required />
                <label htmlFor="inputLastName" className="text-only">Input Last Name</label>
                <input type="text" id="inputLastName"
                name="lastName"
                className="form-control"
                // placeholder="last-name"
                onChange={this.handleChange}
                value={this.state.postinginfo.lastName} required />
                <label htmlFor="inputEmail" className="text-only">Input Email</label>
                <input type="text" id="inputEmail"
                name="email"
                className="form-control"
                // placeholder="email"
                onChange={this.handleChange}
                value={this.state.postinginfo.email} required />
                <Button className="post-btn btn-info" type="submit">Update User</Button>
            </form>
        );
    }
}