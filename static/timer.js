    var dest = new Date("2021-11-30").getTime();
    var x = setInterval(function(){
        var now = new Date().getTime();
        var diff = dest - now;
        var days = Math.floor((diff/(1000*60*60*24)));
        var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        var minutes = Math.floor((diff%(1000*60*60))/(1000*60));
        var seconds = Math.floor((diff%(1000*60))/1000);
        time_left = days + "d :" + hours + "hrs :" + minutes + "min :" + seconds + "s Left";
        var wid = screen.width;
        var half = wid/2;
        document.getElementById("countdown").innerHTML= time_left;
        document.getElementById("countdown").style.cssText = `
        line-height: 3rem;
        font-size: 1.5rem;
        color:#7F7F7F;
        font-family:Roboto-Medium;
        margin-left:67rem;
`;
    },1000);
