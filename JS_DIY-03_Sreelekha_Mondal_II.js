// Creating the array.
const fruit = ["apple", "banana", "grapes", "Mango", "orange"];

dispEachFruit();

// To display each element individually, the forEach method is used.
function dispEachFruit ()
{
  let size = fruit.length;
  let m = 0;
  while (m < size)
  {
    // Accessing the element, by the id 'array' .
    const list = document.getElementById("array");

    // For each array element, different <p> element is created dynamically.
    const para = document.createElement("p");

    // Placing the single elements in every paragraph tag.
    para.innerHTML = fruit[m];

    // This <p> elements are the child element of a html element which is accessed by the variable 'list'.
    list.appendChild(para);

    m = (m + 1);
  }
}

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

    // Take the elements one by one in a variable
    let element = fruit[j];

    // Take the size of one element.
    let elementSize = element.length;

    // Taking another variable to store the uppercased element.
    let uppercaseElement = '';

    // Initialized the loop counter to change all the charater of the element into upper case.
    let k = 0;
    while (k < elementSize)
    {

      // Taking the characters one by one of an element in a variable.
      let eachChar = element[k];

      // Chacking the character is in lowercase or not.
      if (eachChar >= '97')
      {
        if (eachChar <= '122')
        {
          // Converting the character into uppercase.
          eachChar = (eachChar - 32);
        }
      }
    
      // Creating the new uppercased element.
      uppercaseElement = (uppercaseElement + eachChar);

      // updating the loop counter.
      k = (k + 1);
    }

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

    let str = fruit[i];

    // When the element will start with 'M' this if will be executed. To store that element.
    if (str[0] === 'M')
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



