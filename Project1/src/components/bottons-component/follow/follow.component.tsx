import React, { Component } from 'react';
import { environment } from '../../../environment';
import { Button } from 'reactstrap';

interface IState {
    recipient: Number
}

export default class Follow extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            recipient: 0
        };
    }

    follow = async (recipientId: Number) => {
        this.setState({
            recipient: recipientId
        });
        const resp = await fetch(environment.context + '/users/followers/' + 1 /* this is the signed in user */ + '/follow/' + recipientId, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    render() {
        return (
            <div id="add-friend-container">
                <td><Button className="btn btn-primary" type="button" onClick={() => this.follow(this.state.recipient)}>
                    Accept
                </Button></td>
            </div>
        )
    }
}