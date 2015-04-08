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
    solsystem.draw();
}

function cam_zoomout(){
    solsystem.zoom(1 / 1.1);
    solsystem.draw();
}

var count_skips = 1;

function increase_skips(){
    count_skips++;
}

function reduce_skips(){
    if (count_skips > 1) count_skips--;
}

function start_with_skip(){
    clearInterval(timer);
    timer2 = setInterval(turns_with_skip_graphics, 40);
}

function stop_skipper(){
    clearInterval(timer2);
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

function turn(){
    solsystem.calc_acceleration();
    solsystem.move();
    solsystem.draw();
}

var timer, timer2;

function start(){
    clearInterval(timer2);
    timer = setInterval(turn, 40);
}

function stop(){
    clearInterval(timer);
}

function fast_time(){
    solsystem.timeScale *= 1.2;
}

function slow_time(){
    solsystem.timeScale /= 1.2;
}