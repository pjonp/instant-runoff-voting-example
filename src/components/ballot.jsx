import React, { Component } from 'react'
let inputData = require('../data/optionsData')
let getNumber = require('../data/numbersData')

export default class Ballot extends Component {
  render(){
    let infoOrder = inputData.map((d,i) => {
      return (
        <div className='ballotInfoOrder' key={i+'option'} style={{'width': 100/inputData.length+'%'}}>
          <div className='ballotInfoOrderName'><p>{getNumber[i]['name']}</p></div>
          <div className='ballotInfoOrderNumber'><p>{getNumber[i]['num']}</p></div>
        </div> )
    })

    let ballotChoices = inputData.map((data,i) => {

      let ballotChoicesBubbles = inputData.map((d,j) => {
        let cords = [j,data.id]

        let bubbleStyle = {
          'backgroundColor': this.props.currentVote.some(k => { return k[0] === cords[0] ? k[1] === cords[1] : false }) ? 'black' : `white`,
          'display':  this.props.currentVote.some(k => { return k[0] !== cords[0] && k[1] === cords[1] }) ? 'none' :
              this.props.currentVote.length < cords[0] ? 'none' : null,
        }
        let gridStyle = {
          'width': 100/inputData.length+'%',
          'backgroundColor': this.props.currentVote.some(k => { return k[0] === cords[0] ? true : k[1] === cords[1] }) ? `AliceBlue` :
          this.props.currentVote.length === cords[0] ? `MediumSeaGreen` : null
      }
        return (
          <div className='ballotChoicesBubblesBox' key={'bubble'+j+data.id} style={gridStyle}>
            <div id={cords} className='ballotChoicesBubble' onClick={this.props.clickBubble} style={bubbleStyle}/>
          </div>
                )
            })

      let nameStyle = {
        'backgroundColor': `${data.color}`,
            }

      return (
        <div className='containerRow' key={data.name}>
          <div className='ballotChoiceNameBox'>
            <p className='ballotChoiceName' style={ nameStyle } onClick={this.props.clickName} id={`${data.id}clickName`}>{data.name}</p>
          </div>
          {ballotChoicesBubbles}
        </div>
              )
    })

    return(

    <div id='ballotContainer'>
        <div className='contentTitle'>
          <h1>RANKED CHOICE VOTING EXAMPLE</h1>
        </div>

        <div className='contentInfo'>
          <div className='ballotInfoText'>
            <p>Rank up to 7 colors!</p>

          </div>
          <div className='ballotInfoOrderContatiner'>
          {infoOrder}
          </div>
        </div>

        <div className='contentData'>
          {ballotChoices}
        </div>

        <div className='contentNav'>
          <h3 className='contentNavStatus'>{this.props.currentVote.length < inputData.length ? `Make your ${getNumber[this.props.currentVote.length].num} Choice Or Press Submit!` : `Press Submit!` }</h3>
          <div className='contentNavButtonContainer'>
            <span className='contentNavButton' onClick={this.props.undoBallot}>UNDO</span>
            <span className='contentNavButton' onClick={this.props.clearBallot} style={{backgroundColor: "#fa3c92" }}>RESET ALL VOTES</span>
            <span className='contentNavButton' onClick={this.props.submitBallot}>SUBMIT</span>
          </div>
        </div>

    </div>
    );
  }
}
