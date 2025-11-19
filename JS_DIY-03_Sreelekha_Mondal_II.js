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


//This function is created to change the each character into uppercase of a string.
function upperString (string)
{
  let length = string.length;

  //Creating a new array to store the elements according to the criteria.
  let newArr = [];

  // initialize the loop counter.
  let i = 0;
  while (i < length)
  {
    // Checking if the character is in lowercase or not. If it is true, then the character will be stored in a array.
    if (string[i] >= '97')
    {
      if (string[i] <= '122')
      {
        newArr[i] = (string[i] - '32');
      }
    }

    i = (i + 1);
  }

  console.log(newArr);

  //returning the array.
  return newArr;
}


// This function will collect each element and then it will convert the elements into uppercase.
function myUppercase (arr)
{

  //calculating the size of the array.
  let length = arr.length;

  //Creating a new array to store the elements according to the criteria.
  let upperArr;

  let i = 0;
  while (i < length) 
  {

    //Accessing the each element of the main array.
    let str = arr[i];
    upperArr = upperString (str);
    i = (i + 1);
  }

  // To display each of the element of the new element, this part will be executed.
  let upperElement = document.getElementById("fruit_upper");
  dispEachFruit (upperElement, upperArr);
}


//calling the function to convert all the elements of the fruit array into uppercase.
myUppercase (fruit);

//The comparison of the strings 0th index with the given character will be performed in this function.
function myFind (element, char)
{
  if (element[0] === char)
  {
    return 1;  
  }

  else
  {
    return 0;
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
    let str = arr[i];

    // Calling the function to check if the first character of the string is same as the given character.
    let check = myFind (str, char);
    if (check === 1)
    {
      newArr[j] = str;
      j = (j + 1);
    }

    i = (i + 1);
  }

  // To display each of the element of the new element, this part will be executed.
  let newArrElement = document.getElementById("fruit_sort");
  dispEachFruit (newArrElement, newArr);
}

//Call the function to check if there exists an element with the starting letter 'M'.
filterArrayElementByTheGivenCharacter (fruit, "M");
