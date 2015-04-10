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
    while (turn_skip != 0){
        solsystem.calc_acceleration();
        solsystem.move();
        turn_skip --;
    }
    solsystem.draw();
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
}

function slow_time(){
    solsystem.timeScale /= 1.2;
}

function set_lenscale(){
    solsystem.lenScale = parseFloat(document.getElementById('lenscale').value);
    solsystem.draw();
}

function set_skip_frames(){
    count_skips = parseInt(document.getElementById('skip_frames').value, 10);
    solsystem.draw();
}