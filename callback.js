/* setTimeout(() => {
    console.log('Merhaba')
}, 2000)

setInterval(() => {
    console.log("saniyede bir calisacagim")
}, 1000)
 */

/* const sayHi = (cb) => {
    cb();
};

sayHi(() => {
    console.log("Merhaba")
}); */

import fetch from 'node-fetch';
import axios from 'axios';

/* fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        console.log("Users yuklendi", users)
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((post) => console.log("post yuklendi", post))
    });
 */

/* // Fetech Ornek
async function getData() {
    const data = await (await fetch("https://jsonplaceholder.typicode.com/users"))
        .json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1"))
        .json();
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2"))
        .json();

    console.log("Users | ", data)
    console.log("Post1 | ", post1)
    console.log("Post2 | ", post2)
}

getData() */

/* // Axios Ornek

async function getData() {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");

    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");

    const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");

    console.log("Users | ", users)
    console.log("Post1 | ", post1)
    console.log("Post2 | ", post2)
}

getData()
 */

//Promises

/* const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if (number === 1) {
            resolve("Comments");
        }
        reject("Bir problem sorunu olsutu!!!")

    });
}

getComments(2)
    .then((data) => console.log(data))
    .catch((e) => console.log(e)); */

/* const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(users);
    });
}

getUsers()
    .then((data) => console.log(data))
    .catch((e) => console.log(e)); */

const users = ["Evrim", "Baris", "Ela", "Arel"];
const objUsers = [{
    name: "Baris",
    age: 42
},
{
    name: "Evrim",
    age: 43
},
{
    name: "Ela",
    age: 12
},
{
    name: "Arel",
    age: 4
}
]
//push
users.push("Leo")
console.log(users)

//clone users.. for array let arr1 = [...users] for object let obj1 = {...users}
let arr1 = [...users]
arr1.push("lea")
console.log(arr1)

//map array
users.map((item) => {
    console.log("Array'den gelenler | ", item)
});

// map object
objUsers.map((item) => {
    console.log("Objeden glenler | ", item.name)
})

//find
/* const result = objUsers.find((item) => item.name === "Baris");
console.log(result);
 */
const resultAge = objUsers.find((item) => item.age > 14);
console.log(resultAge)

//filter
const filtered = objUsers.filter((item) => item.age < 14)
console.log(filtered)

//some (if there is one condition is mathcing with req. : turn true)
const some = objUsers.some((item) => item.age === 4)
console.log(some)

//every (if all conditions are ture :  return true)
const every = objUsers.every((item) => item.age > 2)
console.log(every)

//includes (if array includes item return true)
const meyveler = ["elma", "armut", "muz"]
const isIncluded = meyveler.includes("elma")
console.log(isIncluded)