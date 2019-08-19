import React, { Component } from 'react';
import { environment } from '../../../environment';
import { Button } from 'reactstrap';

interface IState {
    favMovie: Number
}

export default class GetFavoriteMovie extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            favMovie: 0
        };
    }

    unfavoriteMovie = async (favMovieId: Number) => {
        this.setState({
            favMovie: favMovieId
        });
        const resp = await fetch(environment.context + '/users/favorites/' + '1'/*logged in user*/+'/movie/' + favMovieId,{
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
        });
    }
    render() {
        const pendings = this.state.favMovie;
        return(
            <Button className="btn btn-primary" type="button" 
                onClick={() => this.unfavoriteMovie(this.state.favMovie)}>
                    Unfavorite Movie
                    </Button>
        )
    }
}