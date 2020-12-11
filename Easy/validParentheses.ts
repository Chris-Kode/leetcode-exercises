//s consists of parentheses only '()[]{}'
function isValid(s: string): boolean {
  let parenthesesActual: Array<string> = [];

  const parenthesesHashWithClosed: Object = { "{": "}", "(": ")", "[": "]" };
  const parenthesesHash: Object = { "{": 1, "(": 1, "[": 1 };

  if (s.length % 2 != 0) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (parenthesesHash[s[i]]) {
      parenthesesActual.unshift(s[i]);
    } else {
      if (parenthesesHashWithClosed[parenthesesActual[0]] == s[i]) {
        parenthesesActual.shift();
      } else {
        return false;
      }
    }
  }

  if (!parenthesesActual.length) {
    return true;
  } else {
    return false;
  }
}
