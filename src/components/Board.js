import React from 'react';
import Square from './Square/Square';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Square></Square>
        );
    }
}

export default Board;