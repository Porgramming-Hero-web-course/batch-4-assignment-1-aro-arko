{
  // problem 3
  function countWordOccurrences(words: string, searchItem: string): void {
    const arrayOfWord: string[] = words.split(" ");
    // console.log(arrayOfWord);
    let cnt = 0;
    for (const word of arrayOfWord) {
      if (word === searchItem) {
        cnt++;
      }
    }
    console.log(cnt);
  }

  countWordOccurrences("I love typescript", "typescript");
}
