import { User } from './user';

export class Pending {
    constructor(
        public pendingId = 0,
        public beingAsked: User,
        public asking: User,
        public status = 0
    ) {}
}