import { ReimbursementStatus } from './reimb.status';
import { ReimbursementType } from './reimb.type';
import UserReimb from './user.reimb';

export default class Reimbursement {
    constructor(
        public reimbursementid = 0,
        public author: UserReimb,
        public amount = 0,
        public dateSubmitted = '',
        public dateResolved = '',
        public resolver: UserReimb,
        public status: ReimbursementStatus,
        public type: ReimbursementType
    ) {}
}