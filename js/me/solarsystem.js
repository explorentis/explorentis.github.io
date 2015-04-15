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
    this.focus_object = 0;
    this.last_impact_date = 0;

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
        drawText(5, y_for_1 += 15, "Название объекта: " + obj.type + ' ' + obj.name, 'Green', 10);
        drawText(5, y_for_1 += 15, "Координаты: x=" + (obj.X * distance_suffix) + 'м, y=' + (obj.Y * distance_suffix) + 'м', 'Green', 10);
        drawText(5, y_for_1 += 15, "Скорость: x=" + (obj.speedX * distance_suffix) + 'м, y=' + (obj.speedY * distance_suffix) + 'м', 'Green', 10);
        drawText(5, y_for_1 += 15, "Радиус: " + (obj.radius * distance_suffix) + 'м', 'Green', 10);
        drawText(5, y_for_1 += 15, "Масса: " + (obj.mass * mass_suffix) + ' кг', 'Green', 10);

        drawText(5, y_for_1 += 15, "Ускорение свободного падения: " + obj.g + ' м/с^2');
        drawText(5, y_for_1, "Плотность планеты: " + obj.density + ' кг/м^3');
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
        drawText(5, 45, "Последний раз столкновение было:  " + this.last_impact_date, 'Green', 10);
        drawText(5, 60, "Количество пропускаемых кадров:" + count_skips);
        this.show_info(this.bodies[this.focus_object], 75);
    };

    this.calc_acceleration = function(){
        for (var i = 0; i != this.bodies.length; i += 1){
            killed_planet = this.bodies[i].calc_acceleration(this.bodies, i, this.timeScale);
            if (killed_planet != -1){
                console.log(killed_planet);
                if (this.focus_object == this.bodies.length - 1){this.focus_object--;}
                this.last_impact_date = this.cycle_num;
                this.bodies.splice(killed_planet, 1);
                i--;
            }
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

