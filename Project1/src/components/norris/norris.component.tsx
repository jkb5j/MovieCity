import React from 'react';
import { Button } from 'reactstrap';

interface IState {
    norris: any;
}

export class Norris extends React.Component<{}, IState> {

    constructor(props: any){
        super(props);
        this.state = {
            norris: null
        }
    }

    findNewJoke = async () => {
        const norrisUrl = 'http://api.icndb.com/jokes/random';
        const resp = await fetch(norrisUrl);
        const norris = await resp.json();
        this.setState({
            norris
        });
    }
    render() {
        return (
            <div>
                <h1>Joke: {this.state.norris && this.state.norris.value.joke}</h1>
                <br/>
                <Button color="success" onClick={this.findNewJoke}>Joke Button</Button>
            </div>

        );
    }
}