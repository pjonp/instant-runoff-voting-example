
let voteResult = []
let eliminated = []

export default function calculateVotes(votes, round, callback){

votingRounds(votes, round, (result, round) => {
  voteResult = [] //empty arrays for vote changes
  eliminated = []
 callback(result, round)
 return;
})
}


function votingRounds(votes, round, callback) {
  let choiceResult =[]
  let roundResult = []
  let nextChoice = []
  //SLOW
    if(round === 1) {
      choiceResult = votes.map(i =>{
        nextChoice.push([i[0], i])
        return i[0]
      })
    }
    else{
          //check for eliminated
          choiceResult = votes.map(i => {
              for(let j = 0; j < i.length; j++){
                if(eliminated.map( k => k[0]).indexOf(i[j]) === -1){
                  nextChoice.push([i[j], i])
                  return i[j]
                }
              }
            return null
            })
          }

    choiceResult.sort()

    //SLOW change to MAP? was forEach
    choiceResult.map(i =>{
      if(!i) return null
      if(roundResult.findIndex(j => { return j.id === i}) === -1){
        let numOfVotes = choiceResult.lastIndexOf(i) - choiceResult.indexOf(i) + 1
        let obj = {
          round: round,
          id: i,
          votes: numOfVotes,
      //    eliminated: 0
        }
        roundResult.push(obj)
        return null
      }
      return null
    });

    roundResult.sort( (i,j) => { return j.votes - i.votes })
    let remaining = roundResult.length

    //add eliminated back inspect
    for(let i=0; i < eliminated.length; i++){
      let obj = {
        round: round,
        id: eliminated[i][0],
        votes: 0,
        eliminated: eliminated[i][1]
      }
      roundResult.push(obj)

    }
    //check winner
    if(roundResult[0].votes > votes.length/2  || remaining === 1){
      roundResult[0].winner = true

      if(roundResult[1]) {
        roundResult[1].eliminated = round
      }
      voteResult.push(roundResult)
      console.log('WINNER')
      callback(voteResult, round);
      return;
    }
    else if(remaining === 2 && roundResult[0].votes === roundResult[1].votes){
      roundResult[0].tie = true
      roundResult[1].tie = true
      voteResult.push(roundResult)
      console.log('TIE!')
      callback(voteResult, round);
      return;
    }
    else{
      for(let i = remaining - 1; i > 0; i-- ){
        if( remaining > 1 && roundResult[remaining-1].votes === roundResult[i].votes ){
          roundResult[i].eliminated = round
          eliminated.unshift([roundResult[i].id, round])
        }
      }
      for(let i = remaining - 1; i > 0; i-- ){
        //SLOW
        let eliminatedChoices = [...eliminated]
        if( remaining > 1 && roundResult[remaining-1].votes === roundResult[i].votes ){

          let findNextChoices = nextChoice.filter(j => j[0] === roundResult[i].id)
          .map(j => {
              for(let k = 0; k < j[1].length; k++){
                if(eliminatedChoices.map( l => l[0]).indexOf(j[1][k]) === -1){
                  return j[1][k]
                }
              }
            return null
          }).sort()
          let nextChoiceList = []
          findNextChoices.map(i =>{
            if(!i) return null
            if(nextChoiceList.findIndex(j => { return j.id === i}) === -1){
              let numOfVotes = findNextChoices.lastIndexOf(i) - findNextChoices.indexOf(i) + 1
              let obj = {
                id: i,
                nextvotes: numOfVotes,
              }
              nextChoiceList.push(obj)
              return null
            }
            return null
          });

          roundResult[i].nextChoice = nextChoiceList
        }
      }



    }


    voteResult.push(roundResult)

    if(round === 10) {
    console.log('something went wrong, too many rounds...')
    callback(voteResult,round);
    return;

   }
   votingRounds(votes, round+1, callback)

}
