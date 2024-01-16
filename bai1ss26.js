let arr = [1, 2, 'a', 3.5, 'b', 4]; 
let integers = arr.filter(Number.isInteger); 

if (integers.length > 0) {
    console.log('Các số nguyên trong mảng là: ', integers);
} else {
    console.log('Trong mảng không tồn tại số nguyên');
}
