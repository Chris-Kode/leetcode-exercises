function removeDuplicates(nums: number[]): number {
  let size: number = nums.length;
  for (let i = 0; i < size; i++) {
    let pointer = i + 1;
    while (nums[pointer] == nums[i]) {
      nums.splice(pointer, 1);
      size--;
    }
  }

  return nums.length;
}
