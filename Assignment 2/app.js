// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function closure(num){
    return function(num2){
        console.log(num+num2)
    }
}

let uzair =closure(10)
uzair(5)
let func2 =closure(10)
func2(10)







// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function searchVal(arr, val) {
    if (arr[0] === val) {
        // console.log("True");
        return true;
    } else if (arr.length === 0) {
        // console.log("False")
        return false;
    } else {
      return searchVal(arr.slice(1), val);
    }
}
console.log(searchVal([1,2,3,4,5,6],7))
console.log(searchVal([1,2,3,4,5,6],10))
console.log(searchVal([1,2,3,4,5,6],5))







// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.
function addParagraph(text) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    const body = document.querySelector('body');
    body.appendChild(newParagraph);
}

addParagraph("I am JOD")
  







// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.
function addItem(item) {
    const newItem = document.createElement('li');
    newItem.textContent = item;
    const unorderedlist = document.querySelector('#my-list');
    unorderedlist.appendChild(newItem);
}

addItem("Item1")
addItem("Item2")
addItem("Item3")






// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.
function changeColor(element,color){
    const targetElement = document.querySelector(`#${element}`)
    targetElement.style.backgroundColor = color
}
changeColor('my-list','skyblue')








// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.
function saveObjectToLocalStorage(key, object) {
    const obj = JSON.stringify(object);
    localStorage.setItem(key, obj);
  }
obj1 ={
    name: 'Uzair',
    roll: '19b'
}
  
obj2 ={
    name: 'Bahadur',
    roll: '19b'
}

saveObjectToLocalStorage(1,obj1);
saveObjectToLocalStorage(2,obj2);











//   7. Write a function that retrieves an object from localStorage. The function
//   should take one argument, which is a string representing the key used to
//   store the object. The function should return the object.
function retrieveObject(key) {
    const obj = localStorage.getItem(key);
    const deserializedObj = JSON.parse(obj);
    return deserializedObj;
}

console.log(retrieveObject(1))








//   8. Write a function that takes an object and saves each property to
//   localStorage using the property name as the key and the property value as
//   the value. The function should also retrieve the object from localStorage
//   and return it as a new object.
  
function saveObjectToLocalStorage(obj) {
    // Saving each property of the object to localStorage using the property name as the key
    for (const prop in obj) {
      localStorage.setItem(prop, obj[prop]);
    }
  
    // Retrieving the object from localStorage and return it as a new object
    const newObj = {};
    for (const key in localStorage) {
      newObj[key] = localStorage.getItem(key);
    }
  
    return newObj;
}
  
const myObj = {
    name: "Uzair",
    age: 22,
    job: "Full Stack Developer"
};


console.log(saveObjectToLocalStorage(myObj));
