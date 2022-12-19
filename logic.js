

// start play button

var name1 = document.getElementById("p1");
var startbut = document.getElementById("butstart");

function startplay() {


    $("#p1").slideDown();
    $("#p2").slideDown();
    $(".title").addClass("titlestart");
    $("#butstart").fadeOut();
}


// player one name

var newplayer = $('#playerone');
$(document).ready(function () {

    $(".but").click(function () {
        if (newplayer.val() == "") {
            $(".erro").html("<h4 style='color:brown'>Please Enter Your Name </h4>")
        } else {
            $(".game").slideUp(),
                $(".name").addClass("pos1"),
                $(".name").html("<h2 style='color:gold'>PLAYER ONE</h2>" + newplayer.val().toUpperCase()),
                $(".but2").removeAttr('disabled');



        }

    })

})

// player two name

var newplayer2 = $('#playertwo');

$(document).ready(function () {

    $(".but2").click(function () {
        if (newplayer2.val() == "") {
            $(".erro2").html("<h4 style='color:rgb(169, 12, 12)'>Please Enter Your Name </h4>")
        } else {
            $(".game2").slideUp(),
                $(".name2").addClass("pos2"),
                $(document.body).addClass("back"),

                $(".name2").html("<h2 style='color:gold'>PLAYER TWO </h2>" + newplayer2.val().toUpperCase()),
                $("#play-now").slideDown(500),

                $("#x-o").slideDown();
            $('.top').animate({

                left: "0px",
                width: "100%"

            }, 1000)
            $('.bottom').animate({

                right: "0px",
                width: "100%"


            }, 1000)
            $('.right').animate({

                height: "100%",
                top: "0px"
            }, 1000)

            $('.left').animate({

                height: "100%",
                bottom: "0px"
            }, 1000);

        }

    })

})


// winner
 
let turn = 'X';
let title = document.querySelector('.title');
let win = document.getElementById("win");
let squares = [];


function end(num1, num2, num3) {

    title.innerHTML = "<h4 style='color:gold'>" + `${win.innerHTML}` + "</h4>" + "The Winner";
   
    document.getElementById('item' + num1).style.color = 'gold';
    document.getElementById('item' + num2).style.color = 'gold';
    document.getElementById('item' + num3).style.color = 'gold';
    

    $("#p1").slideUp();
    $("#p2").slideUp();
    $("#p1").addClass("hidename");
    $("#p2").addClass("hidename2");







    setInterval(function () {
        title.innerHTML += " ."
    }, 1500);

    setTimeout(function () {
        location.reload()
    }, 5000)


}


// x - o logic

function winner() {

    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {

        end(1, 2, 3);


    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        end(4, 5, 6);


    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        end(7, 8, 9);


    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        end(1, 4, 7);


    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        end(2, 5, 8);


    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        end(3, 6, 9);


    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        end(1, 5, 9);


    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
        end(3, 5, 7);


    }


}




function gameid(id) {

    let element = document.getElementById(id);
    let win = document.getElementById("win");
    let playnow = document.getElementById("play-now");
    let playnow2 = document.getElementById("play-now2");





    if (turn === 'X' && element.innerHTML == '') {
        element.innerHTML = 'X';
        element.style.backgroundColor = '#111';
        turn = 'O';

        win.innerHTML = newplayer.val().toUpperCase();
        playnow.style.display = 'none';
        playnow2.style.display = 'block';







    } else if (turn === 'O' && element.innerHTML == '') {
        element.innerHTML = 'O';
        element.style.backgroundColor = '#111';

        turn = 'X';

        win.innerHTML = newplayer2.val().toUpperCase();
        playnow2.style.display = 'none';
        playnow.style.display = 'block';




    }
    winner();
}
