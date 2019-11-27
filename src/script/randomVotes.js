export default function randomVotes(input){
  let randVote = input.map(i => {
    return (
      i.id    // popularity function here
    )});

  for(let i = randVote.length-1; i >= 0; i--){
     let getRandIndex = Math.floor((i+1) * Math.random())
     let temp = randVote[getRandIndex]
     randVote[getRandIndex] = randVote[i]
     randVote[i] = temp
  }
  return randVote;
}
