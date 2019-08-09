import React from 'react';
import { environment } from '../../../environment';
import { RouteComponentProps } from 'react-router';

interface IState {
    userinfo: {
        firstName: string,
        lastName: string,
        email: string
    },
    errorMessage?: string
}

export class PatchUser extends React.Component<RouteComponentProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            userinfo: {
                firstName: '',
                lastName: '',
                email: ''
            }
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        this.setState({
            userinfo: {
                ...this.state.userinfo,
                [name]: event.target.value
            }
        });
    }

    submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const resp = await fetch(environment.context + '/users/myself', {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify(this.state.userinfo),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const user = await resp.json();
            console.log(user);
            // localStorage.setItem('user', JSON.stringify(user));
            this.props.history.push('/my-user-info');
        } catch (err) {
            console.error(err);
            console.log('invalid credentials');
            this.setState({
                errorMessage: 'Wrong Input Added'
            });
        }
    }

    render() {
        return (
            <form className="user-patch-form" onSubmit={this.submit}>
                <h1 className="updating title">Please Update Your Information</h1>
                <label htmlFor="inputFirstName" className="text-only">First Name</label>
                <input type="text" id="inputFirstName"
                    name="firstName"
                    className="form-control"
                    placeholder="first name here"
                    onChange={this.handleChange}
                    value={this.state.userinfo.firstName} required />
                <label htmlFor="inputLastName" className="text-only">Last Name</label>
                <input type="text" id="inputLastName"
                    name="lastName"
                    className="form-control"
                    placeholder="last name here"
                    onChange={this.handleChange}
                    value={this.state.userinfo.lastName} required />
                <label htmlFor="inputEmail" className="text-only">Email</label>
                <input type="text" id="inputEmail"
                    name="email"
                    className="form-control"
                    placeholder="email address"
                    onChange={this.handleChange}
                    value={this.state.userinfo.email} required />
                {this.state.errorMessage && <p id="error-message">{this.state.errorMessage}</p>}
                <button color="success" type="submit">Update Profile</button>
            </form>
            //<h1>Update Users</h1>
        );
    }
}