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
    this.focus_object = 3;

    this.move = function(){
        for (var i = 0; i != this.bodies.length; i += 1){
            this.bodies[i].move(this.timeScale);
        }
        this.cycle_num += 1;
    };

    this.__focus__ = function (x,y) {
        this.centerX = x;
        this.centerY = y;
    };

    this.focus = this.__focus__;

    this.show_info = function(obj, y_for_1){
        drawText(5, y_for_1, "Название объекта: " + obj.type + ' ' + obj.name, 'Green', 10);
        drawText(5, y_for_1 + 15, "Координаты: " + obj.X + 'x' + obj.Y, 'Green', 10);
        drawText(5, y_for_1 + 30, "Скорость: x=" + obj.speedX + ', y=' + obj.speedY, 'Green', 10);
        drawText(5, y_for_1 + 45, "Радиус: " + obj.radius, 'Green', 10);
        drawText(5, y_for_1 + 60, "Масса: " + obj.mass, 'Green', 10);
    };

    this.draw = function(){
        clearScreen();
        this.focus(this.bodies[this.focus_object].X, this.bodies[this.focus_object].Y);
        for (var i = 0; i != this.bodies.length; i += 1){
            this.bodies[i].draw(this.centerX, this.centerY, this.lenScale);
            this.bodies[i].draw_speed(this.centerX, this.centerY, this.lenScale);
            this.bodies[i].draw_name(this.centerX, this.centerY, this.lenScale);
        }
        drawText(5, 15, "Масштаб времени: " + this.timeScale, 'Green', 10);
        drawText(5, 30, "Количество пройденных циклов:  " + this.cycle_num, 'Green', 10);
        this.show_info(this.bodies[this.focus_object] ,60);
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

