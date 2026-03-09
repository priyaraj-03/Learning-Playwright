let statuses = ['Active', 'Inactive', 'pending', 'closed'];

console.log(statuses[0]);
console.log(statuses[1]);
console.log(statuses[2]);
console.log(statuses[3]);

// using at() method to access last elements
console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));
console.log(statuses.at(-4));

//Modifying array values
statuses[2] = "Pending Approval";
console.log(statuses[2]);

// Adding new value to array
statuses[4] = "On hold";
console.log(statuses[4]);

// Adding value using push method
statuses.push("Cancelled");
console.log(statuses[5]);

// Adding value using unshift method to add at the beginning of the array
statuses.unshift("New");
console.log(statuses[0]);
console.log(statuses);

// Removing last element using pop method
const removedstatus  = statuses.pop();
console.log('Removed status: ' + removedstatus);
console.log(statuses);

// Removing first element using shift method
const removedFirstStatus = statuses.shift();
console.log('Removed first status: ' + removedFirstStatus);
console.log(statuses);

// Finding index of an element
const pendingIndex = statuses. indexOf("Pending Approval");
console.log(' Index of Pending Approval: ' + pendingIndex);

// checking if an element exists in the array
const hasclosed = statuses.includes("closed");
console.log('Is close status present? ' + hasclosed);

// Length of the array
console.log(' Total statuses: ' + statuses.length);

// slicing array to get a portion of it
const activestatuses = statuses.slice(0, 2);
console.log('Active statuses: ' + activestatuses);

// Splicing array to remove and add elements
statuses.splice(1,1, "In Progress");
console.log(statuses);

// Iterating over array using for loop
for(let i = 0; i < statuses.length; i++) {
    console.log('status ${i+1}: ' + statuses[i]);
}

// Iterating over array using forEach method
statuses.forEach((status, index) => {
    console.log(' status ${index+1}: ' + status);
});

// Iterating over array using for...of loop
for ( const status of statuses) {
    console.log('status: ' + status);
}

// Iterating over array using map method
const upperCaseStatuses = statuses.map( status => status.toUpperCase());
console.log('Upper case statuses: ' + upperCaseStatuses);

// Filtering array using filter method
const activeStatuses = statuses.filter( status => status.includes("Active"));
console.log('Active statuses: ' + activeStatuses);

// Finding an element using find method
const pendingStatus = statuses.find( status => status.includes("Pending"));
console.log('Pending status: ' + pendingStatus);

// Sorting array using sort method
const sortedStatuses = [...statuses].sort();
console.log('sorted statuses: ' + sortedStatuses);

// Reversing array using reverse method
const reversedStatuses = [...statuses].reverse();
console.log('Reversed satuses: ' + reversedStatuses);

// Joining array elements into a string
const statusString = statuses.join(",");
console.log('status string:' + statusString);

// splitting string back into array
const statusArray = statusString.split(",");
console.log('status array: ' + statusArray);

// Finding index of an element using findIndex method
const inProgressIndex  = statuses.findIndex( status => status.includes("In Progress"));
console.log('Index of In Progress status: ' + inProgressIndex);

// including an array within another array
const allStatuses = [...statuses, ...activeStatuses];
console.log('All statuses: ' + allStatuses);

// using spread operator to create a copy of the array
const copiedStatuses = [ ...statuses];
console.log('copied statuses: ' + copiedStatuses);

// using spread opeator to merge arrays
const mergedStatuses = [...statuses, "Completed", "Failed"];
console.log('Merged statuses: ' + mergedStatuses);

// mapping array to create a new array of objects
const statusObjects = statuses.map( status => ({ name: status, length: status.length}));
console.log(' status objects: ' + JSON.stringify(statusObjects));

// reducing array to get a single value
const totalLength = statuses.reduce ((acc, status) => acc + status.length, 0);
console.log(' Total length of all statuses: ' + totalLength);

// flattening an array of arrays
const nestedStatuses = [[ "New", "Active"], ["Pending", "In Progress"], ["Close", "Cancelled"]];
const flatStatuses = nestedStatuses.flat();
console.log('Flat statuses: ' + flatStatuses);

// sorting array of objects based on a propery
const sortedStatusObjects = statusObjects.sort((a,b) => a.length - b.length);
console.log('Sorted status objects: ' + JSON.stringify(sortedStatusObjects));

// using filter and map together to get names of active statuses in uppercase
const activeStatusNames  = statuses.filter( status => status.includes("Active").map( status => status.toUpperCase()));
console.log('Active status names in uppercase: ' + activeStatusNames);


