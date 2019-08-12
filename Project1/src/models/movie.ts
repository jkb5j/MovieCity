import { Genre } from "./genre";

export class Movie {
    constructor(
        public movieId = 0,
        public title = '',
        public genre: Genre,
        public releaseYear = 0,
        public origin = '',
        public director = '',
        public plot = ''
    ) {}
}