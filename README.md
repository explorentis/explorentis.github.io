# explorentis
Генератор солнечной системы

##TODO
Сделать изменение цвета объектов при столкновении пропорционально массам


## Changelog

### 8
Добавлен поиск объектов по имени
Добавлена генерация случайных объектов (кнопка "Солнечная система с астероидами")
Добавлен вывод даты, когда было последнее столкновение объектов

### 7
Добавлены спутники марса

### 6
Добавлена обработка столкновений с учетом плотности, скорости и массы.

В каталог calculations добавлен вывод формулы для коррекции плотности при столкновении

Исправлена ошибка с направлением вращения нептуна

### 5
Включение, отключение фокуса на планетах, выбор планет и вывод информации о них.

Введение в класс Planet нового свойства - тип (type), который определяет тип объекта (звезда, планета спутник). Пока что он ни на что не влияет, просто выводится на экран.

### 4
Оптимизировал внешний вид странички

### 3
Добавил возможность установить произвольный масштаб и количество пропускаемых кадров

Сделал постоянный фокус на Землю

Вывел отображение масштаба и количества пропускаемых кадров с канвы на страничку

### 2
Добавил стили (да, я знаю, я никакой дизайнер)) )

Добавил луну и сделал фокус в начале на нашу планету

Исправил глюк с цветом плутона

Сделал переключение паузы-воспроизведения одной кнопкой

### 1
Постарался максимально точно воспроизвести модель нашей солнечной системы, но ряд упрощений все-равно допущен (смотри
раздел "Упрощения"

Оптимизация кода, дополнительный функционал.

### 0

Первоначальный коммит - реализация классов планеты и солнечной системы, отрисовка планет в браузере в зависимости от
увеличения и расположения камеры, управление камерой.

Реализовано влияние гравитации

## Упрощения:
1. Считаем мир двухмерным
2. Гравитационная постоянная равна 1
3. Планеты круглые (не элипсы)
4. Отсутствуют пояса (астероидов и Койпера) и группы астероидов
5. Орбиты всех планет лежат в одной плоскости, также нет прецессии (это следствие 2d и сделать с этим я ничего не могу)
6. Перигелии половины планет лежат на одной прямой, а другой половины на другой прямой
7. Не сделаны спутники для Юпитера (67 шт.), Сатурна (62), Урана (27 шт.) Нептуна (14), Плутона (5 шт.). Не уверен, что хочу все это добавлять.
8. Также не реализованы кольца планет и крупные астероиды (например, Церера) - тоже есть сомнения в их необходимости)))