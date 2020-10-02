// File that builds HTML table from the data.js data UFO sightings info

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Function that builds table to display all UFO sightings
function buildTable(data) {
    tbody.html(""); // this clears the table when first run the function
    data.forEach((dataRow) => { // forEach loop to loop through all the data rows
        let row = tbody.append("tr"); // create variable "row" that will add each row to the table body - used let instead of var b/c row just for this line of code
    
        Object.values(dataRow).forEach((val) => { // adding another function inside to tell code to put each sighting into its own row of data
            let cell = row.append("td"); // append each value of the object to a cell in the table
            cell.text(val); // extract the text of the value
            }
        );
    });
}