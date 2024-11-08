{
  // problem 6
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    userProfile: Profile,
    updates: Partial<Profile>
  ): Profile => {
    const updatedProfile = { ...userProfile, ...updates };
    return updatedProfile;
  };

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  //   console.log(updateProfile(myProfile, { name: "Arko" }));
  console.log(updateProfile(myProfile, { age: 26 }));
}
