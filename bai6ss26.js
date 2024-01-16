let arr = [1, -2, 3, -4, -5, 6, -7, 8, 9, -10]; 

let sortedArr = arr.sort((a, b) => {
    if (a < 0 && b > 0) {
        return -1;
    } else if (a > 0 && b < 0) {
        return 1;
    } else {
        return 0;
    }
});

console.log('Mảng sau khi di chuyển các phần tử âm lên đầu, phần tử dương về cuối: ', sortedArr);
