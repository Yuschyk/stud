function getString(num) {
if (num < 0) {
    console.log("Минусовое число");
}



var ourNumber = new Array();
switch (Math.floor(num / 100)) {
    case 1:
        ourNumber.push("Сто ");
        break;

    case 2:
        ourNumber.push("Двести ");
        break;

    case 3:
        ourNumber.push("Триста ");
        break;

    case 4:
        ourNumber.push("Четыреста ");
        break;

    case 5:
        ourNumber.push("Пятсот ");
        break;

    case 6:
        ourNumber.push("Шестьсот ");
        break;

    case 7:
        ourNumber.push("Семьсот ");
        break;

    case 8:
        ourNumber.push("Восемьсот ");
        break;

    case 9:
        ourNumber.push("Девятьсот ");
        break;
}

switch (Math.floor((num % 100) / 10)) {
    case 2:
        ourNumber.push("двадцать ");
        break;

    case 3:
        ourNumber.push("тридцать ");
        break;

    case 4:
        ourNumber.push("сорок ");
        break;

    case 5:
        ourNumber.push("пятдесят ");
        break;

    case 6:
        ourNumber.push("шестьдесят ");
        break;

    case 7:
        ourNumber.push("Семьдесят ");
        break;

    case 8:
        ourNumber.push("Восемьдесят ");
        break;

    case 9:
        ourNumber.push("Девяносто ");
        break;
}

if (num % 100 >= 10 && num % 100 < 20) {
    switch (num % 100) {
        case 10:
            ourNumber.push("десять");
            break;

        case 11:
            ourNumber.push("одинадцать");
            break;

        case 12:
            ourNumber.push("двенадцать");
            break;

        case 13:
            ourNumber.push("тринадцать");
            break;

        case 14:
            ourNumber.push("четырнадцать");
            break;

        case 15:
            ourNumber.push("пятнадцать");
            break;

        case 16:
            ourNumber.push("шестнадцать");
            break;

        case 17:
            ourNumber.push("семнадцать");
            break;

        case 18:
            ourNumber.push("восемнадцать");
            break;

        case 19:
            ourNumber.push("девятнадцать");
            break;
    }
} else {
    switch (num % 10) {
        case 0:
            ourNumber.push("ноль");
            break;

        case 1:
            ourNumber.push("один");
            break;

        case 2:
            ourNumber.push("два");
            break;

        case 3:
            ourNumber.push("три");
            break;

        case 4:
            ourNumber.push("четыре");
            break;

        case 5:
            ourNumber.push("пять");
            break;

        case 6:
            ourNumber.push("шесть");
            break;

        case 7:
            ourNumber.push("семь");
            break;

        case 8:
            ourNumber.push("восемь");
            break;

        case 9:
            ourNumber.push("девять");
            break;
    }
}
    var n =ourNumber;
    var a = n.join(' ');
    return a;
}
