let arr = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7]; 
let target = parseInt(prompt("Nhập vào một số bất kỳ")); 

let subArr = []; 
let sum = 0; 

for (let i = 0; i < arr.length; i++) {
    sum = 0;
    subArr = [];
    for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        subArr.push(arr[j]);
        if (sum === target) {
            break;
        }
    }
    if (sum === target) {
        break;
    }
}

if (sum === target) {
    console.log('Mảng con đầu tiên có tổng các phần tử bằng với số vừa nhập là: ', subArr);
} else {
    console.log('Không có mảng con thỏa mãn');
}
