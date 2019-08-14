import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Movie } from '../../../models/movie';
import { Genre } from '../../../models/genre';
import { environment } from '../../../environment';

interface IState {
    movies: Movie[],
    genre: Genre[],
    genreDropdown: {
        isOpen: boolean,
        selection: string
    }
}

export default class GetMovies extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            movies: [],
            genre: [],
            genreDropdown: {
                isOpen: false,
                selection: 'All Movies'
            }
        };
    }

    async componentDidMount() {
        this.getAllMovies();
        // this.getStatus();
    };

    getAllMovies = async () => {
        const resp = await fetch(environment.context + '/movies/', {
            credentials: 'include'
        });
        const moviesFromServer = await resp.json();
        this.setState({
            movies: moviesFromServer,
            // statusDropdown: {
            //     ...this.state.statusDropdown,
            //     selection: 'All'
            // }
        });
    }

    // getMyReimbursements = async () => {
    //     const resp = await fetch(environment.context + '/reimb/reimb/author/0', {
    //         credentials: 'include'
    //     });
    //     const reimbsFromServer = await resp.json();
    //     this.setState({
    //         reimbs: reimbsFromServer,
    //         statusDropdown: {
    //             ...this.state.statusDropdown,
    //             selection: 'My Reimbursements'
    //         }
    //     });
    // }

    // getStatus = async () => {
    //     const resp = await fetch(environment.context + '/reimb/status');
    //     const status = await resp.json();
    //     this.setState({
    //         status
    //     });
    //     console.log(status);
    // }

    // getReimbursementsByStatus = async (status: ReimbursementStatus) => {
    //     const resp = await fetch(environment.context + '/reimb/reimb/' + status.statusId, {
    //         credentials: 'include'
    //     });
    //     const reimbsFromServer = await resp.json();
    //     this.setState({
    //         reimbs: reimbsFromServer,
    //         statusDropdown: {
    //             ...this.state.statusDropdown,
    //             selection: status.status
    //         }
    //     })
    // }

    toggleGenreDropdown = () => {
        this.setState({
            genreDropdown: {
                ...this.state.genreDropdown,
                isOpen: !this.state.genreDropdown.isOpen
            }
        })
    }

    render() {
        const movies = this.state.movies;
        return(
            <div id="reimb-table-container">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col"><ButtonDropdown id="reimb-status-dropdown"
                    isOpen={this.state.genreDropdown.isOpen}
                    toggle={this.toggleGenreDropdown}>
                        <DropdownToggle caret>
                            {this.state.genreDropdown.selection}
                        </DropdownToggle>
                        <DropdownMenu right>
        <DropdownItem /*onClick={/*this.getMyReimbursements}*/>All Movies</DropdownItem>
                            <DropdownItem divider />
                            {
                                this.state.genre.map(genre => (
                                    <DropdownItem key={'status-dropdown-' + genre.genreId}
                                    /*onClick={() => this.getReimbursementsByStatus(status)}*/>
                                        {genre.genre}
                                    </DropdownItem>
                                ))
                            }
                        </DropdownMenu>
                    </ButtonDropdown></th>
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