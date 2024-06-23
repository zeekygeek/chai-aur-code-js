// Note :: objectname['key'] => value of that key


const map = new Map();

map.set("name", "abhay");
map.set("country", "india");
map.set("lang", "hindi");

// console.log(map)

// console.log(map.has('abhay'))
// console.log(map.values())

// console.log(map.get('lang'))

for (const [key, value] of map) {
  //destructing of array is done using [key, value]
  //     console.log(key, ':-', value);
}

// ====================================================

const tryObj = {
  js: "javascript",
  py: "python",
  cpp: "c++",
  rb: "ruby",
};

for (const key in tryObj) {
//   console.log(`${key} shortcut is for ${tryObj[key]}`);
}

// ====================================================

const programming = ['js','rb','py','java','cpp']

for (const key in programming) {
  // console.log(key)
}


//===================================================== 

const greetings = 'hitesh'

for (const greet of greetings) {
  console.log(greet)
}

