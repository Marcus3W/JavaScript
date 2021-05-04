// ADDITIONAL QUESTIONS

/* Exercise 1
Write a script that writes the following output to the console using a single instance of
console.log(). Use different variables for each part of the address.

Birkbeck College
Malet Street
London WC1E 7HX
 */
function one() {
    // \n is used to create new lines
    let address = "Birkbeck College\n" + "Malet Street\n" + "London WC1E 7HX" ;
    console.log(address)
}
one();

/* Exercise 2
Write a script that uses the .concat() method to concatenate the following four individual
strings together into a single string and write the result to the console.
 */
function two() {
    let A = "abcd" ;
    let B = "efgh" ;
    let C = "ijkl" ;
    let D = "mnop" ;
    // uses .concat as per the question
    let combined = A.concat(B + C + D);
    console.log(combined)

    let Aa = "123" ;
    let Bb = "456" ;
    let Cc = "789" ;
    let Dd = "000" ;
    // additional method
    let combinedTwo = Aa + Bb + Cc + Dd;
    console.log(combinedTwo)
}
two();

/* Exercise 3
Write a script that uses the .search() method of the String object to find the letters cat in
the following string, and write the position of the characters to the console.
 */
function three() {
    // This returns 3. This is the index location of the first letter of the 'searched' object
    let word = "concatenation" ;
    let found = word.search("cat");
    console.log(found) ;
}
three();

/* Exercise 4
Write a script that uses the replace and charAt methods to delete the first two characters
of the word impatient so that it reads patient. Write the result to the console.
*/
function four() {
    // use .replace then use the chatAt to pick a 'index' location and replace it with whatever you want.
    let word = "impatient";
    console.log(word.replace(word.charAt(0), "").replace(word.charAt(1), ""))

}
four();

/* Exercise 5
Write a script that removes the whitespace from the following string and writes the result
to the console.
 */
function five() {
    // use .trim to remove the whitespace
    let webAddress = " http://www.javascripttutor.com " ;
    console.log(webAddress.trim())
}
five();
