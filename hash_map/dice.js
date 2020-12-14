/**let map = new Map()
let onec = 0, twoc = 0, threec = 0, fourc = 0, fivec = 0, sixc = 0
while (onec < 10 && twoc < 10 && threec < 10 && fourc < 10 && fivec < 10 && sixc < 10) {
    let ran = Math.floor(Math.random() * 10) % 6 + 1
    switch (ran) {
        case 1: onec++
            break
        case 2: twoc++
            break
        case 3: threec++
            break
        case 4: fourc++
            break
        case 5: fivec++
            break
        case 6: sixc++
            break
    }
    map.set(1, onec)
    map.set(2, twoc)
    map.set(3, threec)
    map.set(4, fourc)
    map.set(5, fivec)
    map.set(6, sixc)
}
console.log(map)
let arr = Array.from(map.values())
console.log(arr)
let small = 100
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
        small = arr[i]
    }
}
console.log(small)
console.log("the minimum is ", small, "by ", 10 - small)
for(let key in map.keys){
    console.log(key)
}**/
let user = require('readline-sync')
let map = new Map()
let onec = 0, twoc = 0, threec = 0, fourc = 0, fivec = 0, sixc = 0, sevenc = 0, eightc = 0, ninec = 0, tenc = 0, elevenc = 0, tewelvec = 0
for (let i = 0; i < 50; i++) {
    let user_ip = user.question("Enter the month ")
    let user_ip1 = user.question("Enter the year ")
    let month = parseInt(user_ip)
    let year = parseInt(user_ip1)
    if ((month > 0 && month < 13) && (year == 92 || year == 93)) {
        switch (month) {
            case 1: onec++
                break
            case 2: twoc++
                break
            case 3: threec++
                break
            case 4: fourc++
                break
            case 5: fivec++
                break
            case 6: sixc++
                break
            case 7: sevenc++
                break
            case 8: eightc++
                break
            case 9: ninec++
                break
            case 10: tenc++
                break
            case 11: elevenc++
                break
            case 12: tewelvec++
                break
        }
        map.set(1, onec)
        map.set(2, twoc)
        map.set(3, threec)
        map.set(4, fourc)
        map.set(5, fivec)
        map.set(6, sixc)
        map.set(7, sevenc)
        map.set(8, eightc)
        map.set(9, ninec)
        map.set(10, tenc)
        map.set(11, elevenc)
        map.set(12, tewelvec)
    }
    else {
        i--
        console.log("Please provide the month between 0-12and year 92-93")
    }

}
console.log(map)

