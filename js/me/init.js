/**
 * Created by explorentis on 07.04.15.
 */

/* масса x 10^24 кг, расстояние x 10^3 км */
/* данные взяты отсюда: http://galspace.spb.ru/xaracteris.html */
solsystem = new SolarSystem(/*   X, Y, радиус,  масса, Vx, Vy */
    [   new Planet('Солнце', 0, 0, 695.8, 1988920, 0, 0, 'Yellow', 10, 'Red'),
        new Planet('Меркурий', 46000, 0,  4.879 / 2, 0.33,     0, calc_perihelion_speed(1988920, 0.205, 69800), 'Brown', 0, 'Black'),
        new Planet('Венера', -107500, 0, 12.104 / 2, 4.87,     0, -calc_perihelion_speed(1988920, 0.007, 108900), 'Cornsilk', 0, 'Brown'),
        new Planet('Земля',   0, 147100, 12.756 / 2, 5.97,     calc_perihelion_speed(1988920, 0.017, 152100), 0, 'Blue', 0.1, 'Cyan'),
        new Planet('Марс',   0, -206600,  6.794 / 2,0.642,     -calc_perihelion_speed(1988920, 0.094, 249200), 0, 'Orange', 0, 'Cyan'),
        new Planet('Юпитер',  740500, 0,  142.984 / 2, 1899,   0, calc_perihelion_speed(1988920, 0.049, 816600), 'Brown', 0, 'White'),
        new Planet('Сатурн',-1352600, 0,  120.536 / 2,  568,   0, -calc_perihelion_speed(  1988920, 0.057,1514500), 'Wheat', 0, 'White'),
        new Planet('Уран',    0, 2741300,  51.118 / 2,   86.8, calc_perihelion_speed(1988920,0.046,3003600), 0, 'Cyan', 0, 'Cyan'),
        new Planet('Нептун',  0,-4444500,  49.528 / 2,  102,   calc_perihelion_speed(1988920,0.011,4545700), 0, 'Blue', 0, 'Cyan'),
        new Planet('Плутон',  4435000, 0, 2.390 / 2, 0.0125, 0, calc_perihelion_speed(1988920,0.244,7304300), 0, 'Grey', 0, 'Grey')]);
solsystem.zoom(0.00005);
count_skips = 500;
solsystem.draw();
