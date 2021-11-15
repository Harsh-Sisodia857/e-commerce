var dest = new Date("2021-11-30").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var diff = dest - now;
    var days = Math.floor((diff/(1000*60*60*24)));
    var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((diff%(1000*60*60))/(1000*60));
    var seconds = Math.floor((diff%(1000*60))/1000);
    time_left = days + "d :" + hours + "hrs :" + minutes + "min :" + seconds + "s";
    console.log(time_left);
    document.getElementById("#countdown").innerHTML= time_left;
},1000);