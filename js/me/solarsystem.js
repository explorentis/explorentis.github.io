/**
 * Created by explorentis on 07.04.15.
 */

function SolarSystem(bodies){
    this.lenScale = 1;
    this.timeScale = 1;
    this.centerX = 0;
    this.centerY = 0;
    this.bodies = bodies;
    this.cycle_num = 0;

    this.move = function(){
        for (var i = 0; i != this.bodies.length; i += 1){
            this.bodies[i].move(this.timeScale);
        }
        this.cycle_num += 1;
    };

    this.draw = function(){
        clearScreen();
        for (var i = 0; i != this.bodies.length; i += 1){
            this.bodies[i].draw(this.centerX, this.centerY, this.lenScale);
            this.bodies[i].draw_speed(this.centerX, this.centerY, this.lenScale);
            this.bodies[i].draw_name(this.centerX, this.centerY, this.lenScale);
        }
        drawText(0, 15, "timescale: " + this.timeScale, 'Green', 10);
        drawText(0, 30, "lenscale:  " + this.lenScale, 'Green', 10);
        drawText(0, 45, "skipframe:  " + count_skips, 'Green', 10);
        drawText(0, 60, "number of cycles:  " + this.cycle_num, 'Green', 10);
    };

    this.calc_acceleration = function(){
        for (var i = 0; i != this.bodies.length; i += 1){
            this.bodies[i].calc_acceleration(this.bodies, i, this.timeScale);
        }
    };

    this.horizMove = function(value){
        this.centerX += value / this.lenScale;
    };

    this.vertMove = function(value){
        this.centerY += value / this.lenScale;
    };

    this.zoom = function(value){
        this.lenScale *= value;
        for (var i = 0; i != this.bodies.length; i += 1){
            if (this.bodies[i].radius * this.lenScale < 0.7) {this.bodies[i].draw = this.bodies[i].__drawCross__;}
            else {this.bodies[i].draw = this.bodies[i].__drawBorderedCircle__;}
        }
    };
}

