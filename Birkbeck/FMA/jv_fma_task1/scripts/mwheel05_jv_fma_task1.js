/*
The function getData is designed to find the parent of all the articles. Once located
it will iterate through each article and extract the header and first paragraph of each
one.

It will then call the insertNote function to display it one the webpage in
the 'Bizzare News Summary' section.
 */
function getData(elem) {
    // get the main parent section with all articles inside
    let section = document.getElementById("news");

    // loop through the articles within section at the length of the number of child articles.
    for (let i = section.childElementCount-2; i >= 0 ; i--) { // used i-- because i needed to display them in ascending order.

        // get the article
        let article = section.getElementsByClassName("newsarticle");

        // within article - get <h4> and <p[0]>
        // getters
        let heading = article[i].firstElementChild;
        let text = article[i].getElementsByTagName("p"); // get collection/array or p's

        // setters
        let innerHeading = heading.innerHTML;
        let innerText = text[0].innerHTML
        let finalText = innerHeading + " . . . " + innerText;

        // call insert function to add final data onto the website.
        insertNode(finalText);
    }
}

function insertNode(finalText) {
    // create newNode and insert text into new Node
    let newNode = document.createElement("p");
    let newText = document.createTextNode(finalText);
    newNode.appendChild(newText);

    //get parent element and add the first <p> line ONLY - hence [0].
    let parentElement = document.getElementById("news");
    parentElement.insertBefore(newNode, parentElement.children[0]).style.fontStyle= "italic";
    // Added the italic as it was this way on the specification
}

// This is called once the page loads and then calls the function to run the above functions.
window.addEventListener('DOMContentLoaded', (event) => {
    getData()}
);

