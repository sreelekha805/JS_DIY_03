// Creating the array.
const fruit = ["apple", "banana", "grapes", "Mango", "orange"];

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

// To delete the last fruit element of the array, the pop() method is used.
fruit.pop();

// Displaying the updated array.
document.getElementById("fruit_del").innerHTML = fruit;

// To add a new fruit element in the array, the push() method is sued.
fruit.push("Melon");

// Displaying the updated array.
document.getElementById("fruit_add").innerHTML = fruit;

// Calling the function to convert all the elements of the array into uppercase.
myUppercase();

// The function to convert all the elements of the array into uppercase individually.
function myUppercase ()
{

  // storing the length of the array in a variable.
  let length = fruit.length;

  // Initialized the loop counter, to control the loop.
  let j = 0;

  // When the length of the array will be greater than the loop counter, the loop will be executed.
  while (j < length)  
  {

    /*
      Converting each element to the uppercase by its index number and then stored it in a variable. Because if we only convert the elements and then want to display the "fruit[j]", it will give the previous output of the element.
    */
    let uppercaseElement = fruit[j].toUpperCase();

    // Accessing an html element with its id to treat it as a parent element.
    let uppercaseParent = document.getElementById("fruit_upper");

    // creating elements dynamically to display the array elements individually.
    let uppercaseChild = document.createElement("p");

    // To display the elements.
    uppercaseChild.innerHTML = uppercaseElement;
    uppercaseParent.appendChild(uppercaseChild);

    // Updating the loop counter.
    j = (j + 1);
  }
}

// Calling the function to find element starts with 'M' from all the elements of the array.
myFind();

// This function is written to search the element with first letter 'M'.
function myFind ()
{
  // storing the length of the array in a variable.
  let length = fruit.length;

  // Initialized the loop counter, to control the loop.
  let i = 0;
  while (i < length) 
  {
    // When the element will start with 'M' this if will be executed. To store that element.
    if (fruit[i].startsWith('M'))
    {
      // Accessing an html element with its id to treat it as a parent element.
      let withMparent = document.getElementById("fruit_sort");

      // Create an element to store the element.
      let displayM = document.createElement("p");

      // Changing the content, adding the array element starts with 'M' to the html element. 
      displayM.innerHTML = fruit[i];
      withMparent.appendChild(displayM);
    }

    // Updating the loop counter.
    i = (i + 1);
  }
}



