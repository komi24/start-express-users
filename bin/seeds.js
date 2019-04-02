const user_list = [
  {
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": "Trisha Bowers",
    "gender": "female",
    "email": "trishabowers@greeker.com",
    "phone": "+1 (971) 493-2477",
    "address": "369 Agate Court, Sabillasville, Maine, 5155",
    "about": "Nisi excepteur occaecat quis qui et et Lorem culpa veniam anim ea tempor. Qui fugiat eiusmod nisi laborum et. Fugiat non nisi aute dolor in tempor adipisicing duis nisi. Quis sunt cupidatat quis occaecat Lorem Lorem. Aute cillum sint laboris minim.\r\n"
  },
  {
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "name": "Nannie Hull",
    "gender": "female",
    "email": "nanniehull@greeker.com",
    "phone": "+1 (867) 508-3450",
    "address": "241 Halsey Street, Efland, American Samoa, 6482",
    "about": "Do quis tempor qui in ullamco. Ut est pariatur commodo laboris fugiat enim ex adipisicing ullamco. Anim incididunt laborum nulla ex culpa eu velit do sunt sint mollit ex. Fugiat laborum veniam aliquip voluptate amet voluptate do sint incididunt culpa dolore laboris. Dolore quis amet proident veniam exercitation magna duis velit quis ex.\r\n"
  },
  {
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "name": "Milagros Blackburn",
    "gender": "female",
    "email": "milagrosblackburn@greeker.com",
    "phone": "+1 (928) 527-3975",
    "address": "865 Robert Street, Grazierville, Alaska, 2633",
    "about": "Anim nostrud aliqua ea proident est Lorem enim cupidatat qui excepteur quis. Cupidatat consectetur eu nulla dolor excepteur aute qui aute nostrud do. Est fugiat et sint nulla in.\r\n"
  },
  {
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "name": "Barron Curtis",
    "gender": "male",
    "email": "barroncurtis@greeker.com",
    "phone": "+1 (964) 521-2469",
    "address": "252 Barwell Terrace, Felt, New Jersey, 6991",
    "about": "Do laboris commodo excepteur veniam aute deserunt consequat. Nostrud culpa ad laboris aliqua aliqua nisi. Irure est sint cupidatat proident sunt ipsum sunt nostrud irure sint.\r\n"
  },
  {
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "name": "Holloway Rush",
    "gender": "male",
    "email": "hollowayrush@greeker.com",
    "phone": "+1 (987) 483-3472",
    "address": "893 Amity Street, Jacksonwald, Pennsylvania, 1430",
    "about": "Consequat occaecat fugiat sint ullamco in exercitation voluptate nostrud cupidatat ex eu pariatur nisi minim. Ullamco ut aliqua qui magna mollit aute non tempor dolore officia exercitation cupidatat consectetur consequat. Laboris esse anim tempor ex ullamco.\r\n"
  },
  {
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "name": "Gibson Thompson",
    "gender": "male",
    "email": "gibsonthompson@greeker.com",
    "phone": "+1 (833) 415-2971",
    "address": "718 Bay Street, Forbestown, Nebraska, 5625",
    "about": "Enim incididunt proident proident anim velit sunt fugiat non commodo dolor Lorem reprehenderit mollit. Irure deserunt cillum tempor culpa ipsum nisi nulla reprehenderit esse. Ea nostrud irure pariatur est commodo pariatur ea aute duis fugiat reprehenderit enim. Fugiat officia ex exercitation velit officia fugiat ullamco id cillum ipsum elit cillum. Do ad eiusmod proident minim. Excepteur voluptate ad dolore laboris do. Eiusmod minim exercitation adipisicing mollit eu adipisicing culpa laborum duis qui mollit occaecat ex.\r\n"
  },
  {
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "name": "Lelia Murray",
    "gender": "female",
    "email": "leliamurray@greeker.com",
    "phone": "+1 (884) 550-3030",
    "address": "834 Wogan Terrace, Wakulla, Oklahoma, 7630",
    "about": "Pariatur Lorem id irure non laborum. Amet consequat exercitation in incididunt cupidatat aliquip eu adipisicing. Nulla occaecat enim do labore pariatur ullamco occaecat in laboris dolore est. Veniam est ipsum cupidatat elit. Esse anim pariatur deserunt pariatur. Lorem ipsum Lorem enim do adipisicing id et duis proident pariatur velit sit velit. Sit ipsum anim reprehenderit duis culpa officia qui et.\r\n"
  },
  {
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "name": "Walls Holman",
    "gender": "male",
    "email": "wallsholman@greeker.com",
    "phone": "+1 (967) 584-3019",
    "address": "772 Clark Street, Bynum, Kansas, 1628",
    "about": "Laboris cillum irure eu et cillum duis minim laboris ad commodo do nostrud pariatur. Labore aliquip commodo deserunt quis amet officia ut in. Voluptate excepteur duis minim ut ex deserunt eiusmod aute elit aliqua.\r\n"
  },
  {
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": "Maribel Kerr",
    "gender": "female",
    "email": "maribelkerr@greeker.com",
    "phone": "+1 (969) 535-2000",
    "address": "244 Brooklyn Avenue, Dola, Wyoming, 6447",
    "about": "Consequat veniam pariatur dolor irure cillum minim velit commodo. Voluptate quis dolor est irure aute est nisi dolor ad eiusmod cupidatat incididunt. Laborum consectetur cupidatat duis occaecat ex culpa mollit laboris cupidatat. Non ut ad voluptate ex sunt non aute aliquip adipisicing qui dolor consectetur dolore. Laborum commodo in adipisicing eiusmod ut sint et ad laboris qui excepteur proident pariatur. Ea reprehenderit sit dolore ex consequat veniam culpa. Eiusmod incididunt irure nisi velit commodo enim proident elit fugiat et aute voluptate.\r\n"
  },
  {
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "name": "Jackson Potts",
    "gender": "male",
    "email": "jacksonpotts@greeker.com",
    "phone": "+1 (855) 511-2371",
    "address": "568 Strong Place, Southview, Alabama, 7548",
    "about": "Sint minim proident est culpa qui anim occaecat. Duis esse veniam est mollit aliqua culpa est aliquip magna sunt anim. Amet eu Lorem nulla aute duis dolor. Voluptate magna cupidatat sint consectetur sint do anim anim culpa quis irure.\r\n"
  },
  {
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "name": "Vaughn Dominguez",
    "gender": "male",
    "email": "vaughndominguez@greeker.com",
    "phone": "+1 (873) 469-3657",
    "address": "942 Stryker Street, Tedrow, North Carolina, 4163",
    "about": "Eu fugiat aliqua enim magna eu culpa duis elit occaecat incididunt Lorem anim aliqua. Elit nisi voluptate exercitation Lorem. Exercitation dolor sint aliquip non labore. Fugiat minim aute voluptate sunt in consectetur incididunt eu cillum nisi aliqua irure. Culpa id amet consequat nisi cupidatat do in dolor id nisi commodo. Dolore officia officia do sunt do aliqua aute cupidatat eu duis occaecat minim eiusmod et.\r\n"
  },
  {
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "name": "Case Luna",
    "gender": "male",
    "email": "caseluna@greeker.com",
    "phone": "+1 (989) 515-2898",
    "address": "133 Kings Place, Nicut, Florida, 7862",
    "about": "Esse qui occaecat ut culpa incididunt dolor ullamco mollit esse. Dolore pariatur elit elit est labore cillum aliqua consequat dolor laboris nostrud eiusmod ad reprehenderit. Eu deserunt est nulla magna adipisicing aute culpa officia. Anim incididunt sint aute sunt et eu velit ipsum eiusmod est velit amet cillum. Qui nostrud consequat occaecat enim. Enim voluptate excepteur nulla ad minim elit est. Eiusmod adipisicing anim nisi deserunt mollit eiusmod officia ipsum do veniam eiusmod laboris incididunt ullamco.\r\n"
  }
]

const mongoose = require("mongoose")
const User = require("../models/users")

mongoose.connect("mongodb://localhost/test-update")
.then( _ => {
  console.log("Je suis connecté")
  return User.create(user_list)
})
.then(users => {
  console.log(users)
  mongoose.connection.close()
})
.catch(err => {
  console.log("error", err)
  mongoose.connection.close()
})