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