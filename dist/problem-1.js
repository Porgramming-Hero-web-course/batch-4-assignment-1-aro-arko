"use strict";
{
    // problem 1
    function sumArray(nums) {
        let total = 0;
        for (let num of nums) {
            total += num;
        }
        return total;
    }
    const result = sumArray([1, 2, 3, 4, 5]);
    console.log(result);
}
