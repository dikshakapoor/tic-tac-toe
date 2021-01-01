import React, {Component} from 'react';

import Status from './Components/Status';

import './app.css';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      board : Array(9).fill(null),
      player: null,
      winner : null,
    }
  }

  checkMatch(winLines){
    for (let index = 0; index < winLines.length; index++){
      const [firstWinningIndex, secondWinningIndex, thirdWinningIndex] = winLines[index];
      const {board, player} = this.state;
      if (board[firstWinningIndex]&& board[secondWinningIndex] && board[thirdWinningIndex] && board[firstWinningIndex] === board[secondWinningIndex] && board[firstWinningIndex] === board[thirdWinningIndex]){ //board[firstWinningIndex] &&  board[secondWinningIndex] &&  board[thirdWinningIndex]
        alert("you won")
        this.setState({
          winner: player
      })
    }
  }
  }

  checkWinner(){
    const winLines = [
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"],
    ];
    
    this.checkMatch(winLines);
  };
  handleBoxClick(index){
    const {board, player, winner} = this.state;
    debugger;
    if (board[index] === null && !winner && player){      
     board[index] = player;
     const newPlayer = player === "X" ? "O":"X"
    this.setState({
      board:[...board],
      player : newPlayer,
    })
  }
  this.checkWinner()
  }

  setPlayer(player){
  this.setState({player})
  }

  renderBoxes() {
    const {board} = this.state;
    return board.map((box,index) => <div className="box" key={index} onClick={() => this.handleBoxClick(index)}>{box}</div>)
  }

  handleReset(){
    this.setState({
      board : Array(9).fill(null),
      player: null,
      winner : null,
    })
  }

  render(){
  const { player,winner} = this.state;
 
  return(
    <div className="container">
    <h1>Tic tac toe App</h1>
    <Status player={player} winner={winner} setPlayer={(player)=> this.setPlayer(player)}/>
    <div className="board">
    { this.renderBoxes()}
    </div>
    <button disabled={!winner} onClick={()=> this.handleReset()}>Reset</button>
    </div>
  )
}
}//

export default App;
