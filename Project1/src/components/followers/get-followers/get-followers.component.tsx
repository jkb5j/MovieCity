 import React, { Component } from 'react';
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import { environment } from '../../../environment';
// import { User } from '../../../models/user';

// interface IState {
//     follower: User[]
// }

// export default class Followers extends Component<{}, IState> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             follower: []
//         };
//     }

//     async componentDidMount() {
//         this.getFollowers;
//     };
//     // /followers/{userId}
//     getFollowers = async (user: User) => {
//         const resp = await fetch(environment.context + 'users/followers/' + user.userId, {
//             credentials: 'include'
//         });
        
//     }
    
//     getReimbursementsByStatus = async (status: ReimbursementStatus) => {
//         const resp = await fetch(environment.context + '/reimb/reimb/' + status.statusId, {
//             credentials: 'include'
//         });
//         const reimbsFromServer = await resp.json();
//         this.setState({
//             reimbs: reimbsFromServer,
//             statusDropdown: {
//                 ...this.state.statusDropdown,
//                 selection: status.status
//             }
//         })
//     }

//     render() {
//         const followers = this.state.followers;
//         return(
//             <div id="reimb-table-container">
//                 <table className="table table-striped table-dark">
//                     <thead>
//                         <tr>
//                             <th scope="col">ID</th>
//                             <th scope="col">Author</th>
//                             <th scope="col">Amount</th>
//                             <th scope="col">Type</th>
//                             <th scope="col">Date Submitted</th>
//                             <th scope="col">Resolver</th>
//                             <th scope="col">Status</th>
//                             <th scope="col">Date Resolved</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             reimbs.map(reimb =>
//                                 <tr key={'reimbursementId-'+reimb.reimbursementid}>
//                                     <td>{reimb.reimbursementid}</td>
//                                     <td>{reimb.author.firstName}</td>
//                                     <td>{reimb.amount}</td>
//                                     <td>{reimb.type.type}</td>
//                                     <td>{reimb.dateSubmitted}</td>
//                                     <td>{reimb.resolver.firstName}</td>
//                                     <td>{reimb.status.status}</td>
//                                     <td>{reimb.dateResolved}</td>
//                                 </tr>
//                                 )
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }