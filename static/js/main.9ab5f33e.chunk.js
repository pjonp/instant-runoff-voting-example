(this["webpackJsonpinstant-runoff-voting-example"]=this["webpackJsonpinstant-runoff-voting-example"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"num":"1st","name":"First"},{"num":"2nd","name":"Second"},{"num":"3rd","name":"Third"},{"num":"4th","name":"Fourth"},{"num":"5th","name":"Fifth"},{"num":"6th","name":"Sixth"},{"num":"7th","name":"Seventh"},{"num":"8th","name":"Eighth"},{"num":"9th","name":"Nineth"}]')},12:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),i=n.n(r),l=n(2),s=n(3),c=n(4),u=n(6),d=n(5),m=n(1),h=n(7),v=n(8),p=n(10),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=v.map((function(e,t){return o.a.createElement("div",{className:"ballotInfoOrder",key:t+"option",style:{width:100/v.length+"%"}},o.a.createElement("div",{className:"ballotInfoOrderName"},o.a.createElement("p",null,p[t].name)),o.a.createElement("div",{className:"ballotInfoOrderNumber"},o.a.createElement("p",null,p[t].num)))})),n=v.map((function(t,n){var a=v.map((function(n,a){var r=[a,t.id],i={backgroundColor:e.props.currentVote.some((function(e){return e[0]===r[0]&&e[1]===r[1]}))?"black":"white",display:e.props.currentVote.some((function(e){return e[0]!==r[0]&&e[1]===r[1]}))?"none":e.props.currentVote.length<r[0]?"none":null},l={width:100/v.length+"%",backgroundColor:e.props.currentVote.some((function(e){return e[0]===r[0]||e[1]===r[1]}))?"AliceBlue":e.props.currentVote.length===r[0]?"MediumSeaGreen":null};return o.a.createElement("div",{className:"ballotChoicesBubblesBox",key:"bubble"+a+t.id,style:l},o.a.createElement("div",{id:r,className:"ballotChoicesBubble",onClick:e.props.clickBubble,style:i}))})),r={backgroundColor:"".concat(t.color)};return o.a.createElement("div",{className:"containerRow",key:t.name},o.a.createElement("div",{className:"ballotChoiceNameBox"},o.a.createElement("p",{className:"ballotChoiceName",style:r,onClick:e.props.clickName,id:"".concat(t.id,"clickName")},t.name)),a)}));return o.a.createElement("div",{id:"ballotContainer"},o.a.createElement("div",{className:"contentTitle"},o.a.createElement("h1",null,"RANKED CHOICE VOTING EXAMPLE")),o.a.createElement("div",{className:"contentInfo"},o.a.createElement("div",{className:"ballotInfoText"},o.a.createElement("p",null,"Rank up to 7 colors")),o.a.createElement("div",{className:"ballotInfoOrderContatiner"},t)),o.a.createElement("div",{className:"contentData"},n),o.a.createElement("div",{className:"contentNav"},o.a.createElement("h3",{className:"contentNavStatus"},this.props.currentVote.length<v.length?"Make your ".concat(p[this.props.currentVote.length].num," Choice Or Press Submit!"):"Press Submit!"),o.a.createElement("div",{className:"contentNavButtonContainer"},o.a.createElement("span",{className:"contentNavButton",onClick:this.props.undoBallot},"UNDO"),o.a.createElement("span",{className:"contentNavButton",onClick:this.props.clearBallot,style:{backgroundColor:"#fa3c92"}},"RESET ALL VOTES"),o.a.createElement("span",{className:"contentNavButton",onClick:this.props.submitBallot},"SUBMIT"))))}}]),t}(a.Component),b=n(8),E=n(10),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.userVote,t=this.props.finalResults,n=this.props.round,a=this.props.roundVisual,r=e.length>0?e.map((function(a,r){var i={backgroundColor:b.filter((function(e){return e.id===a[1]}))[0].color,maxWidth:95/e.length+"%",width:"25%",fontSize:e.length<6?"14px":"12px"};return o.a.createElement("div",{className:"userVote",key:r+"option",style:i},o.a.createElement("div",{className:"userVoteName"},o.a.createElement("p",null,b.filter((function(e){return e.id===a[1]}))[0].name)),o.a.createElement("div",{className:"userVoteNum"},o.a.createElement("p",null,E[r].num)),o.a.createElement("div",{className:"userVoteHide",style:{display:t[n-1].filter((function(e){return e.id===a[1]}))[0].eliminated>0?null:"none"}},o.a.createElement("p",{className:"userVoteHideX",id:"x"},"X")))})):o.a.createElement("div",{className:"userVote",style:{padding:"3px"}},o.a.createElement("div",{className:"userVoteName",style:{color:"black",textShadow:"none"}},o.a.createElement("p",null,"YOU DIDN'T")),o.a.createElement("div",{className:"userVoteNum",style:{color:"black",textShadow:"none"}},o.a.createElement("p",null,"VOTE"))),i=t[n-1].map((function(e){return o.a.createElement("div",{className:"containerRow",key:"result"+e.id},o.a.createElement("div",{className:"ballotChoiceNameBox",style:{backgroundColor:"white",border:0,borderRight:"3px solid black"}},o.a.createElement("p",{className:"ballotChoiceName",style:{backgroundColor:"".concat(b.filter((function(t){return e.id===t.id}))[0].color)}},b.filter((function(t){return e.id===t.id}))[0].name)),function(e){var r=e.winner?"WINS":e.tie?"TIE":"";if(3===a){var i,l=t[n-1].map((function(t){if(t.nextChoice){var n=t.nextChoice.filter((function(t){return t.id===e.id}));return n[0]?(i=[t.id,n[0].nextvotes],o.a.createElement("div",{key:"".concat(i[0],"addto").concat(e.id),className:"graphBar",style:{width:i[1]+"%",backgroundColor:b.filter((function(e){return i[0]===e.id}))[0].color}},o.a.createElement("div",{className:"graphBarVotes"},i[1]))):null}return null}));return e.eliminated!==n?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"".concat(e.id,"bar"),className:"graphBar",style:{width:e.votes+"%",backgroundColor:b.filter((function(t){return e.id===t.id}))[0].color}},o.a.createElement("div",{className:"graphBarVotes"},e.votes)),l):o.a.createElement("div",{id:"".concat(e.id,"bar"),className:"graphBar",style:{width:"55%",margin:"auto",backgroundColor:b.filter((function(t){return e.id===t.id}))[0].color}},o.a.createElement("div",{className:"graphBarVotes"},"".concat(e.votes," votes moved to next choice")))}return 1===a||e.eliminated!==n?o.a.createElement("div",{key:"".concat(e.id,"bar"),id:"".concat(e.id,"bar"),className:"graphBar",style:{width:e.votes+"%",backgroundColor:b.filter((function(t){return e.id===t.id}))[0].color}},o.a.createElement("div",{className:"graphBarVotes"},"".concat(e.votes," ").concat(r))):e.nextChoice.map((function(t){return o.a.createElement("div",{key:"".concat(e.id).concat(t.id," bar"),id:"".concat(e.id,"nextvote").concat(t.id),className:"graphBar",style:{width:t.nextvotes+"%",backgroundColor:b.filter((function(e){return t.id===e.id}))[0].color}},o.a.createElement("div",{className:"graphBarVotes"},t.nextvotes))}))}(e))}));return o.a.createElement("div",{id:"resultsContainer"},o.a.createElement("div",{className:"contentTitle"},o.a.createElement("h1",null,"RANKED CHOICE VOTING EXAMPLE")),o.a.createElement("div",{className:"contentInfo"},r),o.a.createElement("div",{className:"contentData",id:"results"},i,o.a.createElement("div",{className:"resultsGoal"})),o.a.createElement("div",{className:"contentNav"},o.a.createElement("h3",{className:"contentNavStatus"},function(){var e=t[n-1].filter((function(e){return e.eliminated===n})).map((function(e){return e.id})).map((function(e){return b.filter((function(t){return e===t.id}))})).map((function(e){return e[0].name}));e.length>1&&(e=e.join(" & "));var o=t[n-1].filter((function(e){return e.winner})),r=t[n-1].filter((function(e){return e.tie}));return o[0]?"".concat(b.filter((function(e){return e.id===o[0].id}))[0].name," WINS!"):r[0]?"".concat(b.filter((function(e){return e.id===r[0].id}))[0].name," & ").concat(b.filter((function(e){return e.id===r[1].id}))[0].name," TIE!"):1===a?"".concat(e," Eliminated This Round"):2===a?"Next Choice Votes for ".concat(e):"".concat(e," Votes Moved")}()),o.a.createElement("div",{className:"contentNavButtonContainer"},o.a.createElement("span",{className:"contentNavButton",onClick:this.props.moveBack},"BACK"),o.a.createElement("span",{className:"contentNavButton",onClick:this.props.moveHome},"CHANGE YOUR VOTE"),o.a.createElement("span",{className:"contentNavButton",onClick:this.props.moveForward,style:{zIndex:this.props.round<this.props.maxRounds?"0":"-1"}},"NEXT"))))}}]),t}(a.Component);function k(e,t){for(var n=Object(l.a)(e),a=n.length-1;a>=0;a--){var o=Math.floor((a+1)*Math.random()),r=n[o];n[o]=n[a],n[a]=r}return n}var g=[],y=[];function B(e,t,n){!function e(t,n,a){var o=[],r=[],i=[];o=1===n?t.map((function(e){return i.push([e[0],e]),e[0]})):t.map((function(e){for(var t=0;t<e.length;t++)if(-1===y.map((function(e){return e[0]})).indexOf(e[t]))return i.push([e[t],e]),e[t];return null}));o.sort(),o.map((function(e){if(!e)return null;if(-1===r.findIndex((function(t){return t.id===e}))){var t=o.lastIndexOf(e)-o.indexOf(e)+1,a={round:n,id:e,votes:t};return r.push(a),null}return null})),r.sort((function(e,t){return t.votes-e.votes}));for(var s=r.length,c=0;c<y.length;c++){var u={round:n,id:y[c][0],votes:0,eliminated:y[c][1]};r.push(u)}if(r[0].votes>t.length/2||1===s)return r[0].winner=!0,r[1]&&(r[1].eliminated=n),g.push(r),console.log("WINNER"),void a(g,n);if(2===s&&r[0].votes===r[1].votes)return r[0].tie=!0,r[1].tie=!0,g.push(r),console.log("TIE!"),void a(g,n);for(var d=s-1;d>0;d--)s>1&&r[s-1].votes===r[d].votes&&(r[d].eliminated=n,y.unshift([r[d].id,n]));for(var m=function(e){var t=Object(l.a)(y);if(s>1&&r[s-1].votes===r[e].votes){var n=i.filter((function(t){return t[0]===r[e].id})).map((function(e){for(var n=0;n<e[1].length;n++)if(-1===t.map((function(e){return e[0]})).indexOf(e[1][n]))return e[1][n];return null})).sort(),a=[];n.map((function(e){if(!e)return null;if(-1===a.findIndex((function(t){return t.id===e}))){var t=n.lastIndexOf(e)-n.indexOf(e)+1,o={id:e,nextvotes:t};return a.push(o),null}return null})),r[e].nextChoice=a}},h=s-1;h>0;h--)m(h);if(g.push(r),10===n)return console.log("something went wrong, too many rounds..."),void a(g,n);e(t,n+1,a)}(e,t,(function(e,t){g=[],y=[],n(e,t)}))}var O=n(8),V=0,C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={userVote:[],votechange:!1,allVotes:[],finalResults:[],round:0,maxRounds:0,roundVisual:3},n.pressKey=n.pressKey.bind(Object(m.a)(n)),n.touchStart=n.touchStart.bind(Object(m.a)(n)),n.touchEnd=n.touchEnd.bind(Object(m.a)(n)),n.clickBubble=n.clickBubble.bind(Object(m.a)(n)),n.clickName=n.clickName.bind(Object(m.a)(n)),n.submitBallot=n.submitBallot.bind(Object(m.a)(n)),n.undoBallot=n.undoBallot.bind(Object(m.a)(n)),n.clearBallot=n.clearBallot.bind(Object(m.a)(n)),n.moveForward=n.moveForward.bind(Object(m.a)(n)),n.moveBack=n.moveBack.bind(Object(m.a)(n)),n.moveHome=n.moveHome.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.pressKey),document.addEventListener("touchstart",this.touchStart),document.addEventListener("touchend",this.touchEnd)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.pressKey),document.addEventListener("touchstart",this.touchStart),document.addEventListener("touchend",this.touchEnd)}},{key:"pressKey",value:function(e){return 37===e.keyCode&&this.state.round>0?this.moveBack():39===e.keyCode&&0===this.state.round?this.submitBallot():39===e.keyCode&&this.state.round<this.state.maxRounds?this.moveForward():null}},{key:"touchStart",value:function(e){V=e.changedTouches[0].clientX}},{key:"touchEnd",value:function(e){var t=e.changedTouches[0].clientX-V;return console.log("touch end",t),t>75&&this.state.round>0?this.moveBack():t<-75&&0===this.state.round?this.submitBallot():t<-75&&this.state.round<this.state.maxRounds?this.moveForward():null}},{key:"clickBubble",value:function(e){var t=e.target.id.split(",");t=[parseInt(t[0]),parseInt(t[1])];var n=Object(l.a)(this.state.userVote);n[t[0]]?n.length-1===t[0]&&n[t[0]][1]===t[1]?n.pop():n[t[0]]=t:n.push(t),this.setState({userVote:n,votechange:!0})}},{key:"clickName",value:function(e){var t=Object(l.a)(this.state.userVote),n=[t.length,parseInt(e.target.id)];if(n[0]>0&&t[n[0]-1][1]===n[1])t.pop();else{if(t.some((function(e){return e[1]===n[1]})))return"already voted for";t.push(n)}this.setState({userVote:t,votechange:!0})}},{key:"clearBallot",value:function(){this.setState({userVote:[],votechange:!0,allVotes:[],finalResults:[],maxRounds:0})}},{key:"undoBallot",value:function(){var e=Object(l.a)(this.state.userVote);e.pop(),this.setState({userVote:e,votechange:!0})}},{key:"submitBallot",value:function(){var e=this;if(this.state.allVotes[0]){if(this.state.votechange){var t=Object(l.a)(this.state.allVotes),n=this.state.userVote.map((function(e){return e[1]}));t.pop(),t.push(n),B(t,1,(function(n,a){e.setState({allVotes:t,votechange:!1,finalResults:n,maxRounds:a})}))}}else{for(var a=this.state.userVote.map((function(e){return e[1]})),o=[],r=O.map((function(e){for(var t=[],n=0;n<e.popularity;n++)t.push(e.id);return t})),i=0;i<99;i++)o.push(k(r.flat(),O.length));o.push(a),B(o,1,(function(t,n){e.setState({allVotes:o,votechange:!1,finalResults:t,maxRounds:n})}))}this.moveForward()}},{key:"moveForward",value:function(){var e=this.state.round,t=this.state.roundVisual;e+=t<3?0:1,t<3?t+=1:t=1,this.setState({round:e,roundVisual:t})}},{key:"moveBack",value:function(){var e=this.state.round,t=this.state.roundVisual;e-=t>1?0:1,t>1?t-=1:t=3,this.setState({round:e,roundVisual:t})}},{key:"moveHome",value:function(){this.setState({round:0,roundVisual:3})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{id:"contentContainer",className:"contentContainer"},0===this.state.round&&3===this.state.roundVisual&&o.a.createElement(f,{clickBubble:this.clickBubble,clickName:this.clickName,submitBallot:this.submitBallot,undoBallot:this.undoBallot,clearBallot:this.clearBallot,currentVote:this.state.userVote}),this.state.round>0&&o.a.createElement(N,{round:this.state.round,roundVisual:this.state.roundVisual,maxRounds:this.state.maxRounds,moveBack:this.moveBack,moveForward:this.moveForward,moveHome:this.moveHome,finalResults:this.state.finalResults,userVote:this.state.userVote})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e){e.exports=JSON.parse('[{"id":1,"name":"RED","color":"red","popularity":7},{"id":2,"name":"ORANGE","color":"orange","popularity":5},{"id":3,"name":"YELLOW","color":"yellow","popularity":4},{"id":4,"name":"GREEN","color":"green","popularity":8},{"id":5,"name":"BLUE","color":"blue","popularity":7},{"id":6,"name":"INDIGO","color":"indigo","popularity":4},{"id":7,"name":"VIOLET","color":"violet","popularity":7}]')}},[[12,1,2]]]);
//# sourceMappingURL=main.9ab5f33e.chunk.js.map