import React, {Component} from 'react';

import {SECOND_PLAYER_OPTIONS} from '../app.constants';
import '../App.css';

/* this file is for selecting second player : computer or friend by user */
class SecondPlayer extends Component {
 handleSelectedSecondPlayer(event){
  const selectedSecondPlayer = event.target.id;
  const {handleSecondPlayer} = this.props;
  handleSecondPlayer(selectedSecondPlayer);
}

 render(){
  return (
  <>
  <div className="label">
    <h1 class="xLabel">X</h1>
    <h1 class="oLabel">O</h1>
  </div>
   <p class="text">Choose your player mode</p>
    <div className="player">
    <button type='button' class='button' id={SECOND_PLAYER_OPTIONS.FRIEND} onClick={(e)=>this.handleSelectedSecondPlayer(e)}>{SECOND_PLAYER_OPTIONS.FRIEND}</button>
    <button type='button' class='button' id={SECOND_PLAYER_OPTIONS.COMPUTER} onClick={(e)=>this.handleSelectedSecondPlayer(e)}>{SECOND_PLAYER_OPTIONS.COMPUTER}</button>
  </div>
 </>)
}
};

export default SecondPlayer;