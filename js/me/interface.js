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

function turn(){
    solsystem.calc_acceleration();
    solsystem.move();
    solsystem.draw();
}

var timer;

function start(){
    timer = setInterval(turn, 40);
}

function stop(){
    clearInterval(timer);
}