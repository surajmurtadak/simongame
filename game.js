let colors = ["green", "blue", "red", "yellow"];
let level = 0;
let userClick = [];
let pattern = [];
let started = false;

$(".btn").click(function () {
  let click = $(this).attr("id");
  btnpress(click);
});

//button press animation
function btnpress(clk) {
  $(`.${clk}`).addClass("pressed");
  setTimeout(function () {
    $(`.${clk}`).removeClass("pressed");
  }, 200);
}
