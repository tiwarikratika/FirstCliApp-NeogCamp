var readlineSync = require('readline-sync');

var chalk = require('chalk');

console.log(chalk.cyanBright("Welcome to 'How Well you know me quiz !!'"));

var username = readlineSync.question("What is your name?");

console.log(chalk.red('Hello '+username + ' I am Kratika '));

console.log(chalk.green("okayy !! So let's get started !!"));


var questions = [{
  question : "1.What is my age?",
  answer : "21"
},

{
  question: "2.Where am I from ?",
  answer : "hardoi"
},
{
  question : "3.What is my favourite color ?",
  answer : "yellow"
},
{
  question: "4.What do I love? Mountains or Beaches ??",
  answer : "Mountains"
},
{
 question:"5.What is my preference ? Coffee or Tea ?",
 answer : "Tea"
},
{
question: "6.Do i have a pet ?",
answer : "no"
}];

var score = 0;
function play(question,ans){
   var userAns = readlineSync.question(chalk.cyan(question));
   if(ans===userAns)
   {
     console.log(chalk.green("You are right"));
     score+=1;
   }
   else{
     console.log(chalk.red("Wrong ans!! "));
     score-=1;
   }
}
var high_score=3;
for(var i=0;i<questions.length;i++)
{
  var currques = questions[i];
  play(currques.question, currques.answer)
  console.log("-------------");
}

console.log("Thankyou for taking the quiz");
console.log("Your final score is ", score);



if(score>high_score)
  {console.log(chalk.green(" Congratulations!!  You have the highest score! You really know me well"))
  }
  else{console.log(chalk.red("The highest score is: ", high_score));
  }

