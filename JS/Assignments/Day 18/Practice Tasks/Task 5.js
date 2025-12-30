// Use for…in to print object keys & values.

let user = {
      name: "john",
      age: 30, 
      wife : true
  }

  for ( let key in user){
    console.log(key, user[key]);
    
  }
