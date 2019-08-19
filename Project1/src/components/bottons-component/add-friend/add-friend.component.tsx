import React, { Component } from 'react';
import { Pending } from '../../../models/pending';
import { environment } from '../../../environment';
import { Button } from 'reactstrap';

interface IState {
    addFriend: {
        recipient: Number
    }
}

export default class GetPending extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            addFriend: {
                recipient: 0
            }
        };
    }
    
    changeStatus = async (updatePendingId: Number, updateStatus: Number) => {
        this.setState({
            updatePending: {
                pendingId: updatePendingId,
                status: updateStatus
            }
        });
        const resp = await fetch(environment.context + '/pending/request' + updatePendingId /* this is the signed in user */ + askingId,{
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