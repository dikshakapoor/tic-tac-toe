import React, {Component} from 'react';

class SecondPlayer extends Component {
handleSelectedSecondPlayer(event){
  const selectedSecondPlayer = event.target.value;
  const {handleSecondPlayer} = this.props;
  handleSecondPlayer(selectedSecondPlayer);
}

render(){

return (<>
<p>Choose Player</p>
 <div>
   <label>Friend</label>
     <input type="radio" name = "secondPlayer" value="friend" onClick={(e)=>this.handleSelectedSecondPlayer(e)}/> 
   <label>Computer</label>
     <input type="radio" name = "secondPlayer" value = "computer" onClick={(e)=>this.handleSelectedSecondPlayer(e)}/>
 </div>
</>)
}
};

export default SecondPlayer;