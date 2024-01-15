let n = +prompt("Nhập số nguyên dương bất kỳ");
let sum = 0;
for(let i=1; i<n; i++){
    sum += i;
}
if(sum===n){
    console.log("Tổng các số được in ra là: " + sum);
} else{
    console.log("Tổng các số được in ra là: " + (sum-1));
}