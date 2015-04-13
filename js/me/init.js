/**
 * Created by explorentis on 07.04.15.
 */

/* масса x 10^24 кг, расстояние x 10^3 км */
/* данные взяты отсюда: http://galspace.spb.ru/xaracteris.html */
solsystem = new SolarSystem(/*   X, Y, радиус,  масса, Vx, Vy */
    [   new Planet('Солнце', 0, 0, 695.8, 1988920, 0, 0, 'Yellow', 10, 'Red', 'звезда'),
        new Planet('Меркурий', 46000, 0,  4.879 / 2, 0.33,     0, calc_perihelion_speed(1988920, 0.205, 69800), 'Brown', 0, 'Black', 'планета'),
        new Planet('Венера', -107500, 0, 12.104 / 2, 4.87,     0, -calc_perihelion_speed(1988920, 0.007, 108900), 'Cornsilk', 0, 'Brown', 'планета'),
        new Planet('Земля',   0, 147100, 12.756 / 2, 5.97,     calc_perihelion_speed(1988920, 0.017, 152100), 0, 'Blue', 0.1, 'Cyan', 'планета'),
            new Planet('Луна', 0, 147100 + 363, 3.475 / 2, 0.073,  calc_perihelion_speed(1988920, 0.017, 152100) + calc_perihelion_speed(5.97,0.055,406), 0, 'Yellow', 0, 'Grey', 'спутник'),
            new Planet('А-1', 0, 147100 - 363, 0.01, 0,  calc_perihelion_speed(1988920, 0.017, 152100) - calc_perihelion_speed(5.97,0.055,406), 0, 'Grey', 0, 'Grey', 'астероид'),
            new Planet('А-2', 0, 147100 - 363.5, 0.01, 0,  calc_perihelion_speed(1988920, 0.017, 152100) - calc_perihelion_speed(5.97,0.055,406), 0, 'Grey', 0, 'Grey', 'астероид'),
        new Planet('Марс',   0, -206600,  6.794 / 2,0.642,     -calc_perihelion_speed(1988920, 0.094, 249200), 0, 'Orange', 0, 'Cyan', 'планета'),
            new Planet('Фобос', 0, -206600 - 9.2356, 0.0111, 0.00000001072, -calc_perihelion_speed(1988920, 0.094, 249200)-calc_perihelion_speed(0.642, 0.01, 9.3772), 0, 'Cornsilk', 0, 'Cornsilk', 'спутник'),
            new Planet('Деймос', 0, -206600 + 23.458,0.0062, 0.00000000148, -calc_perihelion_speed(1988920, 0.094, 249200)+calc_perihelion_speed(0.642, 0.0002, 23.458),0 , 'Brown', 0, 'Cornsilk', 'спутник'),
        new Planet('Юпитер',  740500, 0,  142.984 / 2, 1899,   0, calc_perihelion_speed(1988920, 0.049, 816600), 'Brown', 0, 'White', 'планета'),
        //            new Planet('Метида', 740500 + 127.974, 0, 0.0215, 0.000000036, 0, calc_perihelion_speed(1988920, 0.049, 816600)-calc_perihelion_speed(1899, 0.0002, 128.026), 'White', 0, 'Grey', 'спутник'),
        new Planet('Сатурн',-1352600, 0,  120.536 / 2,  568,   0, -calc_perihelion_speed(  1988920, 0.057,1514500), 'Wheat', 0, 'White', 'планета'),
        new Planet('Уран',    0, 2741300,  51.118 / 2,   86.8, calc_perihelion_speed(1988920,0.046,3003600), 0, 'Cyan', 0, 'Cyan', 'планета'),
        new Planet('Нептун',  0,-4444500,  49.528 / 2,  102,   -calc_perihelion_speed(1988920,0.011,4545700), 0, 'Blue', 0, 'Cyan', 'планета'),
        new Planet('Плутон',  4435000, 0, 2.390 / 2, 0.0125, 0, calc_perihelion_speed(1988920,0.244,7304300), 'Grey', 0, 'Grey', 'планета')
    ]);

//solsystem.zoom(0.00005);
count_skips = 300;
solsystem.zoom(0.1);
solsystem.draw();
