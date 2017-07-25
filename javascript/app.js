window.onload = function() {

var timer= $("#timer");
var questionField = $("#question");

var answerOne = $("#answer-one");
var answerTwo = $("#answer-two");
var answerTree = $("#answer-tree");
var answerFour = $("#answer-four");
var startButton = $("#start-button");
var wins = $("#wins");
var losses = $("#losses");
var unAnswered = $("#unanswered");

var winCount = 0;
var lossCount = 0;
var unansweredCount = 0;
var gameCount = 0;


var gameObject = [

{
question: "What year did World war two begin?",
answer1:"1939",
answer2:"1940",
answer3:"1945",
answer4:"1948",
correctAnswer : "answer1",
correct:"1939",
background: "background-image",
image:"url(../images/ww2.jpg)",

},{

question: "John F Kenedy was assasinated in?",
answer1:"1973",
answer2:"Austin",
answer3:"Dallas",
answer4:"1958",
correctAnswer : "answer3",
correct:"Dallas",
background: "background-image",
image:"url(../images/kenedy.jpg)",

},{

question: "Who fought in the war of 1812?",
answer1:"Andrew Jackson",
answer2:"Mickael Jackson",
answer3:"OJ Simpson",
answer4:"Me,myself and I",
correctAnswer : "answer1",
correct:"Andrew Jackson",
background: "background-image",
image:"url(../images/andrew.jpg)",

},{

question: "American involvment in the Korea War took plave in which decade?",
answer1:"1970",
answer2:"1950",
answer3:"1920",
answer4:"1960",
correctAnswer : "answer2",
correct:"1950",
background: "background-image",
image:"url(../images/korea.jpg)",

},{

question: "The Magna Carta was published by the King of?",
answer1:"France",
answer2:"Austria",
answer3:"Italy",
answer4:"England",
correctAnswer : "answer4",
correct:"England",
background: "background-image",
image:"url(../images/magna.jpg)",

},{

question: "The Hundred years war was fought between what two countries?",
answer1:"Italy and Carthage",
answer2:"England and Germany",
answer3:"France and England",
answer4:"England and Russia",
correctAnswer : "answer3",
correct:"France and  England",
background: "background-image",
image:"url(../images/100.jpg)",

}]



timer.hide();
answerOne.hide();
answerTwo.hide();
answerTree.hide();
answerFour.hide();
questionField.hide();






startButton.on("click",function(){
  $("#question").html(gameObject[0].question);
  $("#answer-one").html(gameObject[0].answer1);
  $("#answer-two").html(gameObject[0].answer2);
  $("#answer-tree").html(gameObject[0].answer3);
  $("#answer-four").html(gameObject[0].answer4);

  stopwatch.start();
    timer.show();
  answerOne.show();
  answerTwo.show();
  answerTree.show();
  answerFour.show();
  questionField.show();
});




var offset = 1;




var stopwatch = {
    time: 30,

    start: function() {
      clockRunning = false;    
      timer.html("30:00");// Use setInterval to start the count here and set the clock to running.


      if (!clockRunning) {
          intervalId = setInterval(stopwatch.count, 1000);
          clockRunning = true;
      }
  },

  count: function() {
    if(offset == 6){
      offset = 0;    
    }
    
    
    //increment time by 1, remember we cant use "this" here.
    stopwatch.time--;

    // Get the current time, pass that into the stopwatch.timeConverter function,
    // and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    //  Use the variable we just created to show the converted time in the "display" div.
    timer.html(converted);
    if(stopwatch.time <= 0){
      $("#question").html(gameObject[offset].question);
      $("#answer-one").html(gameObject[offset].answer1);
      $("#answer-two").html(gameObject[offset].answer2);
      $("#answer-tree").html(gameObject[offset].answer3);
      $("#answer-four").html(gameObject[offset].answer4);

      offset++
      stopwatch.time = 30;
    }
  
  },



  timeConverter: function(t) {
      var seconds = t;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return 00 + ":" + seconds;
  }
};


setInterval(function(){


    
}, 30000);






} // end of windows.onLoad



























