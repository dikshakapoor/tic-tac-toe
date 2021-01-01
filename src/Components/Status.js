import React, {Component} from 'react';

import Player from './Player';

class Status extends Component{
    handleSetPlayer(e){
        const {setPlayer} = this.props;
        setPlayer(e);
    }

    handleReset(){

    }

    render() {
        const {player, winner} = this.props;
        if (winner){
         return <p> winner is winner {winner} </p>
        }
        return !player ? <Player setPlayer={(e)=>this.handleSetPlayer(e)}/> : <p>Next Player is {player} </p> 
    }
}

export default Status;