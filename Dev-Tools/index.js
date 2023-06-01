const text = document.querySelector('p')

const animals = [
    {
name: 'dog',
danger:  true
},
{
    name: 'cat',
    danger:false
}
]

function addToP(){
    text.style.backgroundColor = 'crimson';
    text.style.fontSize = '20px';
}
// Basic 
console.log("hello world!")

// Interpolation
// Can use interpolation method to console log or can use ES6 interpolation method(using backtick notation)
console.log("hello world! %s", 'hello')

// Can also style the text with interpolation method
console.log("%c hello world!", 'font-size : 30px')

// warning
console.warn("This is a warning message")

// Error
console.error("this is a error message")

// Info
console.info("This is a info message")

// Testing
console.assert(text.classList.contains('text'), 'This is a text message and the test has falied')

// clearing
console.clear()

// Viewing DOM elements //This method doesnot work anymore
// console.log(p)
// console.dir(p)

// Grouping together
animals.forEach(animal => {
    console.groupCollapsed(`${animal.name}`)
    console.log(`Hello this is a ${animal.name}`)
    console.log(`${animal.name} is  dangerous ${animal.danger}`)
    console.groupEnd(`${animal.name}`)
})

// Counting
console.count('count')
console.count('count')
console.count('count')
console.count('count')
console.count('count')
console.count('dont count')
console.count('dont count')
console.count('dont count')
console.count('count')
console.count('count')
console.count('dont count')
console.count('dont count')

console.clear()

// Timing
console.time('fetching data')
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
.then(data => data.json()).then(data => {
    console.timeEnd('fetching data')
    console.log(data)
})

console.table(animals)