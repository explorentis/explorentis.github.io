/**
 * Created by explorentis on 07.04.15.
 */

function distance(a, b){
    return Math.sqrt((a.X - b.X) * (a.X - b.X) + (a.Y - b.Y) * (a.Y - b.Y));
}

/**
 * Скорость в перигелии:
 * V = sqrt(G*M*(1+e)/(a*(1-e))), где G - гравитационная постоянная, M - масса тела, вокруг которого происходит вращение
 * e - эксцентриситет, a - большая полуось
 * */
function calc_perihelion_speed(mass, e, aphelion){
    return Math.sqrt(mass * (1 + e)/(aphelion * (1 - e)))
}

/**
 * Вычисление радиуса новой планеты после соударения (см. calculations/avg_density.odt)
 * */
function calc_new_radius(obj1, obj2){
    if ((obj1.radius == 0) && (obj2.radius == 0)){
        return 0;
    }
    if ((obj1.mass == 0) && (obj2.mass == 0)){
        return (obj1.radius > obj2.radius) ? obj1.radius : obj2.radius;
    }
    return obj1.radius * obj2.radius * Math.pow((obj1.mass + obj2.mass) * (obj1.mass + obj2.mass) / (obj1.mass * obj1.mass * Math.pow(obj2.radius, 3) + obj2.mass * obj2.mass * Math.pow(obj1.radius, 3)), 1/3)
}

// http://javascript.ru/Math.random
// использование Math.round() даст неравномерное распределение!
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// http://javascript.ru/Math.random
function getRandomArbitary(min, max)
{
    return Math.random() * (max - min) + min;
}

