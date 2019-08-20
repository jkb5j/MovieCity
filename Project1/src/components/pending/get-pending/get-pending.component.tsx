import React, { Component } from 'react';
import { Pending } from '../../../models/pending';
import { environment } from '../../../environment';
import { Button } from 'reactstrap';

interface IState {
    pending: Pending[],
    updatePending: {
        pendingId: Number,
        status: Number
    }
}

export default class GetPending extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            pending: [],
            updatePending: {
                pendingId: 0,
                status: 0
            }
        };
    }

    async componentDidMount() {
        this.getPending();
    };

    getPending = async () => {
        const resp = await fetch(environment.context + '/pending/being-asked/' + localStorage.getItem('userId') + '/pending', {
            credentials: 'include'
        });
        const pendingFromServer = await resp.json();
        this.setState({
            pending: pendingFromServer
        });
        console.log(this.state.pending);
    }
    getStatus = (status: Number) => {
        if(status == 0) {
            return 'Pending';
        } else if(status == 1) {
            return 'Accepted';
        } else {
            return 'Denied';
        }
    }
    changeStatus = async (updatePendingId: Number, updateStatus: Number) => {
        this.setState({
            updatePending: {
                pendingId: updatePendingId,
                status: updateStatus
            }
        });
        const resp = await fetch(environment.context + '/pending/' + updatePendingId,{
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify(this.state.updatePending),
                headers: {
                    'content-type': 'application/json'
                }
        });
    }
    render() {
        const pendings = this.state.pending;
        return(
            <div id="pending-table-container">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Asker Username</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendings.map(pending =>
                                <tr key={'pendingId-'+pending.pendingId}>
                                    <td>{pending.asking.username}</td>
                                    <td>{this.getStatus(pending.status)}</td>
                                    <td><Button className="btn btn-primary" type="button" onClick={() => this.changeStatus(pending.pendingId,1)}>
                                        Accept
                                        </Button></td>
                                        <td><Button className="btn btn-primary" type="button" onClick={() => this.changeStatus(pending.pendingId,-1)}>
                                        Deny
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