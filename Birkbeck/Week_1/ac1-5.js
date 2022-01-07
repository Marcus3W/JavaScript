// Exercise 1

function writeToConsole() {
    let message = "Success" ;
    console.log(message) ;

    let city = "london" ;
    let PS = "SW183HZ" ;
    let combined = city + " " + PS;
    console.log(combined);

}
writeToConsole();


// Exercise 2

function writeToConsole() {
	let message = "Success";
	console.log(message);
}

writeToConsole();


// Exercise 3

function getInitials () {
    let firstName = "Marc" ;
    let lastName = "Wheeler" ;
    let firstInitial = firstName.charAt(0);
    let lastInitial = lastName.charAt(0);

    console.log(firstInitial + lastInitial)
}
getInitials()


// Exercise 4

function convertEmail () {
    let email = "TUTOR@JAVASCRIPTSTUDENT.COM" ;

    let convertedEmail = email.toLowerCase() ;
    console.log(convertedEmail)
}
convertEmail();


// Exercise 5

function correctSpelling() {
    let errorText = "Londen";
    let correction = errorText.replace(errorText.charAt(4), "o") ;
    console.log(correction)
}
correctSpelling();

