{
  // Problem 1
  function sumArray(nums: number[]): void {
    let total = 0;
    for (let num of nums) {
      total += num;
    }
    console.log(total);
    // return total;
  }

  //   const numbers: Array<number> = [1, 2, 3, 4, 5];
  sumArray([1, 2, 3, 4, 5]);
}
