import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Movie } from '../../../models/movie';
import { Genre } from '../../../models/genre';
import { environment } from '../../../environment';
import { Modal, Alert } from 'reactstrap';


interface IState {
    movies: Movie[],
    genre: Genre[],
    genreDropdown: {
        isOpen: boolean,
        selection: string
    },
    plotModalShow: boolean,
    titleModalShow: boolean,
    currentSelectedPlot?: string,
    currentSelectedTitle?:string,
    favMovie: Number
}

export default class GetMovies extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            movies: [],
            genre: [],
            genreDropdown: {
                isOpen: false,
                selection: 'All Movies',
            },
            plotModalShow: false,
            titleModalShow: false,
            favMovie: 0
        };
    }

    async componentDidMount() {
        this.getAllMovies();
        this.getGenre();
    };

    getAllMovies = async () => {
        const resp = await fetch(environment.context + '/movies/', {
            credentials: 'include'
        });
        const moviesFromServer = await resp.json();
        this.setState({
            movies: moviesFromServer,
            genreDropdown: {
                ...this.state.genreDropdown,
                selection: 'All'
            }
        });
    }

    getGenre = async () => {
        const resp = await fetch(environment.context + '/genres');
        const genre = await resp.json();
        this.setState({
            genre
        });
        console.log(genre);
    }

    getMoviesByGenre = async (genre: Genre) => {
        const resp = await fetch(environment.context + '/movies/filter/genre/' + genre.genreId, {
            credentials: 'include'
        });
        const moviesFromServer = await resp.json();
        this.setState({
            movies: moviesFromServer,
            genreDropdown: {
                ...this.state.genreDropdown,
                selection: genre.genre
            }
        })
    }

    toggleGenreDropdown = () => {
        this.setState({
            genreDropdown: {
                ...this.state.genreDropdown,
                isOpen: !this.state.genreDropdown.isOpen
            }
        })
    }

    togglePlotModalShow = () => {
        this.setState({
            plotModalShow: !this.state.plotModalShow
        })
    }

    selectPlot = (plot: string, title: string) => {
        this.setState({
            plotModalShow: true,
            currentSelectedPlot: plot,
            currentSelectedTitle:title
        })
    }
    favoriteMovie = async (favMovieId: Number) => {
        this.setState({
            favMovie: favMovieId
        });
        const resp = await fetch(environment.context + '/users/favorites/' + localStorage.getItem('userId') +'/movie/' + favMovieId,{
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
        });
    }


    render() {
        const movies = this.state.movies;
        return (
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
                                    <DropdownItem onClick={this.getAllMovies}>All Movies</DropdownItem>
                                    <DropdownItem divider />
                                    {
                                        this.state.genre.map(genre => (
                                            <DropdownItem key={'status-dropdown-' + genre.genreId}
                                                onClick={() => this.getMoviesByGenre(genre)}>
                                                {genre.genre}
                                            </DropdownItem>
                                        ))
                                    }
                                </DropdownMenu>
                            </ButtonDropdown></th>
                            <th scope="col">Release Year</th>
                            <th scope="col">Origin</th>
                            <th scope="col">Director</th>
                            <th scope="col">Veiw Plot</th>
                            <th scope="col">Favorite</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map(movie =>
                                <tr key={'movieId-' + movie.movieId}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.genre}</td>
                                    <td>{movie.releaseYear}</td>
                                    <td>{movie.origin}</td>
                                    <td>{movie.director}</td>
                                    <td><Button className="plot" type="button" class="btn btn-primary" onClick={() => this.selectPlot(movie.plot, movie.title)}>
                                        Plot
                                                </Button></td>
                                    <td>
                                    <Button className="btn btn-primary" type="button" 
                                        onClick={() => this.favoriteMovie(movie.movieId)}>
                                            Favorite Movie
                                            </Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <Modal isOpen={this.state.plotModalShow} toggle={this.togglePlotModalShow} >
                    <ModalHeader isOpen={this.state.plotModalShow} toggle={this.togglePlotModalShow}>{this.state.currentSelectedTitle}</ModalHeader>
                    <ModalBody>
                        {this.state.currentSelectedPlot}
          </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.togglePlotModalShow}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.togglePlotModalShow}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}