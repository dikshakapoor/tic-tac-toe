import React, {Component} from 'react';

import Player from './Player';

class Status extends Component{
    handleSetPlayer(e){
        const {setPlayer} = this.props;
        setPlayer(e);
    }

    render() {
        const { firstPlayer, secondPlayer, currentPlayer} = this.props;
        if (firstPlayer.isWinner || secondPlayer.isWinner){
            const winnerPlayer = firstPlayer.isWinner? firstPlayer.name : secondPlayer.name;
         return <p> winner is {winnerPlayer} </p>
        }
        return !firstPlayer.value ? <Player setPlayer={(e)=>this.handleSetPlayer(e)}/> : <p>Next Player is {currentPlayer.name} </p> 
    }
}

export default Status;