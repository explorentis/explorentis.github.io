/**
 * Created by explorentis on 07.04.15.
 */

function cam_up(){
    solsystem.vertMove(-50);
    solsystem.draw();
}

function cam_down(){
    solsystem.vertMove(50);
    solsystem.draw();
}

function cam_left(){
    solsystem.horizMove(50);
    solsystem.draw();
}

function cam_right(){
    solsystem.horizMove(-50);
    solsystem.draw();
}

function cam_zoomin(){
    solsystem.zoom(1.1);
    document.getElementById('lenscale').value = solsystem.lenScale;
    solsystem.draw();
}

function cam_zoomout(){
    solsystem.zoom(1 / 1.1);
    document.getElementById('lenscale').value = solsystem.lenScale;
    solsystem.draw();
}

var count_skips = 1;

function increase_skips(){
    count_skips = Math.ceil(count_skips * 1.2);
    document.getElementById('skip_frames').value = count_skips;
    solsystem.draw();
}

function reduce_skips(){
    if (count_skips > 1) count_skips = Math.ceil(count_skips / 1.2);
    document.getElementById('skip_frames').value = count_skips;
    solsystem.draw();
}

function turns_with_skip_graphics(){
    turn_skip = count_skips;
    //console.time('test calculations');
    while (turn_skip != 0){
        solsystem.calc_acceleration();
        solsystem.move();
        turn_skip --;
    }
    //console.timeEnd('test calculations');
    //console.time('test drawing');
    solsystem.draw();
    //console.timeEnd('test drawing');
}

var timer;

function startstop(){
    if (timer == null){
        timer = setInterval(turns_with_skip_graphics, 40);
    }else{
        clearInterval(timer);
        timer = null;
    }
}

function fast_time(){
    solsystem.timeScale *= 1.2;
    if (solsystem.timeScale > 10) document.getElementById('warning').setAttribute('class', 'showed');
    document.getElementById('timescale').setAttribute('value', solsystem.timeScale.toString());
    solsystem.draw();
}

function slow_time(){
    solsystem.timeScale /= 1.2;
    if (solsystem.timeScale > 10) document.getElementById('warning').setAttribute('class', 'hidden');
    document.getElementById('timescale').setAttribute('value', solsystem.timeScale.toString());
    solsystem.draw();
}

function set_lenscale(){
    solsystem.lenScale = parseFloat(document.getElementById('lenscale').value);
    solsystem.draw();
}

function set_skip_frames(){
    count_skips = parseInt(document.getElementById('skip_frames').value, 10);
    solsystem.draw();
}

function turn_focus(){
    if (solsystem.focus == solsystem.__focus__){
        solsystem.focus = function(){};
    }else{
        solsystem.focus = solsystem.__focus__;
    }
}

function focus_previous_body(){
    if (solsystem.focus_object == 0){
        solsystem.focus_object = solsystem.bodies.length - 1;
    }else{
        solsystem.focus_object--;
    }
    solsystem.focus();
    solsystem.draw();
}

function focus_next_body(){
    if (solsystem.focus_object == solsystem.bodies.length - 1){
        solsystem.focus_object = 0;
    }else {
        solsystem.focus_object++;
    }
    solsystem.focus();
    solsystem.draw();
}

function find(){
    var find_str = document.getElementById('find').value;
    for (var i = 0; i != solsystem.bodies.length; i++){
        if (find_str == solsystem.bodies[i].name) solsystem.focus_object = i;
    }
    solsystem.draw();
}