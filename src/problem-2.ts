{
  // problem 2
  function removeDuplicates(nums: number[]): number[] {
    const uniqueArray: number[] = [];
    for (const num of nums) {
      if (!uniqueArray.includes(num)) {
        uniqueArray.push(num);
      }
    }
    return uniqueArray;
  }

  const elements: number[] = [1, 2, 2, 3, 4, 4, 5];
  const result: number[] = removeDuplicates(elements);
  console.log(result);
}
