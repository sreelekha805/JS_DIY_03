# HANDLING ARRAY
**The TASK:**
* Create an array of 5 fruits and print each fruit.
* Remove the last fruit from the array and add a new fruit in that array.
* Convert all fruits to uppercase.
* Find fruits that start with “M”.
___
**After creating the Array,**

**First:**
To display all the elements seperately, the `dispEachFruit` function is created instead of using the `forEach` method.

```
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
```
*The elements are displayed with this function, entire the program.*
___

**Second:**
To remove the last element from the array which is a fruit name, the `pop` method is used and to add a new element to the array, the `push` method is used.
___

**Third:**
To convert all fruits to uppercase, there are two functions are created,
* `myUppercase` : Which will take the whole array, and then it will take the strings within the array one by one, and give it to the function `upperString`.
* `upperString` : This function will take the stings and it will change the cases of the lower case of each characters to their uppercase.
___

**Fourth:**
To find fruits that start with “M”, there are two functions are created,
* `filterArrayElementByTheGivenCharacter` : Which will take the whole array, and then it will take the strings within the array one by one, and give it to the function `myFind`, to check the first character of the string with the given character. If they are same then the string will be displayed.
* `myFind` : This finction will take the string and it will check each of the string with the given character, i.e. 'M'.
___
