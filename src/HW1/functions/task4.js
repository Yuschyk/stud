function distance(x1, y1, x2, y2) {

    let i = Math.pow((x2 - x1), 2);
    let j = Math.pow((y2 - y1), 2);
    let result = (Math.sqrt(i + j));
    return result.toFixed(2);
}