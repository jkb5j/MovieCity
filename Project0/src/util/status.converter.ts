import { ReimbursementStatus } from '../models/reimb.status';


export function statusConverter(row) {
    return new ReimbursementStatus(row.reimbstatusid, row.reimbstatus);
}