import { Movie } from "./movie";
import { User } from "./user";

export class Favorites {
    constructor(
        public movieId: Movie,
        public userId: User
    ) {}
}