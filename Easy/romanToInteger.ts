function romanToInt(s: string): number {
  let romans = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (romans[s[i]] < romans[s[i + 1]]) {
      sum += romans[s[i + 1]] - romans[s[i]];
      i++;
    } else {
      sum += romans[s[i]];
    }
  }

  return sum;
}
