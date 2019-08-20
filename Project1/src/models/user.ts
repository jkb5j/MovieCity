import { Role } from "../models/role";

export class User {
    constructor(
        public userId = 0,
        public username = '',
        public password = '',
        public email = '',
        public firstName = '',
        public lastName = '',
        public roleId: Role
    ) {}
}