/**
 * Created by explorentis on 07.04.15.
 */

/*Vx, Vy - скорости*/
function Planet(name, X, Y, radius, mass, Vx, Vy, color, atmosphere_width, atmosphere_color, type){
    this.name = name;
    this.X = X;
    this.Y = Y;
    this.type = type;
    this.radius = radius;
    this.mass = mass;
    this.speedX = Vx;
    this.speedY = Vy;
    this.color = color;
    this.atmosphere_width = atmosphere_width;
    this.atmosphere_color = atmosphere_color;

    this.move = function (timescale){
        this.X += this.speedX * timescale;
        this.Y -= this.speedY * timescale;
    };

    this.draw_speed = function(focusView_x, focusView_y, scale){
        context.lineWidth = 1;
        drawLine((this.X - focusView_x) * scale + canvas.width / 2,
            (this.Y - focusView_y) * scale + canvas.height / 2,
            (this.X + this.speedX - focusView_x) * scale + canvas.width / 2,
            (this.Y - this.speedY - focusView_y) * scale + canvas.height / 2,
            this.atmosphere_color);
    };

    this.draw_name = function (focusView_x, focusView_y, scale) {
        drawText((this.X + this.radius - focusView_x) * scale + canvas.width / 2,
            (this.Y - this.radius - focusView_y) * scale + canvas.height / 2,
            this.name, this.color, 10);
    };

    // 1. За счет такой реализации условный переход для выбора, что отрисовывать удалось вынести из этой функции:
    this.__drawBorderedCircle__ = function (focusView_x, focusView_y, scale){
        drawBorderedCircle((this.X - focusView_x) * scale + canvas.width / 2,
            (this.Y - focusView_y) * scale + canvas.height / 2,
            this.radius * scale, this.color, this.atmosphere_width * scale, this.atmosphere_color);
    };

    this.__drawCross__ = function (focusView_x, focusView_y, scale){
        drawCross((this.X - focusView_x) * scale + canvas.width / 2, (this.Y - focusView_y) * scale + canvas.height / 2,
            10, this.color);
    };

    this.draw = this.__drawBorderedCircle__;
    // 1.

    this.calc_acceleration = function(objs, my_index, timescale){
        var dVx = 0, dVy = 0;
        for (var i = 0; i != objs.length; i += 1){
            if (i != my_index){
                dVx += ((objs[i].mass / Math.pow(distance(this, objs[i]), 2)) * (objs[i].X - this.X)) / distance(this, objs[i]);
                dVy += ((objs[i].mass / Math.pow(distance(this, objs[i]), 2)) * (objs[i].Y - this.Y)) / distance(this, objs[i]);
            }
        }
        this.speedX += dVx * timescale;
        this.speedY -= dVy * timescale;
    };
}