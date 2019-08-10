import { User } from "./user";

export class Followers {
    constructor(
        public beingFollowed: User,
        public follower: User
    ) {}
}