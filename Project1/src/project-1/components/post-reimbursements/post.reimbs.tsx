import React from 'react';
import { RouteComponentProps } from 'react-router';
import { environment } from '../../../environment';


interface IState {
    postinginfo: {
        amount: number,
        type: number
    },
    errorMessage?: string
}
export class PostReimbs extends React.Component<RouteComponentProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            postinginfo: {
                amount: 0,
                type: 0
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
            const resp = await fetch(environment.context + '/reimb/', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state.postinginfo), 
                headers: {
                    'content-type': 'application/json'
                }
            });
            this.props.history.push('/reimbursements');
        } catch (err) {
            console.error(err);
            this.setState({
                errorMessage: 'Something Failed'
            });
        }
    }

    render() {
        return (
            <form className="reimb-post-form" onSubmit={this.submit}>
                <h1 className="posting title">Please Fill The Fields</h1>
                <label htmlFor="inputAmount" className="number-only">Amount</label>
                <input type="number" id="inputAmount"
                name="amount"
                className="form-control"
                placeholder="How Much?"
                onChange={this.handleChange}
                value={this.state.postinginfo.amount} required />
                <label htmlFor="inputType" className="number-only">Reimbursement Type</label>
                <input type="number" id="inputType"
                name="type"
                className="form-control"
                placeholder="What Type Is It?"
                onChange={this.handleChange}
                value={this.state.postinginfo.type} required />
                {this.state.errorMessage && <p id="error-message">{this.state.errorMessage}</p>}
                <button color="success" type="submit">Post Reimbursement</button>
            </form>
        );
    }
}