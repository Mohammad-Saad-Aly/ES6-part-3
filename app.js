// function add(a,b){
//     return a+b
// }

// function sub(a,b){
//     return a-b
// }

// function mul(a,b){
//     return a*b
// }

// function calc(a,b,fn){
//     return fn(a,b)
// }

// console.log(calc(1,2))

// let arr = [
//     {name : "saad" , age : 20},
//     {name : "Ghous bhai", age : 21}
// ]
// let ok = arr.filter(a => a.age < 19)
// console.log(ok)

// let arr = [2, 4, 6, 8, 10]
// console.log(arr)
// let ok = arr.map((a) => a * 10)
// console.log(ok)


// function Cons(name,age){
//     this.name = name,
//     this.age = age 
// }

// let fn = new Cons("Saad",21)
// let fn1 = new Cons("hassan",22)
// let fn2 = new Cons("radfeh",21)
// let fn3 = new Cons("Saad",21)
// let fn4 = new Cons("Saad",21)

// console.log(fn,fn1,fn2)


// class Cons{
//     constructor(name,age){
//         this.name = name,
//         this.age = age 
//     }
// }

// class Some extends Cons{
//     constructor(name,age,roll){
//         super(name,age,roll)
//         this.roll = roll
//     }

// }

// let ok = new Some("Saad",21,"CSC-20S-088")
// console.log(ok)

// let ok = new Cons("Saad",21)
// console.log(ok)





// var names = ["ghous","saad"]
// var rolls = ["ghous","saad"]

// let student = {
//     name: 'ghous',
//     email: 'ghous@gmail.com',
//     phone: 21212121,
//     roll: 514254
// }

// document.write(student.name)
// document.write(student.email)


// function abc(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// console.log(abc(5)(5)(5))

// hosting
// hoisting


// var name = "ghous";

// function name() {

// }

// console.log(a)

// var a = "hallo";

// console.log(a)

// function abc() {
//     var a;
//     console.log(a)

// }

// console.log(a)

// let a;

// abc()



// let abc = () => {
//     alert("hello")
// }


// function abc(name) {
//     alert(name)
// }

// var btn = document.getElementById("mybtn");

// btn.addEventListener('click',abc.bind(this,"ghous"))




// console.log("hello")

// setTimeout(() => {
//     console.log("world")
// }, 2000)

// console.log("Saylani")


// var data;
// function getData(sendData) {
//     setTimeout(() => {
//         data = "Hello World";
//         sendData(data)
//     }, 2000)
// }


// function abc(a) {
//     getData((res) => {
//         console.log(res)
//     })

// }
// abc()

// function foo() {
//     getData((res) => {
//         console.log(res)
//     })
// }

// foo()



function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data = "Hello World";
            if (false) {
                resolve(data)
            } else {
                reject("Error arha hai bhai")
            }
        }, 2000)
    })
}


async function foo() {
    try {

        // let res = await getData()
        console.log(res)
        console.log("Han bhai data mil gay")
    }
    catch(err){
        console.log(err)
    }
}

foo()