var name1=document.getElementById("p1"),startbut=document.getElementById("butstart");function startplay(){$("#p1").slideDown(),$("#p2").slideDown(),$(".title").addClass("titlestart"),$("#butstart").fadeOut()}var newplayer=$("#playerone");$(document).ready(function(){$(".but").click(function(){""==newplayer.val()?$(".erro").html("<h4 style='color:brown'>Please Enter Your Name </h4>"):($(".game").slideUp(),$(".name").addClass("pos1"),$(".name").html("<h2 style='color:gold'>PLAYER ONE</h2>"+newplayer.val().toUpperCase()),$(".but2").removeAttr("disabled"))})});var newplayer2=$("#playertwo");$(document).ready(function(){$(".but2").click(function(){""==newplayer2.val()?$(".erro2").html("<h4 style='color:rgb(169, 12, 12)'>Please Enter Your Name </h4>"):($(".game2").slideUp(),$(".name2").addClass("pos2"),$(document.body).addClass("back"),$(".name2").html("<h2 style='color:gold'>PLAYER TWO </h2>"+newplayer2.val().toUpperCase()),$("#play-now").slideDown(500),$("#x-o").slideDown(),$(".top").animate({left:"0px",width:"100%"},1e3),$(".bottom").animate({right:"0px",width:"100%"},1e3),$(".right").animate({height:"100%",top:"0px"},1e3),$(".left").animate({height:"100%",bottom:"0px"},1e3))})});let turn="X",title=document.querySelector(".title"),win=document.getElementById("win"),squares=[];function end(e,s,a){title.innerHTML=`<h4 style='color:gold'>${win.innerHTML}</h4>The Winner`,document.getElementById("item"+e).style.color="gold",document.getElementById("item"+s).style.color="gold",document.getElementById("item"+a).style.color="gold",$("#p1").slideUp(),$("#p2").slideUp(),$("#p1").addClass("hidename"),$("#p2").addClass("hidename2"),setTimeout(function(){location.reload()},5e3)}function winner(){for(let e=1;e<10;e++)squares[e]=document.getElementById("item"+e).innerHTML;squares[1]==squares[2]&&squares[2]==squares[3]&&""!=squares[1]?end(1,2,3):squares[4]==squares[5]&&squares[5]==squares[6]&&""!=squares[4]?end(4,5,6):squares[7]==squares[8]&&squares[8]==squares[9]&&""!=squares[7]?end(7,8,9):squares[1]==squares[4]&&squares[4]==squares[7]&&""!=squares[1]?end(1,4,7):squares[2]==squares[5]&&squares[5]==squares[8]&&""!=squares[2]?end(2,5,8):squares[3]==squares[6]&&squares[6]==squares[9]&&""!=squares[3]?end(3,6,9):squares[1]==squares[5]&&squares[5]==squares[9]&&""!=squares[1]?end(1,5,9):squares[3]==squares[5]&&squares[5]==squares[7]&&""!=squares[3]&&end(3,5,7)}function gameid(e){let s=document.getElementById(e),a=document.getElementById("win"),t=document.getElementById("play-now"),r=document.getElementById("play-now2");"X"===turn&&""==s.innerHTML?(s.innerHTML="X",s.style.backgroundColor="#111",turn="O",a.innerHTML=newplayer.val().toUpperCase(),t.style.display="none",r.style.display="block"):"O"===turn&&""==s.innerHTML&&(s.innerHTML="O",s.style.backgroundColor="#111",turn="X",a.innerHTML=newplayer2.val().toUpperCase(),r.style.display="none",t.style.display="block"),winner()}
