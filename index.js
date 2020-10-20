// Semana 3 -Sesión 01
// Every
const isAdult = (people) => {
    return people.age >= 18
}

const data = [
    {
        name: 'Daniel',
        age: 27
    },
    {
        name: 'Jose',
        age: 17
    },
    {
        name: 'Pedro',
        age: 20
    }
];

console.log(data.every(isAdult))

// Filter
console.log(data.filter(isAdult))
// Find
console.log(data.find(isAdult))
// Map
console.log(data.map(item => {
    item.age += 1
    return item;
}))