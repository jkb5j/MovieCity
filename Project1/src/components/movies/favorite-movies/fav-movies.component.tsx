import React, { Component } from 'react';
import { Movie } from '../../../models/movie';
import { environment } from '../../../environment';
import { Modal, Alert, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface IState {
    movies: Movie[]
    plotModalShow: boolean,
    titleModalShow: boolean,
    currentSelectedPlot?: string,
    currentSelectedTitle?:string
}

export default class FavMovies extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            movies: [],
            plotModalShow: false,
            titleModalShow: false
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