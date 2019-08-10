// import User from '../models/user';
import UserReimb from '../models/user.reimb';
import { Role } from '../models/role';

// export function convertSqlUser(row: any) {
//     return new User(row.user_id, row.username, '', row.email, row.first_name, row.last_name, row.phone, row.role);
// }

export function convertSqlUser(row) {
    return new UserReimb(row.userid, row.username, row.pass, row.firstname, row.lastname, row.email,
    new Role(row.positionid, row.positionname));
}