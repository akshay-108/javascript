let object={
    'Name':'Akshay',
    'Age':24,
    'gender':'Male'
};

console.log(object)

let reNameObjectkey=(object)=>{
    object.FirstName=object.Name;
    delete object.Name;
};

reNameObjectkey(object);
console.log(object);
console.log('\n');

// This approach will preserve the position of the key and also the value.

let object2 = {
    name: "Hello",
    age: 20,
    gender: "Male",
  };
  
  let renameKeys = (keysMap, Object) =>
    Object.keys(Object).reduce(
      (acc, key) => ({
        ...acc,
        ...{ [keysMap[key] || key]: Object[key] },
      }),
      {}
    );
  
  let result = renameKeys({ name: "FirstName" }, Object);
  console.log(result);
