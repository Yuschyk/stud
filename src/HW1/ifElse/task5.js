function getRating(rating) {
    let result = '';
    if (rating >= 0 && rating <= 19) {
        result = 'F';
        return result;
    } else if (rating >= 20 && rating <= 39) {
        result = 'E';
        return result;
    } else if (rating >= 40 && rating <= 59) {
        result = 'D';
        return result;
    } else if (rating >= 60 && rating <= 74) {
        result = 'C';
        return result;
    } else if (rating >= 75 && rating <= 89) {
        result = 'B';
        return result;
    } else if (rating >= 90 && rating <= 100) {
        result = 'A';
        return result;
    } else if (rating < 0 || rating > 100) {
        return console.log("Рейтинговый балл введен неправильно");
    }
}