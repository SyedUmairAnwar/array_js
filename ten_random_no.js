let array = new Array()
/**for (let i = 0; i < 10; i++) {
    let ran = Math.floor(Math.random() * 900) + 100
    array.push(ran)

}
console.log(array)
array=array.sort()
console.log(array)
let second_small=array[1]
let second_large=array[array.length-2]
console.log("Second small is ",second_small)
console.log("Second large is ", second_large)**/



/**let user=require("readline-sync")
let user_num=user.question("Enter the number ")
let num=parseInt(user_num)
for (let i=2;i<num;i++){
    while(num%i==0){
        array.push(i)
        num=num/i
    }
}
if (num>2){array.push(num)}
console.log(array)**/



/**array=[-3,0,1,2,-1,1,-2]
for (let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        for(let k=j+1;k<array.length;k++){
            let sum=array[i]+array[j]+array[k]
            if (sum==0){
                console.log("[",array[i],",",array[j],",",array[k],"]")
            }
        }
    }
}**/
//find repeated number

array=[22,45,33,76,44,88,20,11,36,99]
let repeat=new Array()
let j=0
for (let i=0;i<array.length;i++){
    if(array[i]%11==0){
        repeat.push(array[i])
        j++
    }
}
console.log(array)
console.log(repeat)

