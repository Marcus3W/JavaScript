function getData(elem) {
    // get the main parent section with all articles inside
    let section = document.getElementById("news");

    // loop through the articles within section at the length of the number of child articles.
    for (let i = 0; i < section.childElementCount-1; i++) {

        // get the article
        let article = section.getElementsByClassName("newsarticle");

        // within article - get <h4> and <p[0]>
        // getters
        let heading = article[i].firstElementChild;
        let text = article[i].getElementsByTagName("p"); // get collection/array or p's

        // setters
        let innerHeading = heading.innerHTML;
        let innerText = text[0].innerHTML
        let finalText = innerHeading + " ... " + innerText;

        // call insert function to add final data onto the website.
        insertNode(finalText);
    }
}

function insertNode(finalText) {
    // create newNode and insert text into new Node
    let newNode = document.createElement("p");
    let newText = document.createTextNode(finalText);
    newNode.appendChild(newText);

    //get parent element
    let parentElement = document.getElementById("headlines");
    parentElement.insertBefore(newNode, parentElement.children[0]);
}


window.onload = function() {
    let element = document.getElementById("news");
    element.addEventListener("click", getData,false);

}
