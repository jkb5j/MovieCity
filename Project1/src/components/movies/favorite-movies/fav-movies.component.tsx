import React, { Component } from 'react';
import { Movie } from '../../../models/movie';
import { environment } from '../../../environment';
import { Modal, Alert, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface IState {
    movies: Movie[]
    plotModalShow: boolean,
    titleModalShow: boolean,
    currentSelectedPlot?: string,
    currentSelectedTitle?:string,
    favMovie: Number
}

export default class FavMovies extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            movies: [],
            plotModalShow: false,
            titleModalShow: false,
            favMovie: 0
        };
    }

    async componentDidMount() {
        this.getFavMovies();
    };

    getFavMovies = async () => {
        const resp = await fetch(environment.context + '/users/favorites/' + localStorage.getItem('userId'), {
            credentials: 'include'
        });
        const moviesFromServer = await resp.json();
        this.setState({
            movies: moviesFromServer,
        });
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

    unfavoriteMovie = async (favMovieId: Number) => {
        this.setState({
            favMovie: favMovieId
        });
        const resp = await fetch(environment.context + '/users/favorites/' + localStorage.getItem('userId') +'/movie/' + favMovieId,{
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
        });
    }

    saveMovie = (movieId: Number) => {
        localStorage.setItem("movieId", ""+movieId);
        localStorage.setItem("display", "yes");
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
                            <th scope="col">Veiw Plot</th>
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
                                    <td><Button className="plot" type="button" class="btn btn-primary" onClick={() => this.selectPlot(movie.plot, movie.title)}>
                                        Plot
                                                </Button></td>
                                    <td>
                                    <Button className="btn btn-primary" type="button" 
                                        onClick={() => this.unfavoriteMovie(movie.movieId)}>
                                            Unfavorite Movie
                                            </Button>
                                    </td>
                                    <td>
                                    <Button className="btn btn-primary" type="button" 
                                        onClick={() => this.saveMovie(movie.movieId)}>
                                            Recommend Movie
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