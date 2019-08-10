import { User } from "./user";

export class Friends {
    constructor(
        public myUser: User,
        public otherUser: User
    ) {}
}