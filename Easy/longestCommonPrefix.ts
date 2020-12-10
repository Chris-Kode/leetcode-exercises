function longestCommonPrefix(strs: string[]): string {
  let prefix = "";
  let word = strs[0];
  if (!strs.length) {
    return "";
  }
  for (let i = 0; i < word.length; i++) {
    let allequals = true;
    for (let j = 1; j < strs.length && allequals == true; j++) {
      if (word[i] != strs[j][i]) {
        allequals = false;
      }
    }
    if (allequals) {
      prefix = prefix + word[i];
    } else {
      i = word.length;
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
