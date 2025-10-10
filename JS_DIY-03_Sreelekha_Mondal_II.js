// Changing the content of an html element by using its its id.
document.getElementById("fruit_heading").innerHTML = "The list of the FRUITS";

// Creating the array.
const fruit = ["apple", "banana", "grapes", "orange", "Mango", "pineapple", "Maqui"];

// Accessing the element, by the id 'array' .S
const list = document.getElementById("array");

// To display each element individually, the forEach method is used.
fruit.forEach(function (eachFruit)
{

  // For each array element, different <p> element is created dynamically.
  const para = document.createElement("p");

  // Placing the single elements in every paragraph tag.
  para.innerHTML = eachFruit;

  // This <p> elements are the child element of a html element which is accessed by the variable 'list'.
  list.appendChild(para);
})

// Changing the content of an html element by using its its id.
document.getElementById("fruit_heading2").innerHTML = "After Deleting the Last Fruit, the array is: ";

// To delete the last fruit element of the array, the pop() method is used.
fruit.pop();

// Displaying the updated array.
document.getElementById("fruit_del").innerHTML = fruit;

// Changing the content of an html element by using its its id.
document.getElementById("fruit_heading3").innerHTML = "After Adding a Fruit, the array is: ";

// To add a new fruit element in the array, the push() method is sued.
fruit.push("kiwi");

// Displaying the updated array.
document.getElementById("fruit_add").innerHTML = fruit;

// Changing the content of an html element by using its its id.
document.getElementById("fruit_heading4").innerHTML = "Fruit names in Uppercase: ";

// Converting the array elements in a string.
let fruitString = fruit.toString();

// Now converting the string in uppercase.
let fruitUppercase = fruitString.toUpperCase();

// Displaying the string.
document.getElementById("fruit_upper").innerHTML = fruitUppercase;

// Store the character in a variable.
const char = "M";

// Now finding the element starts with 'M' in the array.
const findFruit = fruit.find(element => element.startsWith(char));

// Changing the content of an html element by using its its id.
document.getElementById("fruit_heading5").innerHTML = "Fruit names Starting with M: ";

// Displaying the element.
document.getElementById("fruit_sort").innerHTML = findFruit;
