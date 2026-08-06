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
      ? $(".erro").html("<h3 style='color:#8a0606'>Please Enter Your Name </h3>")
      : ($(".game").slideUp(),
        $(".name").addClass("pos1"),
        $(".name").html(
          `<img src='./player.jpg' class="playerImg1" style='margin:auto;width:170px;height:350px'>  <h2 class='nameplayer1'>${newplayer.val().toUpperCase()}</h2> <img src="./iconx.jpg" style="width:60px;height:60px">`
        ),
        $(".but2").removeAttr("disabled"));
  });
});
var newplayer2 = $("#playertwo");
$(document).ready(function () {
  $(".but2").click(function () {
    "" == newplayer2.val()
      ? $(".erro2").html(
          "<h3 style='color:#8a0606'>Please Enter Your Name </h3>",
        )
      : ($(".game2").slideUp(),
        $(".name2").addClass("pos2"),
        $(document.body).addClass("back"),
        $(".name2").html(
          `<img src='./player2.png' style='margin:auto;width:150px;height:350px'><h2 class='nameplayer2'>${newplayer2.val().toUpperCase()}</h2> <img src="./icono.png" style="width:60px;height:60px">`
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
    (document.getElementById("item" + e).style.color = "#0c0c0c"),
    (document.getElementById("item" + s).style.color = "#0c0c0c"),
    (document.getElementById("item" + a).style.color = "#0c0c0c"),
    $("#p1").slideUp(),
    $("#p2").slideUp(),
    $("#p1").addClass("hidename"),
    $("#p2").addClass("hidename2"),
setTimeout(function () {
    location.reload();
}, 4000))
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
    t = document.getElementsByClassName("nameplayer1"),
    r = document.getElementsByClassName("nameplayer2");
  ("X" === turn && "" == s.innerHTML
    ? ((s.innerHTML = "X"),
      (s.style.backgroundColor = "#e6e5e5"),
            (s.style.color = "#8a0606"),

      (turn = "O"),
      (a.innerHTML = newplayer.val().toUpperCase()),
      (t[0].classList.remove("shadow1")),
      (r[0].classList.add("shadow2")))
    : "O" === turn &&
      "" == s.innerHTML &&
      ((s.innerHTML = "O"),
      (s.style.backgroundColor = "#e6e5e5"),
      (s.style.color = "#051c6c"),
      (turn = "X"),
      (a.innerHTML = newplayer2.val().toUpperCase()),
      (r[0].classList.remove("shadow2")),
      (t[0].classList.add("shadow1"))),
    winner());
}
