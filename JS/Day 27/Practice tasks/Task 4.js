
let user = {
  name: "aaa",
  age: 22
};

// Object to JSON
let jsonData = JSON.stringify(user);
console.log(jsonData);

// JSON to Object
let parsedData = JSON.parse(jsonData);
console.log(parsedData.name);