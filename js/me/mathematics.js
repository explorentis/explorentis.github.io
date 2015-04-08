/**
 * Created by explorentis on 07.04.15.
 */

function distance(a, b){
    return Math.sqrt((a.X - b.X) * (a.X - b.X) + (a.Y - b.Y) * (a.Y - b.Y));
}

function distance_square(a, b){
    return (a.X - b.X) * (a.X - b.X) + (a.Y - b.Y) * (a.Y - b.Y);
}
