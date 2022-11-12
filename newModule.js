const hello = (name) => {
    console.log(`Hello ${name}`);
};
const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;
const user = {
    name: "Baris",
    surname: "Menderes"
};

const users = [{
    name: "Baris",
    surname: "Menderes"
}, {
    name: "Evrim",
    surname: "Menderes"
}
];

export { hello, topla, cikar, user, users }