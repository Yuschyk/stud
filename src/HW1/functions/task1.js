function dayOfTheWeek(num) {
    let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Субота", "Воскресенье"];
        if (num >= 1 && num <= 7) {
            let ourDay = days[num - 1];

            return ourDay;
        }
        if(num < 1 && num  > 7) {
            return undefined;
        }
}