import { User } from "./user";
import { Movie } from "./movie";

export class Recommendations {
    constructor(
        public recommendationId = 0,
        public receiver: User,
        public sender: User,
        public movie: Movie
    ) {}
}