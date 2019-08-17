import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { environment } from '../../../environment';
import { Recommendations } from '../../../models/recommendations';
import { User } from '../../../models/user';


interface IState {
    recomendations: Recommendations[][]
}

export default class GetRecommendations extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            recomendations: []
        };
    }

    async componentDidMount() {
        this.getRecommendations();
    };
    // /followers/{userId}
    getRecommendations = async () => {
        const resp = await fetch(environment.context + '/recs/receiver/' + '1'/*logged in user*/, {
            credentials: 'include'
        });
        const recomFromServer = await resp.json();
        this.setState({
            recomendations: recomFromServer
        });
        console.log(recomFromServer)
    }
    noThanks = async (movieId: Number) => {
        const resp = await fetch(environment.context + '/recs/receiver/' + '1'/*logged in user*/
            + '/movie/' + movieId, {
                method: 'DELETE',
                credentials: 'include'
        });
        const recomFromServer = await resp.json();
        this.setState({
            recomendations: recomFromServer
        });
    }
    favorite = async (movieId: Number) => {
        const resp = await fetch(environment.context + '/users/favorites/' + '1'/*logged in user*/ + 
        '/movie/' + movieId, {
            method: 'PUT',
            credentials: 'include'
        });
        const recomFromServer = await resp.json();
        this.setState({
            recomendations: recomFromServer
        });
        this.noThanks(movieId);
    }
    render() {
        const recoms = this.state.recomendations;
        return(
            <div id="reimb-table-container">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Sender Username</th>
                            <th scope="col">Movie Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recoms.map(recom =>
                                <tr key={'recomendationsId-'+recom[0].recommendationId}>
                                    <td>{recom[0].sender.username}</td>
                                    <td>{recom[0].movie.title}</td>
                                    <td><Button className="recommendationsId, btn btn-primary" type="button" onClick={() => this.favorite(recom[0].movie.movieId)}>
                                        Favorite
                                        </Button></td>
                                    <td><Button className="recommendationsId, btn btn-primary" type="button" onClick={() => this.noThanks(recom[0].movie.movieId)}>
                                        No Thanks
                                        </Button></td>
                                    
                                </tr>
                                // recom.map(rec => 
                                //     <tr key={'recomendationsId-'+rec.recommendationId}>
                                //     <td>{rec.movie}</td>
                                //     <td></td>
                                //     <td><Button className="recommendationsId, btn btn-primary" type="button" onClick={() => this.favorite(rec.movie.movieId)}>
                                //         Favorite
                                //         </Button></td>
                                //     <td><Button className="recommendationsId, btn btn-primary" type="button" onClick={() => this.noThanks(rec.movie.movieId)}>
                                //         No Thanks
                                //         </Button></td>
                                    
                                // </tr>
                                //     )
                                //<td></td>
                                // <tr key={'recomendationsId-'+recom}>
                                //     <td>{recom.sender}</td>
                                //     <td>{recom.movie}</td>
                                //     <td><Button className="recommendationsId, btn btn-primary" type="button" onClick={() => this.favorite(recom.movie.movieId)}>
                                //         Favorite
                                //         </Button></td>
                                //     <td><Button className="recommendationsId, btn btn-primary" type="button" onClick={() => this.noThanks(recom.movie.movieId)}>
                                //         No Thanks
                                //         </Button></td>
                                    
                                // </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}