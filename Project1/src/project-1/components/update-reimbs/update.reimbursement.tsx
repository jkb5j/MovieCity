import React from 'react';
import Reimbursement from '../../models/reimbursement';
import { RouteComponentProps } from 'react-router';
import { environment } from '../../../environment';

interface IState {
    reimbs: Reimbursement[],
    resolutioninfo: {
        reimbursementid: number,
        status: number
    },
    errorMessage?: string
}

export class PatchReimbs extends React.Component<RouteComponentProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            reimbs: [],
            resolutioninfo: {
                reimbursementid: 0,
                status: 0
            }
        };
    }

    async componentDidMount() {
        this.getReimbursementsByStatus();
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        this.setState({
            resolutioninfo: {
                ...this.state.resolutioninfo,
                [name]: event.target.value
            }
        });
    }

    submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const resp = await fetch(environment.context + '/reimb/partial', {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify(this.state.resolutioninfo),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const reimb = await resp.json();
            console.log(reimb);
            this.props.history.push('/reimbursements');
        } catch (err) {
            console.error(err);
            this.setState({
                errorMessage: 'Wrong Input Added'
            });
        }
    }

    getReimbursementsByStatus = async () => {
        const resp = await fetch(environment.context + '/reimb/reimb/' + 1, {
            credentials: 'include'
        });
        const reimbsFromServer = await resp.json();
        this.setState({
            reimbs: reimbsFromServer
        })
    }

    render() {
        const reimbs = this.state.reimbs;
        return (
            <div id="reimb-table-container">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Author</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Type</th>
                            <th scope="col">Date Submitted</th>
                            <th scope="col">Resolver</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date Resolved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reimbs.map(reimb =>
                                <tr key={'reimbursementId-' + reimb.reimbursementid}>
                                    <td>{reimb.reimbursementid}</td>
                                    <td>{reimb.author.firstName}</td>
                                    <td>{reimb.amount}</td>
                                    <td>{reimb.type.type}</td>
                                    <td>{reimb.dateSubmitted}</td>
                                    <td>{reimb.resolver.firstName}</td>
                                    <td>{reimb.status.status}</td>
                                    <td>{reimb.dateResolved}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <form className="reimb-patch-form" id="reimb-patch-form"onSubmit={this.submit}>
                    <h1 className="updating title"> Please Enter ID and Status</h1>
                    <label htmlFor="inputReimbursementId" className="number only">Reimbursement ID</label>
                    <input type="number" id="inputReimbursementId"
                        name="reimbursementid"
                        className="form-control"
                        placeholder="reimbursement id?"
                        onChange={this.handleChange}
                        value={this.state.resolutioninfo.reimbursementid} required />
                    <label htmlFor="inputStatusId" className="number only">Status ID</label>
                    <input type="number" id="inputStatusId"
                        name="status"
                        className="form-control"
                        placeholder="status id?"
                        onChange={this.handleChange}
                        value={this.state.resolutioninfo.status} required />
                    {this.state.errorMessage && <p id="error-message">{this.state.errorMessage}</p>}
                    <button color="success" type="submit">Update Reimbursement</button>
                </form>
            </div>
        );
    }
}