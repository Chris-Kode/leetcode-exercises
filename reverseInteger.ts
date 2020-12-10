function reverse(x: number): number {
  let numberString: Array<string> = x.toString().split("");
  const maxNumber = Math.pow(2, 31) - 1;
  const minNumber = Math.pow(-2, 31);

  if (maxNumber > x && minNumber < x) {
    if (numberString[0] == "-") {
      numberString.splice(0, 1);
      numberString = numberString.reverse();
      numberString.unshift("-");
    } else {
      numberString = numberString.reverse();
    }

    let number = parseInt(numberString.join(""));

    if (maxNumber > number && minNumber < number) {
      return number;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}
