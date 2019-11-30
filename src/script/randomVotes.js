export default function randomVotes(input, length){
  let randVote = [...input]

  for(let i = randVote.length-1; i >= 0; i--){
     let getRandIndex = Math.floor((i+1) * Math.random())
     let temp = randVote[getRandIndex]
     randVote[getRandIndex] = randVote[i]
     randVote[i] = temp
  }
//  randVote.splice(length-1,randVote.length-length) //don't force maximum ballot
  return randVote;
}
