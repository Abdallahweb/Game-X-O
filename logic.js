var name1 = document.getElementById("p1"),
  startbut = document.getElementById("butstart");

function startplay() {
  ($("#p1").slideDown(),
    $("#p2").slideDown(),
    $(".title").addClass("titlestart"),
    $("#butstart").fadeOut());
}
var newplayer = $("#playerone");
$(document).ready(function () {
  $(".but").click(function () {
    "" == newplayer.val()
      ? $(".erro").html("<h3 style='color:rgb(97, 2, 2)'>Please Enter Your Name </h3>")
      : ($(".game").slideUp(),
        $(".name").addClass("pos1"),
        $(".name").html(
          "<img src='./player.png' style='width:90px;height:90px'>  <h2 style='-webkit-text-fill-color: rgba(255, 255, 255, 0); background: linear-gradient(to right,#111111cb, silver) text;'>PLAYER ONE (X)</h2>" +
            newplayer.val().toUpperCase(),
        ),
        $(".but2").removeAttr("disabled"));
  });
});
var newplayer2 = $("#playertwo");
$(document).ready(function () {
  $(".but2").click(function () {
    "" == newplayer2.val()
      ? $(".erro2").html(
          "<h3 style='color:rgb(97, 2, 2)'>Please Enter Your Name </h3>",
        )
      : ($(".game2").slideUp(),
        $(".name2").addClass("pos2"),
        $(document.body).addClass("back"),
        $(".name2").html(
          "<img src='./player.png' style='width:90px;height:90px'><h2 style='-webkit-text-fill-color: rgba(255, 255, 255, 0); background: linear-gradient(to right,#111111cb, silver) text;'>PLAYER TWO (O)</h2>" +
            newplayer2.val().toUpperCase(),
        ),
        $("#play-now").slideDown(500),
        $("#x-o").slideDown(),
        $(".top").animate(
          {
            left: "0px",
            width: "100%",
          },
          1e3,
        ),
        $(".bottom").animate(
          {
            right: "0px",
            width: "100%",
          },
          1e3,
        ),
        $(".right").animate(
          {
            height: "100%",
            top: "0px",
          },
          1e3,
        ),
        $(".left").animate(
          {
            height: "100%",
            bottom: "0px",
          },
          1e3,
        ));
  });
});
let turn = "X",
  title = document.querySelector(".title"),
  win = document.getElementById("win"),
  squares = [];

function end(e, s, a) {
  new Audio("./win.mp3").play();
  ((title.innerHTML = `<div class="winnerDiv"><h1 id="winner">The Winner<span class="winnerName">${win.innerHTML}</span></h1></div>`),
    (document.getElementById("item" + e).style.color = "rgb(97, 2, 2)"),
    (document.getElementById("item" + s).style.color = "rgb(97, 2, 2)"),
    (document.getElementById("item" + a).style.color = "rgb(97, 2, 2)"),
    $("#p1").slideUp(),
    $("#p2").slideUp(),
    $("#p1").addClass("hidename"),
    $("#p2").addClass("hidename2"),
    setTimeout(function () {
      location.reload();
    }, 2e3));
}

function winner() {
  for (let e = 1; e < 10; e++)
    squares[e] = document.getElementById("item" + e).innerHTML;
  squares[1] == squares[2] && squares[2] == squares[3] && "" != squares[1]
    ? end(1, 2, 3)
    : squares[4] == squares[5] && squares[5] == squares[6] && "" != squares[4]
      ? end(4, 5, 6)
      : squares[7] == squares[8] && squares[8] == squares[9] && "" != squares[7]
        ? end(7, 8, 9)
        : squares[1] == squares[4] &&
            squares[4] == squares[7] &&
            "" != squares[1]
          ? end(1, 4, 7)
          : squares[2] == squares[5] &&
              squares[5] == squares[8] &&
              "" != squares[2]
            ? end(2, 5, 8)
            : squares[3] == squares[6] &&
                squares[6] == squares[9] &&
                "" != squares[3]
              ? end(3, 6, 9)
              : squares[1] == squares[5] &&
                  squares[5] == squares[9] &&
                  "" != squares[1]
                ? end(1, 5, 9)
                : squares[3] == squares[5] &&
                  squares[5] == squares[7] &&
                  "" != squares[3] &&
                  end(3, 5, 7);
}

function gameid(e) {
  new Audio("./click.mp3").play();
  let s = document.getElementById(e),
    a = document.getElementById("win"),
    t = document.getElementById("play-now"),
    r = document.getElementById("play-now2");
  ("X" === turn && "" == s.innerHTML
    ? ((s.innerHTML = "X"),
      (s.style.backgroundColor = "#d4d4d4"),
      (turn = "O"),
      (a.innerHTML = newplayer.val().toUpperCase()),
      (t.style.display = "none"),
      (r.style.display = "block"))
    : "O" === turn &&
      "" == s.innerHTML &&
      ((s.innerHTML = "O"),
      (s.style.backgroundColor = "#d4d4d4"),
      (turn = "X"),
      (a.innerHTML = newplayer2.val().toUpperCase()),
      (r.style.display = "none"),
      (t.style.display = "block")),
    winner());
}
