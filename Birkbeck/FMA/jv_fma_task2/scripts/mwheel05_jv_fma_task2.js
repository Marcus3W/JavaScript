// take selected 'option' from drop down and return currency value in selected country
function getCurrencyConversion(currency) {
    let currencyValue; // create variable for currency
    switch (currency) { // check input value to switch-case list & set value to currencyValue
        case "UK Pounds":
            currencyValue = 0.720374;
            break;
        case "Euros":
            currencyValue = 0.837543;
            break;
        case "Yen":
            currencyValue = 110.778300;
            break;
        case "Yuan":
            currencyValue = 6.456320;
            break;
        case "Swiss Francs":
            currencyValue = 0.917096;
            break;
        case "Canadian Dollars":
            currencyValue = 1.229887;
            break;
    }
    // create text line to be displayed
    let finalText = "One US Dollar buys you " + currencyValue.toFixed(2) +  " " + currency;
    insertNode(finalText);
}
``
// take final text to be inserted and add to the webpage - displayed under the drop down selection
function insertNode(finalText) {
    // create newNode and insert text into new Node
    let newNode = document.createElement("p");
    let newText = document.createTextNode(finalText);
    newNode.appendChild(newText);
    let parentElement = document.getElementById("exchangerate");
    parentElement.insertBefore(newNode, parentElement.children[0]);
}

// function to remove all the data previously displayed
function removeNode() {
    let currencySelected = document.getElementById("exchangerate");
    currencySelected.firstChild.remove();
}

//-------------------------------------------//

window.onload = () => {
    let theSelection = document.getElementById('currencies');
    theSelection.addEventListener("change", () => {
        if (document.getElementById("exchangerate").childElementCount > 0) {
            removeNode(); // Clear out existing <option> elements from <select> element
            let currency = theSelection.options[theSelection.selectedIndex].value; // Get the selected currency and pass it to function for processing
            getCurrencyConversion(currency);
        } else {
            let currency = theSelection.options[theSelection.selectedIndex].value; // Get the selected currency and pass it to function for processing
            getCurrencyConversion(currency);
        }}, false);
}