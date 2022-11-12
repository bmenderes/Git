import { topla, hello, cikar, user, users } from "./newModule.js";
import slugify from 'slugify'

console.log(topla(4, 5))
console.log(cikar(56, 5489))
console.log(hello("baris"))
console.log(user)
console.log(users)

let test = slugify('some string') // some-string
console.log(test)