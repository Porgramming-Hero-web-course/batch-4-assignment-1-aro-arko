"use strict";
{
    // problem 2
    function removeDuplicates(nums) {
        const uniqueArray = [];
        for (const num of nums) {
            if (!uniqueArray.includes(num)) {
                uniqueArray.push(num);
            }
        }
        return uniqueArray;
    }
    const elements = [1, 2, 2, 3, 4, 4, 5];
    const result = removeDuplicates(elements);
    console.log(result);
}
