function removeElement(nums: number[], val: number): number {
  let start = 0;
  let end = nums.length;

  while (start <= end) {
    if (nums[start] == val) {
      nums.splice(start, 1);
      start--;
    }

    if (nums[end] == val) {
      nums.splice(end, 1);
      end++;
    }

    start++;
    end--;
  }
  return nums.length;
}
console.log(removeElement([3, 2, 2, 3], 3));
