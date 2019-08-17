 import React, { Component } from 'react';
import { environment } from '../../../environment';
import { User } from '../../../models/user';

interface IState {
    follower: User[]
}

export default class GetFollowers extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            follower: []
        };
    }

    async componentDidMount() {
        this.getFollowers();
    };
    // /followers/{userId}
    getFollowers = async () => {
        console.log('get followers method');
        const resp = await fetch(environment.context + '/users/followers/' + '1'/*logged in user*/, {
            credentials: 'include'
        });
        const followersFromServer = await resp.json();
        this.setState({
            follower: followersFromServer
        });
    }
    
    // getReimbursementsByStatus = async (status: ReimbursementStatus) => {
    //     const resp = await fetch(environment.context + '/reimb/reimb/' + status.statusId, {
    //         credentials: 'include'
    //     });
    //     const reimbsFromServer = await resp.json();
    //     this.setState({
    //         reimbs: reimbsFromServer,
    //         statusDropdown: {
    //             ...this.state.statusDropdown,
    //             selection: status.status
    //         }
    //     })
    // }

    render() {
        const followers = this.state.follower;
        return(
            <div id="reimb-table-container">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            followers.map(follower =>
                                <tr key={'followerId-'+follower.userId}>
                                    <td>{follower.username}</td>
                                    <td>{follower.firstName}</td>
                                    <td>{follower.lastName}</td>
                                    <td>{follower.email}</td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}