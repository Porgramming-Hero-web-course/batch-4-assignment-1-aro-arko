"use strict";
{
    // problem 3
    function countWordOccurrences(words, searchItem) {
        const givenAllLower = words.toLowerCase();
        const searchAllLower = searchItem.toLowerCase();
        const arrayOfWord = givenAllLower.split(" ");
        let cnt = 0;
        for (const word of arrayOfWord) {
            if (word === searchAllLower) {
                cnt++;
            }
        }
        return cnt;
    }
    const result = countWordOccurrences("I love typescript", "typescript");
    console.log(result);
}
