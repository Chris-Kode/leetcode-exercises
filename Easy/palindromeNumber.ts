function isPalindrome(x: number): boolean {
  let stringNumber: string = x.toString();

  let start: number = 0;
  let end: number = stringNumber.length - 1;
  let isPalindrome: boolean = true;

  while (start <= end) {
    if (stringNumber[start] != stringNumber[end]) {
      isPalindrome = false;
    }
    start++;
    end--;
  }

  return isPalindrome;
}

/*

    if equals is Palindrome
    ->121
    121<-
    
    if pointers are equals always
    |1A| 2 |1B|
    A++
    =
    B--






*/

console.log(isPalindrome(121));
