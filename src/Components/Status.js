import React, {Component} from 'react';

import PlayerOption from './PlayerOption';

class Status extends Component{
 handleSetPlayer(e){
  const {setPlayerOption} = this.props;
  setPlayerOption(e);
    }
 
 render() {
  const { firstPlayer, secondPlayer, currentPlayer, board} = this.props;
  if (firstPlayer.isWinner || secondPlayer.isWinner){
  const winnerPlayer = firstPlayer.isWinner? firstPlayer.name : secondPlayer.name;
  return <p> winner is {winnerPlayer} </p>
  }
  if (!board.includes(null)) return null;
  return !firstPlayer.option ? <PlayerOption setPlayer={(e)=>this.handleSetPlayer(e)}/> : <p>Next Player is {currentPlayer.name} </p> 
    }
}

export default Status;