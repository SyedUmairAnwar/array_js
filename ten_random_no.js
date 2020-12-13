let array = new Array()
for (let i = 0; i < 10; i++) {
    let ran = Math.floor(Math.random() * 900) + 100
    array.push(ran)

}
let large = 1
let second_large = 0
let small = 999
let second_small = 998
for (let i = 0; i < array.length; i++) {
    if (array[i] > large) {
        second_large = large
        large = array[i]
    }
    else if (array[i] > second_large && array[i] != large) {
        second_large = array[i]
    }
    else if (array[i] < small) {
       second_small = small
        small = array[i]
    }
    else if (array[i] < second_small && array[i] != small) {
        second_small = array[i]
    }
}
console.log(array)
console.log("Second large is ", second_large)
console.log("Second small is ",second_small)