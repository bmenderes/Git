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

/* fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        console.log("Users yuklendi", users)
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((post) => console.log("post yuklendi", post))
    });
 */

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

getData()