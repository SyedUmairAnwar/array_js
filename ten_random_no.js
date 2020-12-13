let array = new Array()
for (let i = 0; i < 10; i++) {
    let ran = Math.floor(Math.random() * 900) + 100
    array.push(ran)

}
console.log(array)
array=array.sort()
console.log(array)
let second_small=array[1]
let second_large=array[array.length-2]
console.log("Second small is ",second_small)
console.log("Second large is ", second_large)