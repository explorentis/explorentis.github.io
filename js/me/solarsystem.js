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
    this.info_width = 0;

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

    this.mk_info_image = function (color, font_size) {
        // создаем подписи:
        var texts = [
            "Масштаб времени: ", "Количество пройденных циклов:  ", "Последний раз столкновение было:  ",
            "Количество пропускаемых кадров:", " ", "Название объекта: ", "Координаты: x=", "Скорость: x=",
            "Радиус: ", "Масса: ", "Ускорение свободного падения: ", "Плотность планеты: "
        ];
        var texts_images = [];
        var max_width = 0;
        for (var i = 0; i != texts.length; i++){
            texts_images[i] = mkTextCanvas(texts[i], color, font_size);
            if (texts_images[i].width > max_width) max_width = texts_images[i].width;
        };
        var info_canvas = document.createElement('canvas');
        var info_context = info_canvas.getContext('2d');
        info_canvas.width = max_width;
        info_canvas.height = font_size + (texts.length - 1) * font_size * 2;

        for (var i = 0; i != texts_images.length ; i++) {
            info_context.drawImage(texts_images[i], 0, i * font_size * 1.5);
        };

        this.info_width = max_width;

        return info_canvas;
    };

    this.info_image = this.mk_info_image('Green', 10);

    this.show_info = function(obj, y_for_1){
        drawText(this.info_width, 100, obj.type + ' ' + obj.name, 'Green', 10);
        drawText(this.info_width, 115, (obj.X * distance_suffix) + 'м, y=' + (obj.Y * distance_suffix) + 'м', 'Green', 10);
        drawText(this.info_width, 130, (obj.speedX * distance_suffix) + 'м, y=' + (obj.speedY * distance_suffix) + 'м', 'Green', 10);
        drawText(this.info_width, 145, (obj.radius * distance_suffix) + 'м', 'Green', 10);
        drawText(this.info_width, 160, (obj.mass * mass_suffix) + ' кг', 'Green', 10);

        drawText(this.info_width, 175, obj.g + ' м/с^2');
        drawText(this.info_width, 190, obj.density + ' кг/м^3');
    };

    this.draw = function(){
        clearScreen();
        this.focus(this.bodies[this.focus_object].X, this.bodies[this.focus_object].Y);
        for (var i = 0; i != this.bodies.length; i += 1){
            this.bodies[i].draw(this.centerX, this.centerY, this.lenScale);
            this.bodies[i].draw_speed(this.centerX, this.centerY, this.lenScale);
            this.bodies[i].draw_name(this.centerX, this.centerY, this.lenScale);
        }
        // неоптимизированное
        drawText(this.info_width, 25, this.timeScale, 'Green', 10);
        drawText(this.info_width, 40, this.cycle_num, 'Green', 10);
        drawText(this.info_width, 55, this.last_impact_date, 'Green', 10);
        drawText(this.info_width, 70, count_skips);

        this.show_info(this.bodies[this.focus_object], 75);

        // оптимизированное
        context.drawImage(this.info_image, 10, 10);
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

