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

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(users);
    });
}

getUsers()
    .then((data) => console.log(data))
    .catch((e) => console.log(e));