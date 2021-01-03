import React, {Component} from 'react';

class Player extends Component {

handleSelectedPlayerOption(e){
    const{setPlayer} = this.props;
    const selectedPlayerOption = e.target.value;
    setPlayer(selectedPlayerOption);
}

render() {
        return (
        <div>
         <label> Pick one option: </label>
         <label>
            X
         <input type="radio" name="player" value="X" onClick = {(e)=>this.handleSelectedPlayerOption(e)}/>
         </label>
         <label>
           O
         <input type="radio" name="player" value="O" onClick = {(e)=>this.handleSelectedPlayerOption(e)}/>
         </label>
         </div>
        )
    }
};

export default Player;