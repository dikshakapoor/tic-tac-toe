import React, {Component} from 'react';

import {SECOND_PLAYER_OPTIONS} from '../app.constants';
class SecondPlayer extends Component {
 handleSelectedSecondPlayer(event){
  const selectedSecondPlayer = event.target.value;
  const {handleSecondPlayer} = this.props;
  handleSecondPlayer(selectedSecondPlayer);
}

 render(){
  return (
  <>
   <p>Choose Second Player</p>
    <div>
    <label>{SECOND_PLAYER_OPTIONS.FRIEND} </label>
    <input type="radio" value= {SECOND_PLAYER_OPTIONS.FRIEND} onClick={(e)=>this.handleSelectedSecondPlayer(e)}/> 
    <label>{SECOND_PLAYER_OPTIONS.COMPUTER} </label>
    <input type="radio" value = {SECOND_PLAYER_OPTIONS.COMPUTER} onClick={(e)=>this.handleSelectedSecondPlayer(e)}/>
  </div>
 </>)
}
};

export default SecondPlayer;