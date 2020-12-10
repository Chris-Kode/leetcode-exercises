function longestCommonPrefix(strs: string[]): string {
  let positionAtMoreLarge: number = 0;
  let start = 0;
  let end = strs.length - 1;

  while (start <= end) {
    let moreLargeInThisIteration: number = 0;

    if (strs[start].length > strs[end].length) {
      moreLargeInThisIteration = start;
    } else {
      moreLargeInThisIteration = end;
    }

    if (
      strs[moreLargeInThisIteration].length > strs[positionAtMoreLarge].length
    ) {
      positionAtMoreLarge = moreLargeInThisIteration;
    }

    start++;
    end--;
  }

  console.log(positionAtMoreLarge);
  return "";
}

longestCommonPrefix(["flower", "flow", "flight"]);
