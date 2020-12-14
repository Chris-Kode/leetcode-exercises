/**
 *
 * TODO
 * KMP Algorithm
 */

function strStr(haystack: string, needle: string): number {
  if (haystack == "" && needle == "") {
    return 0;
  }

  if (needle == "") {
    return 0;
  }

  if (needle.length > haystack.length) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      let isNeedle = true;
      for (let j = 0; j < needle.length && isNeedle; j++) {
        if (haystack[i + j] != needle[j]) {
          isNeedle = false;
        }
      }
      if (isNeedle) {
        return i;
      }
    }
  }

  return -1;
}

console.log(strStr("mississippi", "issip"));
