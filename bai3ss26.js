let arr = [1, 2, 3, 4, 2, 1, 3, 5, 6, 2]; 
let value = parseInt(prompt("Nhập vào một số nguyên bất kỳ")); 
let count = arr.filter(x => x === value).length; 

console.log('Số', value, 'xuất hiện', count, 'lần trong mảng.');
