import { Role } from './role';

export default class UserReimb {
    constructor(
        public userId = 0,
        public username = '',
        public pass = '',
        public firstName = '',
        public lastName = '',
        public email = '',
        public role: Role
    ) {}
}