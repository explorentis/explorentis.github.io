/**
 * Created by explorentis on 07.04.15.
 */

function SolarSystem(bodies){
    this.lenScale = 1;
    this.timeScale = 1;
    this.centerX = 0;
    this.centerY = 0;
    this.bodies = bodies;

    this.move = function(){
        for (var i = 0; i != this.bodies.length; i += 1){
            this.bodies[i].move(this.timeScale);
        }
    };

    this.draw = function(){
        clearScreen();
        for (var i = 0; i != this.bodies.length; i += 1){
            this.bodies[i].draw(this.centerX, this.centerY, this.lenScale);
            this.bodies[i].draw_speed(this.centerX, this.centerY, this.lenScale);
            this.bodies[i].draw_name(this.centerX, this.centerY, this.lenScale);
        }
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

    }
}

