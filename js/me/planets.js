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

    this.impact = function(obj){
        console.log(this.radius, calc_new_radius(this, obj));
        this.radius = calc_new_radius(this, obj);
        if ((this.mass == 0) && (obj.mass == 0)){
            this.speedX += obj.speedX;
            this.speedY += obj.speedY;
        } else {
            this.speedX = (this.mass * this.speedX + obj.mass * obj.speedX) / (this.mass + obj.mass);
            this.speedY = (this.mass * this.speedY + obj.mass * obj.speedY) / (this.mass + obj.mass);
        }
        this.mass += obj.mass;

    };

    // if impact - return index of planet who was stroke.
    this.calc_acceleration = function(objs, my_index, timescale){
        var dVx = 0, dVy = 0, dist;
        for (var i = 0; i != objs.length; i += 1){
            if (i != my_index){
                dist = distance(this, objs[i]);
                dVx += ((objs[i].mass / Math.pow(dist, 2)) * (objs[i].X - this.X)) / dist;
                dVy += ((objs[i].mass / Math.pow(dist, 2)) * (objs[i].Y - this.Y)) / dist;
                if (dist < this.radius + objs[i].radius) {
                    this.impact(objs[i]);
                    return i;
                }
            }
        }
        this.speedX += dVx * timescale;
        this.speedY -= dVy * timescale;
        return -1;
    };

}