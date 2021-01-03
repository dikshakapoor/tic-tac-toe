import React, {Component} from 'react';

import Status from './Components/Status';
import SecondPlayer from './Components/SecondPlayer';
import { WINNING_COMBINATION, PLAYING_OPTIONS, SECOND_PLAYER_OPTIONS ,USER_COSTANT } from './app.constants.js';

import './app.css';

/*assumptions :
1. user will have choice to select the options ('X' or 'Y')
2. second user can be a friend or computer, incase its computer the selection of boxes will be random(from any empty box)
3. the game can be reset only when all board boxes are filled
*/
class App extends Component {

  constructor(props){ // initializing players
    super(props)
    this.state={
      secondPlayer: {
       name: undefined,
       option: undefined,
       isWinner : false},     
      firstPlayer: {
       name: USER_COSTANT,
       option: undefined,
       isWinner: false,
      },
      currentPlayer: null,
      board : Array(9).fill(null), 
    }
  }

  checkWinner(){ // this function is used to match winning combination and incase condition is matched sets constant isWinner 
    for (let index = 0; index < WINNING_COMBINATION.length; index++){
      const [firstWinningIndex, secondWinningIndex, thirdWinningIndex] = WINNING_COMBINATION[index];
      const {board,firstPlayer , secondPlayer} = this.state;
      if (board[firstWinningIndex]&& board[secondWinningIndex] && board[thirdWinningIndex] && board[firstWinningIndex] === board[secondWinningIndex] && board[firstWinningIndex] === board[thirdWinningIndex]){
         if( firstPlayer.option === board[firstWinningIndex] ){
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

  handleBoxClick(index){ //sets the player option in board array
    const {firstPlayer, secondPlayer, board , currentPlayer} = this.state;
    if (board[index] === null && !firstPlayer.isWinner && !secondPlayer.isWinner ){  
      board[index] = currentPlayer.option;     
      const newPlayer = currentPlayer.option === firstPlayer.option ? secondPlayer: firstPlayer;  
      this.setState({
        board:[...board],
        currentPlayer: newPlayer,
    })
      this.checkWinner();
  if(secondPlayer.name === SECOND_PLAYER_OPTIONS.COMPUTER && currentPlayer.name !== SECOND_PLAYER_OPTIONS.COMPUTER && !firstPlayer.isWinner) { 
    const emptyIndex = [];
    board.map((box, index) => {
      if (box === null) 
     return emptyIndex.push(index);
     return null})
     const randomItem = emptyIndex[Math.floor(Math.random()* emptyIndex.length)];
     board[randomItem] = secondPlayer.option;
     this.setState({
      board:[...board],
     currentPlayer: firstPlayer,
    })
  }
}
}

setPlayerOption(option){ // set the options for players
  const {firstPlayer, secondPlayer} = this.state;
  const secondPlayerValue = option === PLAYING_OPTIONS.X ? PLAYING_OPTIONS.O : PLAYING_OPTIONS.X;
  this.setState({firstPlayer: {
    ...firstPlayer,
    option
  },
  secondPlayer: {
    ...secondPlayer,
    option: secondPlayerValue,
  },
  currentPlayer: {
      ...firstPlayer,
      option
  }
})
}

 renderBoxes() {
    const {board} = this.state;
    return board.map((box,index) => <div className="box" key={index} onClick={() => this.handleBoxClick(index)}>{box}</div>)
  }

  setSecondPlayer(selectedSecondPlayer){ //sets the second player
    this.setState({
    secondPlayer: {
      name: selectedSecondPlayer
    }})
  }

  handleReset(){ // this gives functionality to reset in case a game is finished 
    this.setState({ 
    secondPlayer: {
    name: undefined,
    option: undefined,
   isWinner : false
 },     
    firstPlayer: {
    name: "user",
    option: undefined,
    isWinner: false,
  },
  currentPlayer: null,
  board : Array(9).fill(null),})
}

  render(){
    const {firstPlayer, secondPlayer ,currentPlayer, board} = this.state;
  const {option : secondPlayerValue, name : secondPlayerName} = secondPlayer ||{};
  return(
    <div className="container">
    <h1>Tic Tac Toe App</h1>
     { !secondPlayerName && <SecondPlayer handleSecondPlayer={(selectedSecondPlayer) =>this.setSecondPlayer(selectedSecondPlayer)}/>}
    {secondPlayerName && <Status currentPlayer={currentPlayer} firstPlayer={firstPlayer} secondPlayer={secondPlayer} board= {board} setPlayerOption={(option)=> this.setPlayerOption(option)}/>}
    <div className="board">
    {secondPlayerValue && this.renderBoxes()}
    </div>
    {(firstPlayer.isWinner || secondPlayer.isWinner|| !board.includes(null) ) && <button onClick={() => this.handleReset()} className="resetButton">Press to reset game</button>}
    </div>
  )
}
}

export default App;
