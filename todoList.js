//copying the code to js file to use quokka

var todos = ['Item 1', 'Item 2', 'Item 3'];
// todos;

// 1. Functions group multiple lines of code together under a single name
// 2. when you run a function, you can provide the function with data

// create a funtion that would add "watch the next video in Practical Javascript' to the end of the array
function add (myData) {
   todos.push(myData); // pushes myData 'value' to the end of the todos array
   console.log(myData);
}

add('watch the next video in Practical Javascript');
console.log(todos);

