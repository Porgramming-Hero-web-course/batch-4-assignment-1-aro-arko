{
  // problem 2

  function removeDuplicates(nums: number[]): void {
    let uniqeArray: Array<number> = [];

    // nums.sort;
    for (let i = 0; i < nums.length; i++) {
      if (!uniqeArray.includes(nums[i])) {
        uniqeArray.push(nums[i]);
      }
    }
    console.log(uniqeArray);

    // return uniqeArray;
  }
  //   const numbers: Array<number> = [1, 2, 2, 2, 2, 2, 3, 4, 4, 5];

  removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
}
