$(document).ready(function() {
    var nums = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

    $('#collapse' + nums[0]).on('show.bs.collapse', function () {
        
        $('body').removeClass();
        $('body').addClass('bg1');
    });

    $('#collapse' + nums[1]).on('show.bs.collapse', function () {

        $('body').removeClass();
        $('body').addClass('bg2');
    });

    $('#collapse' + nums[2]).on('show.bs.collapse', function () {

        $('body').removeClass();
        $('body').addClass('bg3');
    });

    $('#collapse' + nums[3]).on('show.bs.collapse', function () {

        $('body').removeClass();
        $('body').addClass('bg4');
    });

    $('#collapse' + nums[4]).on('show.bs.collapse', function () {

        $('body').removeClass();
        $('body').addClass('bg5');
    });

    $('#collapse' + nums[5]).on('show.bs.collapse', function () {

        $('body').removeClass();
        $('body').addClass('bg6');
    });

    $('#collapseOne').collapse('hide');
    
});


$(document).ready(function () {
    var obj = document.createElement("audio");
    obj.src = "https://notificationsounds.com/soundfiles/5ef0b4eba35ab2d6180b0bca7e46b6f9/file-sounds-1062-decay.ogg";
    obj.volume = 0.1;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;


    $("#playSound").click(function () {
        obj.play();
        // obj.pause();
    });
});



$(document).ready(function () {
    var obj = document.createElement("audio");
    obj.src = "sound/stem1.mp3";
    obj.volume = 0.4;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;


    $(".button_div").click(function () {
        //obj.play();
        obj.paused ? obj.play() : obj.pause();
        //obj.pause();
    });
});

$(document).ready(function () {
    var obj = document.createElement("audio");
    obj.src = "sound/stem2.mp3";
    obj.volume = 0.4;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;


    $(".button_div_2").click(function () {
        //obj.play();
        obj.paused ? obj.play() : obj.pause();
        //obj.pause();
    });
});

$(document).ready(function () {
    var obj = document.createElement("audio");
    obj.src = "sound/stem3.mp3";
    obj.volume = 0.4;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;


    $(".button_div_3").click(function () {
        //obj.play();
        obj.paused ? obj.play() : obj.pause();
        //obj.pause();
    });
});

$(document).ready(function () {
    var obj = document.createElement("audio");
    obj.src = "sound/stem4.mp3";
    obj.volume = 0.4;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;


    $(".button_div_4").click(function () {
        //obj.play();
        obj.paused ? obj.play() : obj.pause();
        //obj.pause();
    });
});

$(document).ready(function () {
    var obj = document.createElement("audio");
    obj.src = "sound/stem5.mp3";
    obj.volume = 0.4;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;


    $(".button_div_5").click(function () {
        //obj.play();
        obj.paused ? obj.play() : obj.pause();
        //obj.pause();
    });
});

$(document).ready(function () {
    var obj = document.createElement("audio");
    obj.src = "sound/stem6.mp3";
    obj.volume = 0.4;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;


    $(".button_div_6").click(function () {
        //obj.play();
        obj.paused ? obj.play() : obj.pause();
        //obj.pause();
    });
});



$(document).ready(function () {
    $('#toggle').bind("click", function () {
        if ($(this).attr("class") == "button_play")
            $(this).attr("class", "button_pause");
        else
            $(this).attr("class", "button_play");
    });
});

$(document).ready(function () {
    $('#toggle2').bind("click", function () {
        if ($(this).attr("class") == "button_play")
            $(this).attr("class", "button_pause");
        else
            $(this).attr("class", "button_play");
    });
});

$(document).ready(function () {
    $('#toggle3').bind("click", function () {
        if ($(this).attr("class") == "button_play")
            $(this).attr("class", "button_pause");
        else
            $(this).attr("class", "button_play");
    });
});

$(document).ready(function () {
    $('#toggle4').bind("click", function () {
        if ($(this).attr("class") == "button_play")
            $(this).attr("class", "button_pause");
        else
            $(this).attr("class", "button_play");
    });
});

$(document).ready(function () {
    $('#toggle5').bind("click", function () {
        if ($(this).attr("class") == "button_play")
            $(this).attr("class", "button_pause");
        else
            $(this).attr("class", "button_play");
    });
});

$(document).ready(function () {
    $('#toggle6').bind("click", function () {
        if ($(this).attr("class") == "button_play")
            $(this).attr("class", "button_pause");
        else
            $(this).attr("class", "button_play");
    });
});