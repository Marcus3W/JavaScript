$(document).ready(() => {
    // STORE THE DATA IN AN ARRAY
    let censusdata = [{
        "firstname": "Harold",
        "lastname": "Mullins",
        "birthdate": "07/04/1864",
        "deathdate": "09/11/1891"
    },
        {
            "firstname": "Sarah",
            "lastname": "Houseman",
            "birthdate": "09/04/1864",
            "deathdate": "10/04/1866"
        },
        {
            "firstname": "Alice",
            "lastname": "Davis",
            "birthdate": "11/12/1864",
            "deathdate": "04/10/1866"
        },
        {
            "firstname": "Maud",
            "lastname": "Adams",
            "birthdate": "08/04/1864",
            "deathdate": "09/11/1908"
        },
        {
            "firstname": "Seamus",
            "lastname": "O'Brien",
            "birthdate": "10/10/1864",
            "deathdate": "09/07/1900"
        }];

    // CREATE TABLE
    let dataTable = $("<table><tr><th>First Name</th><th>Last Name</th><th>Born</th><th>Died</th><th>Age at Death</th></tr></table>");
    $("#censusdata").append(dataTable.attr("class", "dataTable")); // create table and add styling. Wrapped #censusdata to apply data
    $.each(censusdata, (index) => {
        // GET AGE OF DEATH DATA: for each iteration calculate the age of death for each person
        let ageOfDeathInMS = new Date(censusdata[index].deathdate) - new Date(censusdata[index].birthdate); // returns death in milliseconds
        censusdata[index].ageofdeath = Math.floor(ageOfDeathInMS / (1000 * 60 * 60 * 24 * 365));  // converts milliseconds into years
        dataTable.append( // BUILD TABLE
            "<tr><td>" + censusdata[index].firstname +
            "</td><td>" + censusdata[index].lastname +
            "</td><td>" + censusdata[index].birthdate +
            "</td><td>" + censusdata[index].deathdate +
            "</td><td>" + censusdata[index].ageofdeath +
            "</td></tr>");
    });

    // DISPLAY AVERAGE AGE OF DEATH
    $("#averageageatdeath").append("<p>Average age of death = " + getAverage() + "</p>");

    // FORMAT TABLE
    $(".dataTable").css({
        'border' :'2px solid #1C6EA4',
        'background-color' : '#FFFFFF',
        'width' : 'auto', // changed this from 35% to auto
        'text-align' : 'left',
        'border-collapse' : 'collapse',
        'color' : '#000000'
    });

    $(".dataTable th").css('border-bottom', '3px solid #444444');

    $(".dataTable td").css({
        'color' : '#4D0000',
        'border-bottom' : '2px solid #444444'
    });

    // CALCULATE AVERAGE AGE OF DEATH
    function getAverage() {
        let total = 0;
        let count = 0;
        $.each(censusdata, (index) => {
            total += censusdata[index].ageofdeath
            count++;
        });
        return (total / count).toFixed(0)
    }
});




