import React, { Component } from 'react';
import { Movie } from '../../../models/movie';
import { environment } from '../../../environment';

interface IState {
    movies: Movie[]
}

export default class FavMovies extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            movies: []
        };
    }

    async componentDidMount() {
        this.getFavMovies();
    };

    getFavMovies = async () => {
        //add the person who is logged in's user_id where the 1 is
        const resp = await fetch(environment.context + '/users/favorites/1/', {
            credentials: 'include'
        });
        const moviesFromServer = await resp.json();
        this.setState({
            movies: moviesFromServer,
        });
    }

    render() {
        const movies = this.state.movies;
        return(
            <div id="reimb-table-container">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Release Year</th>
                            <th scope="col">Origin</th>
                            <th scope="col">Director</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map(movie =>
                                <tr key={'movieId-'+movie.movieId}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.genre}</td>
                                    <td>{movie.releaseYear}</td>
                                    <td>{movie.origin}</td>
                                    <td>{movie.director}</td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}