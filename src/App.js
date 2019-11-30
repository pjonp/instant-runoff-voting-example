import React, { Component } from 'react';
import Ballot from  './components/ballot';
import Results from  './components/results';
import randomVotes from './script/randomVotes';
import calculateVotes from './script/calculateVotes';
const inputData = require('./data/optionsData');

let touchX = 0

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      userVote: [],
      votechange: false,
      allVotes: [],
      finalResults: [],
      round: 0,
      maxRounds: 0,
      roundVisual: 3,
    };
   this.pressKey = this.pressKey.bind(this);
   this.touchStart = this.touchStart.bind(this);
   this.touchEnd = this.touchEnd.bind(this);
   this.clickBubble = this.clickBubble.bind(this);
   this.clickName = this.clickName.bind(this);
   this.submitBallot = this.submitBallot.bind(this);
   this.undoBallot = this.undoBallot.bind(this);
   this.clearBallot = this.clearBallot.bind(this);
   this.moveForward = this.moveForward.bind(this);
   this.moveBack = this.moveBack.bind(this);
   this.moveHome = this.moveHome.bind(this);
 }
  componentDidMount() {
    document.addEventListener('keydown', this.pressKey);
    document.addEventListener('touchstart', this.touchStart);
    document.addEventListener('touchend', this.touchEnd);
 }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressKey);
    document.addEventListener('touchstart', this.touchStart);
    document.addEventListener('touchend', this.touchEnd);
 }

  pressKey(button) {
    return button.keyCode === 37 && this.state.round > 0 ? this.moveBack()
            : button.keyCode === 39 && this.state.round === 0 ? this.submitBallot()
            : button.keyCode === 39 && this.state.round < this.state.maxRounds ? this.moveForward()
            : null;
   }

  touchStart(e){
     touchX = e.changedTouches[0].clientX
   }
  touchEnd(e){
    let touchDelta = e.changedTouches[0].clientX-touchX;
    let minDelta = 75;
     console.log('touch end',touchDelta)
     return touchDelta > minDelta && this.state.round > 0 ? this.moveBack()
             : touchDelta < -minDelta && this.state.round === 0 ? this.submitBallot()
             : touchDelta < -minDelta && this.state.round < this.state.maxRounds ? this.moveForward()
             : null;

   }

 clickBubble(input){
   let coords =  input.target.id.split(',')
   coords =[parseInt(coords[0]),parseInt(coords[1])]
   let currentVote = [...this.state.userVote]
   if(currentVote[coords[0]]) {
       if(currentVote.length - 1 === coords[0] && currentVote[coords[0]][1] === coords[1]) {
       currentVote.pop()
     }
      else currentVote[coords[0]] = coords
   }
   else currentVote.push(coords)

  this.setState({
    userVote: currentVote,
    votechange: true,
     });
 }

 clickName(input){
   let currentVote = [...this.state.userVote]
   let coords = [currentVote.length, parseInt(input.target.id)]

    if(coords[0] > 0 && currentVote[coords[0]-1][1] === coords[1]) { currentVote.pop() }
    else if(currentVote.some(i => i[1] === coords[1])){ return 'already voted for' }
    else{ currentVote.push(coords) }

   this.setState({
     userVote: currentVote,
     votechange: true,
      });
    }

 clearBallot(){
   this.setState({
     userVote: [],
     votechange: true,
     allVotes: [],
     finalResults: [],
     maxRounds: 0,
   });

 }
 undoBallot(){
   let currentVote = [...this.state.userVote]
   currentVote.pop()
   this.setState({
     userVote: currentVote,
     votechange: true,
   })
  };

 submitBallot(){
   if(!this.state.allVotes[0]){  //if votes already counted, skip
     let userVotes = this.state.userVote.map(i => i[1])

//make 99 votes
  let makeVotes = []
  let randVote = inputData.map(i => {
     let popularityArr = []
     for(let j = 0; j < i.popularity; j++){
         popularityArr.push(i.id)
       }
    return (
        popularityArr
       )});

  for(let i = 0; i < 99; i++){
       makeVotes.push(randomVotes(randVote.flat(), inputData.length))
        }
//end collusion

      makeVotes.push(userVotes)
      calculateVotes(makeVotes, 1,(result, round) =>{
        this.setState({
        allVotes: makeVotes,
        votechange: false,
        finalResults: result,
        maxRounds: round,
          });
        })
  }
  else if(this.state.votechange){
    let updateVote = [...this.state.allVotes]
    let userVotes = this.state.userVote.map(i => i[1])
    updateVote.pop()
    updateVote.push(userVotes)
    calculateVotes(updateVote, 1,(result, round) =>{
      this.setState({
      allVotes: updateVote,
      votechange: false,
      finalResults: result,
      maxRounds: round,
        });
    })
  }
    this.moveForward()
 }

 moveForward(){
   let progress = this.state.round
   let visual = this.state.roundVisual
   visual < 3 ? progress+=0 : progress+=1
   visual < 3 ? visual += 1 : visual = 1
   this.setState({
     round: progress,
     roundVisual: visual,
   });
 }
 moveBack(){
   let progress = this.state.round
   let visual = this.state.roundVisual
   visual > 1 ? progress-=0 : progress-=1
   visual > 1 ? visual -= 1 : visual = 3
   this.setState({
     round: progress,
     roundVisual: visual,
   });
 }
 moveHome(){
   this.setState({
     round: 0,
     roundVisual: 3,
   });
 }

  render(){
  return (

  <div className="App">
    <div id='contentContainer' className='contentContainer'>
      { this.state.round === 0 && this.state.roundVisual === 3 &&  <Ballot clickBubble={this.clickBubble} clickName={this.clickName} submitBallot={this.submitBallot} undoBallot={this.undoBallot} clearBallot={this.clearBallot} currentVote={this.state.userVote} /> }
      { this.state.round > 0 &&  <Results round={this.state.round} roundVisual={this.state.roundVisual} maxRounds={this.state.maxRounds} moveBack={this.moveBack} moveForward={this.moveForward} moveHome={this.moveHome} finalResults={this.state.finalResults} userVote={this.state.userVote}/> }
    </div>
  </div>
  );
 }
}
