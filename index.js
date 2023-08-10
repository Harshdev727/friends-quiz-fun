var readlineSync = require("readline-sync");
var userscore = 0;

var username = readlineSync.question("What is your name? ");

console.log("Welcome "+username);
console.log("Let's Start");

questionOne={
    question:"What is my favorite sweet?",
    option1:"a. ras-malai",
    option2:"b. lassi",
    option3:"c. laddu",
    answer:"a"
}
questionTwo={
    question:"What is my favorite color?",
    option1:"a. voilet",
    option2:"b. red",
    option3:"c. skyblue",
    answer:"c"
}
questionThree={
    question:"What is my favorite outdoor game?",
    option1:"a. badminton",
    option2:"b. football",
    option3:"c. cricket",
    answer:"c"
}
questionFour={
    question:"What is my favorite mobile game?",
    option1:"a. pool",
    option2:"b. bgmi",
    option3:"c. candy crush",
    answer:"b"
}
questionFive={
    question:"How old am i?",
    option1:"a. 21",
    option2:"b. 18",
    option3:"c. 20",
    answer:"a"
}
questionSix={
    question:"Do i like programming?",
    option1:"a. no",
    option2:"b. yes",
    option3:"c. chose from a and b",
    answer:"b"
}
questionSeven={
    question:"Do i like web development?",
    option1:"a. yes",
    option2:"b. no",
    option3:"c. chose from a and b",
    answer:"a"
}
questionEight={
    question:"What is my favorite fruit?",
    option1:"a. mango",
    option2:"b. lychee",
    option3:"c. apple",
    answer:"b"
}
questionNine={
    question:"Have i graduated?",
    option1:"a. yes",
    option2:"b. no",
    option3:"c. pursuing",
    answer:"b"
}
questionTen={
    question:"From which branch I have done polytechnic?",
    option1:"a. Chemical Engineering",
    option2:"b. Civil Engineering",
    option3:"c. Computer Engineering",
    answer:"c"
}

highScores=[{
    user:"aman",
    score:5
},
{
  user:"Sagar",
  score:6
}]

QnAlist = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

function quiz(question,option1,option2,option3,answer){
    console.log(question);
    console.log(option1+"\n"+option2+"\n"+option3);
    userAnswer = readlineSync.question();

    if(userAnswer.toUpperCase() === answer.toUpperCase()){
        console.log("You are right!");
        userscore+=1; //score = score + 1;       
    }
    else{
        console.log("You are wrong!");
    }
}
for(var i=0;i<QnAlist.length;i++){

    quiz(QnAlist[i].question,QnAlist[i].option1,QnAlist[i].option2,QnAlist[i].option3,QnAlist[i].answer);

}

console.log("Your Final Score is "+userscore+"/"+QnAlist.length);
for(var i=0;i<highScores.length;i++){
    console.log("High Scorer "+ highScores[i].user +" with score: "+highScores[i].score);


}

    if(userscore > highScores[0].score || userscore > highScores[1].score){
    console.log("Share your screenshot if you have beat the high scorer!");

}