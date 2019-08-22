import React from 'react';
import { environment } from '../../environment';
import { RouteComponentProps } from 'react-router';
import { Card } from 'reactstrap';

interface IState {
    credentials: {
        username: string,
        password: string
    },
    errorMessage?: string
}

export class SignIn extends React.Component<RouteComponentProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        this.setState({
            credentials: {
                ...this.state.credentials,
                [name]: event.target.value
            }
        });
    }

    submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const resp = await fetch(environment.context + '/login', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state.credentials),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const user = await resp.json();
            console.log(user);

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('userId', user.userId);
            localStorage.setItem('username', user.username);
            this.props.history.push('/profile'); // navigate pages
        } catch (err) {
            console.log(err);
            console.log('invalid credentials');
            this.setState({
                errorMessage: 'Invalid Credentials'
            });
        }
    }

    render() {
        return (
            <Card className="sign-in-card">
                <form className="form-signin" onSubmit={this.submit}>
                    <h1>Please Sign In</h1>
                    <label htmlFor="inputUsername" className="sr-only">username</label>
                    <input type="text" id="inputUsername"
                        name="username"
                        className="log-up"
                        placeholder="username"
                        onChange={this.handleChange}
                        value={this.state.credentials.username} required />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword"
                        name="password"
                        className="log-up"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.credentials.password} required />
                    {this.state.errorMessage && <p id="error-message">{this.state.errorMessage}</p>}
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                </form>
            </Card>
        );
    }
}
