import Reimbursement from '../models/reimbursement';
import { ReimbursementStatus } from '../models/reimb.status';
import { ReimbursementType } from '../models/reimb.type';
import UserReimb from '../models/user.reimb';

export function reimbConverter(row) {

    return new Reimbursement(row.reimbursementid, new UserReimb(row.auserid, row.ausername,
        row.apass, row.afirstname, row.alastname, row.aemail, row.apositionid), row.amount,
        row.datesubmitted, row.dateresolved, new UserReimb(row.ruserid, row.rusername, row.rpass,
        row.rfirstname, row.rlastname, row.remail, row.rpositionid),
        new ReimbursementStatus(row.reimbstatusid, row.reimbstatus),
        new ReimbursementType (row.reimbtypeid, row.reimbtype));
}