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
  let newStr = "";

  // initialize the loop counter.
  let i = 0;
  while (i < length)
  {
    let char = string[i];

    // converting each character to its upper case.
    switch (char)
    {
      case 'a': newStr = (newStr + "A");       
                break;

      case 'b': newStr = (newStr + "B");       
                break;

      case 'c': newStr = (newStr + "C");       
                break;

      case 'd': newStr = (newStr + "D");       
                break;

      case 'e': newStr = (newStr + "E");       
                break;

      case 'f': newStr = (newStr + "F");       
                break;
 
      case 'g': newStr = (newStr + "G");       
                break;

      case 'h': newStr = (newStr + "H");       
                break;

      case 'i': newStr = (newStr + "I");       
                break;

      case 'j': newStr = (newStr + "J");       
                break;

      case 'k': newStr = (newStr + "K");       
                break;

      case 'l': newStr = (newStr + "L");       
                break;

      case 'm': newStr = (newStr + "M");       
                break;

      case 'n': newStr = (newStr + "N");       
                break;

      case 'o': newStr = (newStr + "O");       
                break;

      case 'p': newStr = (newStr + "P");       
                break;

      case 'q': newStr = (newStr + "Q");       
                break;

      case 'r': newStr = (newStr + "R");       
                break;

      case 's': newStr = (newStr + "S");       
                break;

      case 't': newStr = (newStr + "T");       
                break;

      case 'u': newStr = (newStr + "U");       
                break;

      case 'v': newStr = (newStr + "V");       
                break;

      case 'w': newStr = (newStr + "W");       
                break;

      case 'x': newStr = (newStr + "X");       
                break;

      case 'y': newStr = (newStr + "Y");       
                break;

      case 'z': newStr = (newStr + "Z");       
                break;

      case 'A': newStr = (newStr + "A");       
                break;

      case 'B': newStr = (newStr + "B");       
                break;

      case 'C': newStr = (newStr + "C");       
                break;

      case 'D': newStr = (newStr + "D");       
                break;

      case 'E': newStr = (newStr + "E");       
                break;

      case 'F': newStr = (newStr + "F");       
                break;
 
      case 'G': newStr = (newStr + "G");       
                break;

      case 'H': newStr = (newStr + "H");       
                break;

      case 'I': newStr = (newStr + "I");       
                break;

      case 'J': newStr = (newStr + "J");       
                break;

      case 'K': newStr = (newStr + "K");       
                break;

      case 'L': newStr = (newStr + "L");       
                break;

      case 'M': newStr = (newStr + "M");       
                break;

      case 'N': newStr = (newStr + "N");       
                break;

      case 'O': newStr = (newStr + "O");       
                break;

      case 'P': newStr = (newStr + "P");       
                break;

      case 'Q': newStr = (newStr + "Q");       
                break;

      case 'R': newStr = (newStr + "R");       
                break;

      case 'S': newStr = (newStr + "S");       
                break;

      case 'T': newStr = (newStr + "T");       
                break;

      case 'U': newStr = (newStr + "U");       
                break;

      case 'V': newStr = (newStr + "V");       
                break;

      case 'W': newStr = (newStr + "W");       
                break;

      case 'X': newStr = (newStr + "X");       
                break;

      case 'Y': newStr = (newStr + "Y");       
                break;

      case 'Z': newStr = (newStr + "Z");       
                break;
    }
    i = (i + 1);
  }

  //returning the array.
  return newStr;
}


// This function will collect each element and then it will convert the elements into uppercase.
function myUppercase (arr)
{

  //calculating the size of the array.
  let length = arr.length;

  //Creating a new array to store the elements according to the criteria.
  let upper = "";
  let uprArr = [];

  let i = 0;
  while (i < length) 
  {

    //Accessing the each element of the main array.
    let str = arr[i];

    // if the string is empty, then check for the next string, if it is not, then call the upperString function.
    if (str === "")
    {
      uprArr[i] = upper;
      i = (i + 1);
    }

    else
    {
      upper = upperString (str);
      uprArr[i] = upper;
      i = (i + 1);
    }
  }

  // To display each of the element of the new element, this part will be executed.
  let uprArrElement = document.getElementById("fruit_upper");
  dispEachFruit (uprArrElement, uprArr);
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
