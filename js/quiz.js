//create an array with questions and answers
var qAnda = [
  ["What is the kanji for 'both'?", "両"],
  ["What is the kanji for 'round'?", "丸"],
  ["What is the kanji for 'contend'?", "争"],
  ["What is the kanji for 'mingle'?",'交'],
  ["What is the kanji for 'other'?", "他"]
]

//create global variales I will use through the program
var score = 0;
var question;
var answer;
var ask;
var correct = [];
var wrong = [];


// simple print function
function print(message) {
  document.write(message);
}

//This function builds an ordered list. 
function makeList( arr ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}


//looping through the array length 
for (var i = 0; i < qAnda.length; i ++) {
// set the qustion variable to equal the 0 index of the array through each loop.
  question = qAnda[i][0];
//set the answer varialbe to equal the 1 index of the array through each loop
  answer = qAnda[i][1];
//prompt the user and ask the question. Turn the input into lowercase.
  ask = prompt(question).toLowerCase();
// if the user types 'quit' or QUIT or qUit 
 if ( ask === 'quit') {
// this alert will pop up and the loop will stop.   
  alert("Thank you for playing");
  break;
  } else if (ask === answer) { //But if the input is the same as the answer variable(index 1 of the array)
    score += 1; // the score will be increased by 1
    correct.push(question); //the correct question will be added to a new array called correct
  } else {
    wrong.push(question);// if the answer is wrong that answer will be added to an array called wrong
  }
} 
if (score >= 1) { // if the final score of at the end of the loop is 1 or more
  //make a final print message variable and build the message with +=
  finalMessage = "<p><strong> You got " + score + " answers!</strong></p>"; // this will print your final score
  finalMessage += "<h2>The questions you got right were:</h2>"; 
  finalMessage += makeList(correct); // this will build the ordered list  of the array with the correct answers 
  finalMessage += "<h2>The questions you got wrong were:</h2>";
  finalMessage += makeList(wrong);// this will build the ordered list of the array with the wrong answers 
  print(finalMessage); //this function will print all the messages
} else { //else the score is 0
 noCorrectmessage = "<h2> Sorry you got no questions right</h2>";
 print(noCorrectmessage);//print this message
}
