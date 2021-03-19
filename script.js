var createPolitician = function (name, partyColor)
{
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  
  politician.tallyUpTotalVotes = function()

{
  this.totalVotes = 0
  
  for (i = 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};
  
    return politician;
};

var mory = createPolitician("Mory Marisol", [132, 17, 11]);
var claris = createPolitician("Claris Crane", [245, 141, 136]);

mory.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2]
claris.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1]

mory.electionResults[9] = 1;
claris.electionResults[9] = 28;

mory.electionResults[4] = 17;
claris.electionResults[4] = 38;

mory.electionResults[43] = 11;
claris.electionResults[43] = 27;

/*console.log(mory.electionResults);
console.log(claris.electionResults);*/

var setStateResults = function(state)
{
  theStates[state].winner = null;
  
  if (mory.electionResults[state] > claris.electionResults[state])
    {
      theStates[state].winner = mory;
    }
  else if (mory.electionResults[state] < claris.electionResults[state])
  {
    theStates[state].winner = claris;
  }
  
 var stateWinner = theStates[state].winner;
 
  if (stateWinner !== null)
    {
      theStates[state].rgbColor = stateWinner.partyColor;
    }
  else 
    {
      theStates[state].rbgColor = [11, 32, 57];
    }

  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Name = body.children[1].children[0];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
  candidate1Name.innerText = mory.name;
  candidate2Name.innerText = claris.name;
 
  candidate1Results.innerText = mory.electionResults[state];
  candidate2Results.innerText = claris.electionResults[state];
 
  if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}

};

mory.tallyUpTotalVotes();
claris.tallyUpTotalVotes();
 
/*console.log("Mory recieved " +mory.totalVotes+ " votes.");
console.log("Claris recieved " +claris.totalVotes+ " votes.");*/

var winner = "???";

if (mory.totalVotes > claris.totalVotes)
{
  winner = mory.name;
}
  else if (claris.totalVotes > mory.totalVotes)
{
  winner = claris.name;
}
 else 
{
  winner = "DRAW."
}

/*console.log("AND THE WINNER IS... " +winner+ " !!!");*/

/*console.log("Mory's color is: " + mory.partyColor);
console.log("Claris' color is: " + claris.partyColor);*/

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = mory.name;
row.children[1].innerText = mory.totalVotes;
row.children[2].innerText = claris.name;
row.children[3].innerText = claris.totalVotes;
row.children[5].innerText = winner