const marvel_heros = ['thor', 'Ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros)

// console.log(marvel_heros) not good practice

//concate work on new array 

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...dc_heros, ...marvel_heros]

// console.log(all_new_heros)

const another_array = [1,2,3,4,[4,5,6],7,[6,7,[4,5]]]


const real_another_arrray = another_array.flat(3)//depth dena padega

console.log(real_another_arrray);

console.log(Array.from('hello')); //aray mai convert ho jayegi yeh string

console.log(Array.isArray('hello'))

// when we convert object into array directly it returns empty array but if we ask for a key or value array it returns easily

let a = 12
let b = 13
let c = 14

console.log(Array.of(a,b,c))
