document.getElementById('start').onclick = function () {
  document.getElementById('start').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  startQuiz();
};
/* start the quiz */
function startQuiz() {
  var questionIndex = 0;
  var timeLeft = 30;
  var timer = document.getElementById('timer');
/* create the questions */
  function showQuestion() {
      var questionList = [
            /* the question*/
          { text: 'commonly used data types DO NOT INCLUDE:?',
          /* the the possible choices */
            options: ['strings', 'booleans', 'alerts', 'numbers'],
            /* the correct answer*/
            answer: 'booleans',
          },
          { text: 'The condition in an if / else statement is enclosed within ___.',
            options: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
            answer: 'curly brackets',
          },
          { text: 'Arrays in JavaScript can be used to store__.',
            options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
            answer: 'all of the above',
          },
          { text: 'A very useful tool used during development and ebuging for printing content to the debugger is:',
          options: ['Javascript', 'Terminal / bash', 'for loops', 'console log'],
          answer: 'for loops',
        },
      ];
/* if the answer is right it movers to the next question. if it is not the correct answer then it will not subtract 1 second from the timer*/
      if (questionIndex < questionList.length) {
        var question = questionList[questionIndex];
          document.getElementById('test').innerText = question.text;
       
          for (var i = 0; i < document.querySelectorAll('.questions').length; i++) {
            document.querySelectorAll('.questions')[i].innerText = question.options[i];
            document.querySelectorAll('.questions')[i].onclick = function () {
                if (this.innerText === question.answer) {
                      questionIndex++;
                  } 
                else {
                      timeLeft -= 1;
                  }
                  showQuestion();
              };
          }
      } 
        else {
           endQuiz();
      }
  }
/* the the quiz ends and he time left is displayed and initials are asked for the high score*/
  function endQuiz() {
      clearInterval(timerInterval);
      document.getElementById('quiz').style.display = 'none';
      document.getElementById('testdone').style.display = 'block';
      document.getElementById('score').innerText = 'Your score: ' + timeLeft;

      document.getElementById('save').onclick = function () {
        JSON.parse(localStorage.getItem('highScores')).push({
            initials: document.getElementById('initials').value,
            score: finalScore,

            });

        };
    }

    var timerInterval = setInterval(function () {
        timeLeft--;
        timer.innerText = 'Time left: ' + timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);

    showQuestion();
}
