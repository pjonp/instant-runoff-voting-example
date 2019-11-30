import React, { Component } from 'react'
let inputData = require('../data/optionsData')
let getNumber = require('../data/numbersData')

export default class Results extends Component {
  render(){
  let userVotes = this.props.userVote
  let finalResults = this.props.finalResults
  let round = this.props.round
  let roundVisual = this.props.roundVisual

  let userVotesDisplay = userVotes.length > 0
    ? userVotes.map((d,i) => {
    let statusStyle = {
      backgroundColor: inputData.filter(j => j.id === d[1])[0].color,
      maxWidth: 95/userVotes.length+'%',
      width: 25+'%',
      fontSize: userVotes.length < 6 ? 14+'px' : 12+'px',
    }
  let isElimanted = () => {
    if(finalResults[round-1].filter( i => i.id === d[1])[0].eliminated > 0){
      return null
    } else return 'none'
  }

    return (
      <div className='userVote' key={i+'option'} style={ statusStyle }>
        <div className='userVoteName'><p>{inputData.filter(j => { return j.id === d[1] })[0].name}</p></div>
        <div className='userVoteNum'><p>{getNumber[i]['num']}</p></div>
        <div className='userVoteHide' style={ {display: isElimanted() } }>
          <p className='userVoteHideX' id="x">X</p>
       </div>
      </div> )
})
  :
  <div className='userVote' style={ {padding: '3px'} }>
    <div className='userVoteName'style={ {color: 'black', textShadow: 'none'} }><p>YOU DIDN'T</p></div>
    <div className='userVoteNum' style={ {color: 'black', textShadow: 'none'} }><p>VOTE</p></div>
  </div>

  let buildBar = (roundResult) => {
    let status = roundResult.winner ? 'WINS' : roundResult.tie ? 'TIE' : ''

    if(roundVisual === 3){ //round 3; update all bars
      let adders
      let eliminated = finalResults[round-1].map(i => { //dont filter b/c want id of vote giver
         if(i.nextChoice) {
            let ab = i.nextChoice.filter(j => j.id === roundResult.id)
            if(!ab[0]) return null
            adders = [i.id, ab[0].nextvotes]
            return (
              <div key={`${adders[0]}addto${roundResult.id}`} className='graphBar' style={ {width: adders[1]+'%', backgroundColor: inputData.filter(j => { return adders[0] === j.id })[0].color } }>
                <div className='graphBarVotes'>{adders[1]}</div>
              </div>
            )
         }
         return null
      })
      if(roundResult.eliminated !== round) {  //round 3 send remaining
        return(
          <>
            <div id={`${roundResult.id}bar`} className='graphBar' style={ {width: roundResult.votes+'%', backgroundColor: inputData.filter(j => { return roundResult.id === j.id })[0].color} }>
              <div className='graphBarVotes'>{roundResult.votes}</div>
            </div>
            {eliminated}
        </>
          )
        } else { //round 3 remove bar for eliminated
          return(
            <div id={`${roundResult.id}bar`} className='graphBar' style={ {width: 55+'%', margin: 'auto', backgroundColor: inputData.filter(j => { return roundResult.id === j.id })[0].color} }>
              <div className='graphBarVotes'>{ `${roundResult.votes} votes moved to next choice`}</div>
            </div>
          )
        }
    } else if(roundVisual === 1 || roundResult.eliminated !== round) { // round 1 + 2, don't alter for round 2 if not eliminated
      return(
      <div key={`${roundResult.id}bar`} id={`${roundResult.id}bar`} className='graphBar' style={ {width: roundResult.votes+'%', backgroundColor: inputData.filter(j => { return roundResult.id === j.id })[0].color} }>
        <div className='graphBarVotes'>{ `${roundResult.votes} ${status}` }</div>
      </div>
    )
  } else { // update round 2 eliminateds bars
      let addBars = roundResult.nextChoice.map(i => {
          return (
    <div key={`${roundResult.id}${i.id} bar`} id={`${roundResult.id}nextvote${i.id}`} className='graphBar' style={ {width: i.nextvotes+'%', backgroundColor: inputData.filter(j => { return i.id === j.id })[0].color} }>
      <div className='graphBarVotes'>{i.nextvotes}</div>
    </div>
      )
    })
    return addBars
  }

}

let results = finalResults[round-1].map( i => {
  return(
    <div className='containerRow' key={'result'+i.id}>
      <div className='ballotChoiceNameBox' style={ {backgroundColor: 'white', border: 0, borderRight: '3px solid black'} }>
        <p className='ballotChoiceName' style={{backgroundColor: `${inputData.filter(j => { return i.id === j.id})[0].color}`}}>{inputData.filter(j => { return i.id === j.id })[0].name}</p>
      </div>
        {buildBar(i)}
    </div>
  )
})

let display = () => {

  let eliminatedIds = finalResults[round-1].filter( i => { return i.eliminated === round }).map(i => i.id)
  let eliminatedNames = eliminatedIds.map( i => { return inputData.filter(j => { return i === j.id}) }).map( i => { return i[0].name })
  if(eliminatedNames.length > 1){
    eliminatedNames = eliminatedNames.join(' & ')
  }

  let findWinner = finalResults[round-1].filter( i => { return i.winner })
  let findTies = finalResults[round-1].filter( i => { return i.tie })

  if(findWinner[0]) {
    return `${inputData.filter(i => { return i.id === findWinner[0].id})[0].name } WINS!`
  }
  if(findTies[0]) {
    return `${inputData.filter(i => { return i.id === findTies[0].id})[0].name} & ${inputData.filter(i => { return i.id === findTies[1].id})[0].name} TIE!`
  }

  if(roundVisual === 1) return `${eliminatedNames} Eliminated This Round`
  if(roundVisual === 2) return `Next Choice Votes for ${eliminatedNames}`
  return `${eliminatedNames} Votes Moved`
  }

    return (
      <div id='resultsContainer'>
          <div className='contentTitle'>
            <h1>RANKED CHOICE VOTING EXAMPLE</h1>
          </div>

          <div className='contentInfo'>
            {userVotesDisplay}
          </div>

          <div className='contentData' id='results'>
            {results}
            <div className='resultsGoal' />
          </div>

          <div className='contentNav'>
            <h3 className='contentNavStatus'>{ display() }</h3>
            <div className='contentNavButtonContainer'>
              <span className='contentNavButton' onClick={this.props.moveBack}>BACK</span>
              <span className='contentNavButton' onClick={this.props.moveHome}>CHANGE YOUR VOTE</span>
              <span className='contentNavButton' onClick={this.props.moveForward} style={{zIndex: this.props.round < this.props.maxRounds ? '0' : '-1'}}>NEXT</span>
            </div>
          </div>

      </div>

    )
  };
};
