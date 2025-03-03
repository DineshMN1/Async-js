let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// map function
let newArray = array.map((number) => {
    return number * 5;
})

console.log(newArray); // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter function
let newAArray = array.filter((number) => {
    return number <5;
}
)
console.log(newAArray); // [1, 2, 3, 4]

// reduce function
let newwArray = array.reduce((total , number) => {
    return total.concat(`Number ${number}`) 
},[])
console.log(newwArray); // [ 'Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5', 'Number 6', 'Number 7', 'Number 8', 'Number 9', 'Number 10' ]

const users = [ 
    {id: 1, name: "pedro", age: 26 },
    {id: 2,name: "john", age: 22 },
    {id:3,name: "jessica", age: 56 },
    {id:4,name:"rio ferdinand", age:126 },
    {id:5,name: "michael scott", age: 45 },
]

const deleteuser = (name) => {
    return users.filter ((user) => {
        return user.name !== name;
    })

}

console.log(deleteuser("pedro")); // [ { id: 2, name: 'john', age: 22 }, { id: 3, name: 'jessica', age: 56 }, { id: 4, name: 'rio ferdinand', age: 126 }, { id: 5, name: 'michael scott', age: 45 } ]


const changeAge = (id , newAge) =>{
const newArray = users.map((user) => {
    if(user.id === id ) {
        return { id: user.id, name: user.name, age: newAge }
    }
    else {
        return user;
    }   
})
return newArray;
}

console.log(changeAge(2, 30)); // [ { id: 1, name: 'pedro', age: 30 }, { id: 2, name: 'john', age: 22 }, { id: 3, name: 'jessica', age: 56 }, { id: 4, name: 'rio ferdinand', age: 126 }, { id: 5, name: 'michael scott', age: 45 } ]