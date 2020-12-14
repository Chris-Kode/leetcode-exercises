/**
 * With binary Search
 */

function searchInsert(nums: number[], target: number): number {
  let position = binarySearch(0, nums.length - 1, target, nums);
  return position;
}

function binarySearch(
  start: number,
  end: number,
  target: number,
  nums: number[]
): number {
  let mid = Math.floor((start + end) / 2);

  if (nums[mid] == target) {
    return mid;
  }

  if (start > end) {
    return start;
  }

  if (target > nums[mid]) {
    return binarySearch(mid + 1, end, target, nums);
  } else {
    return binarySearch(start, mid - 1, target, nums);
  }
}
