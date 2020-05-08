import React from 'react';
import Board from './Board/Board'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            nextPlayer: "X",
            squares: Array(9).fill(null),
            winner: null,
            isDraw: false
        };
    }

    render() {
        return (
            <div>
                <h3>{this.getMessage()}</h3>
                <Board squares={this.state.squares} onClick={i => this.handleClick(i)}></Board>
            </div>
        );
    }

    getMessage() {
        if (this.state.isDraw)
            return <span>Gameover !! Game Drwan <button onClick={() => { this.restart() }}>Restart</button></span>
        if (this.state.winner)
            return <span>Gameover !! Winner {this.state.winner} <button onClick={() => { this.restart() }}>Restart</button></span>
        return <span> Next Player {this.state.nextPlayer}</span>
    }

    restart() {
        this.setState(
            this.getInitialState()
        )
    }

    handleClick(i) {
        if (this.state.winner || this.state.isDraw || this.state.squares[i]) {
            return;
        }
        const currentPlayer = this.state.nextPlayer;
        const nextPlayer = currentPlayer === "X" ? "O" : "X";

        const currentSquares = [...this.state.squares];
        currentSquares[i] = currentPlayer;

        let winner = this.calculateWinner(currentSquares);

        const isDraw = this.checkGameDraw(currentSquares);

        this.setState({
            squares: currentSquares,
            nextPlayer: nextPlayer,
            winner: winner,
            isDraw
        });
    }

    checkGameDraw(squares) {
        if (squares.findIndex(e => e === null) > -1) {
            return false;
        }
        else {
            return true;
        }
    }

    calculateWinner(squares) {
        const winnerLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winnerLines.length; i++) {
            const [a, b, c] = winnerLines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

}

export default Game;