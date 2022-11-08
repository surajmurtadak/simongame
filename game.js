let colors = ["green", "blue", "red", "yellow"];
let level = 0;
let userClick = [];
let pattern = [];
let started = false;

$(document).keypress(function () {
  if (!started) {
    nextstep();
    started = true;
  }
});

$(".btn").click(function () {
  let click = $(this).attr("id");
  userClick.push(click);
  btnpress(click);
  play(click);
  checkAnswer(userClick.length - 1);
});

//for nextStep
function nextstep() {
  level++;
  $("h1").text(`level ${level}`);
  userClick = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomColor = colors[randomNumber];
  pattern.push(randomColor);
  setTimeout(function () {
    btnpress(randomColor);
    play(randomColor);
  }, 700);
}

//check answer
function checkAnswer(check) {
  if (userClick[check] === pattern[check]) {
    if (userClick.length === pattern.length) {
      nextstep();
    }
  } else {
    gameOver();
  }
}

//button press animation
function btnpress(clk) {
  $(`.${clk}`).addClass("pressed");
  setTimeout(function () {
    $(`.${clk}`).removeClass("pressed");
  }, 200);
}

//sound play
function play(snd) {
  let sound = new Audio(`/sounds/${snd}.mp3`);
  sound.play();
}

//gameOver
function gameOver() {
  level = 0;
  pattern = [];
  userClick = [];
  $("h1").text("Game Over, press any key to start again");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 400);
  play("wrong");
}
