let myName = "Abhishek  "

// console.log(myName.truelength)

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',
    
    getSpiderPower : function() {
        console.log(`Spider power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log('hitesh is present in all objects')
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)
}

// heroPower.hitesh()

// myHeros.hitesh()


// =========================

// Inheritance

const User = {
    name : 'chai',
    email : 'chai@google.com'
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignments : 'JS assignments',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

console.log(Teacher.name)
console.log(TASupport.isAvailable)