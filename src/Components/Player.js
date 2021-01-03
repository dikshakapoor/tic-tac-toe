import React, {Component} from 'react';

class Player extends Component {

handleFormSubmit(e){
    e.preventDefault();
    console.log(e.target.player.value);
    const{setPlayer} = this.props;
    const selectedPlayerValue = e.target.player.value;
    setPlayer(selectedPlayerValue);
}

render() {
        return (<form onSubmit={(e)=>this.handleFormSubmit(e)} >
            <label>
                Player X
                <input type="radio" name="player" value="X"/>
            </label>
            <label>
                Player O
                <input type="radio" name="player" value="O"/>
            </label>
            <label>
                <input type="submit" value="Start"/>
            </label>
        </form>)
    }
};

export default Player;