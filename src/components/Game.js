import React from 'react';
import Board from './Board'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Board></Board>
        );
    }
}

export default Game;