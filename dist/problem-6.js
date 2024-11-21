"use strict";
{
    const updateProfile = (userProfile, updates) => {
        const updatedProfile = Object.assign(Object.assign({}, userProfile), updates);
        return updatedProfile;
    };
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    //   console.log(updateProfile(myProfile, { name: "Arko" }));
    console.log(updateProfile(myProfile, { age: 26 }));
}
