let arr = [1, 2, 'a', 3.5, 'b', 4]; 
let value = prompt("Nhập vào giá trị bất kỳ"); 

let index = arr.indexOf(value); 
if (index !== -1) {
    console.log('Phần tử', value, 'nằm ở vị trí', index, 'trong mảng.');
} else {
    console.log('Phần tử không tồn tại trong mảng.');
}
