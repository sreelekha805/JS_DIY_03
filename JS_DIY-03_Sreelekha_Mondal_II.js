// Creating the array.
const fruit = ["apple", "banana", "grapes", "Mango", "orange"];

// To display each element individually, the forEach method is used.
function dispEachFruit (list, arr)
{
  let size = arr.length;
  let m = 0;
  while (m < size)
  {

    // For each array element, different <p> element is created dynamically.
    const para = document.createElement("p");

    // Placing the single elements in every paragraph tag.
    para.innerHTML = arr[m];

    // This <p> elements are the child element of a html element which is accessed by the variable 'list'.
    list.appendChild(para);

    m = (m + 1);
  }
}

let parentElement = document.getElementById("array");
dispEachFruit (parentElement, fruit);

// To delete the last fruit element of the array, the pop() method is used.
fruit.pop();
let afterPop = document.getElementById("fruit_del");
dispEachFruit (afterPop, fruit);

// To add a new fruit element in the array, the push() method is sued.
fruit.push("Melon");
let afterPush = document.getElementById("fruit_add");
dispEachFruit (afterPush, fruit);

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
      if (eachChar >= 97)
      {
        if (eachChar <= 122)
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



//The comparison of the strings 0th index with the given character will be performed in this function.
function myFind (element, char, state)
{
  if (element[0] === char)
  {
    state = 1;  
  }

  else
  {
    state = 0;
  }
}

//This function will get all the elements of the array fruit and then it will call the myFind function to compare the values.
function filterArrayElementByTheGivenCharacter (arr, char)
{

  //calculating the size of the array.
  let length = arr.length;

  //Creating a new array to store the elements according to the criteria.
  let newArr = [];

  let i = 0;
  let j = 0;
  while (i < length) 
  {

    //Accessing the each element of the main array.
    let str = fruit[i];

    // Calling the function to check if the first character of the string is same as the given character.
    myFind (str, char, status);
    if (status === 1)
    {
      newArr[j] = str;
      j = (j + 1);
    }

    i = (i + 1);
  }

  // To display each of the element of the new element, this part will be executed.
  let neArrElement = document.getElementById("fruit_sort");
  dispEachFruit (newArrElement, newArr);
}

//Call the function to check if there exists an element with the starting letter 'M'.
filterArrayElementByTheGivenCharacter (fruit, "M");
