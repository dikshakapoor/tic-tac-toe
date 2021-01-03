import React, {Component} from 'react';

import Status from './Components/Status';
import SecondPlayer from './Components/SecondPlayer';

import './app.css';
class App extends Component {

  constructor(props){
    super(props)
    this.state={
      secondPlayer: {
      name: undefined,
      value: undefined,
      isWinner : false},     
      firstPlayer: {
      name: "user",
      value: undefined,
      isWinner: false,
      },
      currentPlayer: null,
      board : Array(9).fill(null), 
    }
  }

  checkMatch(winLines){
    for (let index = 0; index < winLines.length; index++){
      const [firstWinningIndex, secondWinningIndex, thirdWinningIndex] = winLines[index];
      const {board,firstPlayer , secondPlayer} = this.state;
      if (board[firstWinningIndex]&& board[secondWinningIndex] && board[thirdWinningIndex] && board[firstWinningIndex] === board[secondWinningIndex] && board[firstWinningIndex] === board[thirdWinningIndex]){
         if( firstPlayer.value === board[firstWinningIndex] ){
        return this.setState({
          firstPlayer: {...firstPlayer, isWinner: true}
       })
         }
        return this.setState({
           secondPlayer: {...secondPlayer, isWinner: true}
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
    const {firstPlayer, secondPlayer, board , currentPlayer} = this.state;
    if (board[index] === null && !firstPlayer.isWinner && !secondPlayer.isWinner ){  
      board[index] = currentPlayer.value;     
      const newPlayer = currentPlayer.value === firstPlayer.value ? secondPlayer: firstPlayer;  
      this.setState({
        board:[...board],
        currentPlayer: newPlayer,
    })
      this.checkWinner();
  if(secondPlayer.name === "computer" && currentPlayer.name !== "computer" && !firstPlayer.isWinner) { 
    const emptyIndex = [];
    board.map((box, index) => {
      if (box === null) 
     return emptyIndex.push(index);
     return null})
     const randomItem = emptyIndex[Math.floor(Math.random()* emptyIndex.length)];
     board[randomItem] = secondPlayer.value;
     this.setState({
      board:[...board],
     currentPlayer: firstPlayer,
    })
  }
}
}

setPlayerOption(value){
  const {firstPlayer, secondPlayer} = this.state;
  const secondPlayerValue = value === "X"? "O":"X";
  this.setState({firstPlayer: {
    ...firstPlayer,
    value
  },
  secondPlayer: {
    ...secondPlayer,
    value: secondPlayerValue,
  },
  currentPlayer: {
      ...firstPlayer,
      value
  }
})
}

  renderBoxes() {
    const {board} = this.state;
    return board.map((box,index) => <div className="box" key={index} onClick={() => this.handleBoxClick(index)}>{box}</div>)
  }

  handleSecondPlayer(selectedSecondPlayer){
    this.setState({
    secondPlayer: {
      name: selectedSecondPlayer
    }})
  }

  handleReset(){
    this.setState({ 
    secondPlayer: {
    name: undefined,
    value: undefined,
   isWinner : false
 },     
    firstPlayer: {
    name: "user",
    value: undefined,
    isWinner: false,
  },
  currentPlayer: null,
  board : Array(9).fill(null),})
}

  render(){
    const {firstPlayer, secondPlayer ,currentPlayer, board} = this.state;
  const {value : secondPlayerValue, name : secondPlayerName} = secondPlayer ||{};
  return(
    <div className="container">
    <h1>Tic tac toe App</h1>
     { !secondPlayerName && <SecondPlayer handleSecondPlayer={(selectedSecondPlayer) =>this.handleSecondPlayer(selectedSecondPlayer)}/>}
    {secondPlayerName && <Status currentPlayer={currentPlayer} firstPlayer={firstPlayer} secondPlayer={secondPlayer} setPlayerOption={(value)=> this.setPlayerOption(value)}/>}
    <div className="board">
    {secondPlayerValue && this.renderBoxes()}
    </div>
    {(firstPlayer.isWinner || secondPlayer.isWinner|| !board.includes(null) ) && <button onClick={() => this.handleReset()}>Press to reset game</button>}
    </div>
  )
}
}

export default App;
