let a = parseInt(prompt("Enter the range"));
let b = parseInt(prompt("enter the table"));
console.log("Range", a)
console.log("Table", b)
for (i=1; i<=a; i++) {
    console.log( i +"*" + b +"=" + i*b);
}