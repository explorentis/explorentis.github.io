/**
 * Created by explorentis on 07.04.15.
 */

solsystem = new SolarSystem(
    [new Planet('Testorium', 275, 300, 10, 300, 1, 0, 'Blue', 2, 'Cyan'),
    new Planet('Testorium2', 325, 300, 10, 100, 0, 2, 'Red', 1, 'Orange')]);
solsystem.centerX -= 400;
solsystem.centerY += 300;
solsystem.draw();

