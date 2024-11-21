"use strict";
// problem 8
const validateKeys = (obj, keys) => {
    for (let key of keys) {
        if (!(key in obj)) {
            return false;
        }
    }
    return true;
};
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
