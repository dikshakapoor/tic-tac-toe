import React, {Component} from 'react';

import PlayerOption from './PlayerOption';

/* this is for indicating the winner, next player in game and render PlayerOption*/
class Status extends Component{
 handleSetPlayer(e){
  const {setPlayerOption} = this.props;
  setPlayerOption(e);
}
 
 render() {
  const { firstPlayer, secondPlayer, currentPlayer, board} = this.props;
  if (firstPlayer.isWinner || secondPlayer.isWinner){
  const winnerPlayer = firstPlayer.isWinner? firstPlayer.name : secondPlayer.name;
  return <p> Winner is <b>{winnerPlayer}</b> </p>
  }
  if (!board.includes(null)) return null;
  return !firstPlayer.option ? <PlayerOption setPlayer={(e)=>this.handleSetPlayer(e)}/> : <p>Next Player is {currentPlayer.name} </p> 
    }
}

export default Status;