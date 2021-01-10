import React, {Component} from 'react';
import '../App.css';
/* this file option selection 'X' or 'O' by user*/
class Player extends Component {

handleSelectedPlayerOption(e){
    const{setPlayer} = this.props;
    const selectedPlayerOption = e.target.value;
    setPlayer(selectedPlayerOption);
}

render() {
  return (
   <div>
    <label class="mainText"> Pick your side </label>
    <div class="players">
      <label>
        <h1 class="xLabel"> X </h1> 
         <input   className="input" type="radio" name="player" value="x" onClick = {(e)=>this.handleSelectedPlayerOption(e)}/>
      </label>
      <label>
        <h1 class="oLabel"> O </h1> 
          <input className="input" type="radio" name="player" value="o" onClick = {(e)=>this.handleSelectedPlayerOption(e)}/>
      </label>
    </div>
  </div>
        )
    }
};

export default Player;