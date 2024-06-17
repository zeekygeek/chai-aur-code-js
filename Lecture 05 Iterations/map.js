const map = new Map ()

map.set('name', 'abhay')
map.set('country', 'india')
map.set('lang','hindi')

console.log(map.has('abhay'))

console.log(map.values())

console.log(map.get('name','name'))



const tryObj = {
    name : 'abhay',
    country : 'india',
    lang : 'hindi'
}
// console.log(Object.values(tryObj).length)
// console.log(Object.values(tryObj))
// console.log(Object.hasOwnProperty('abhay'))

// console.log(tryObj.name)
// console.log(tryObj['name'])