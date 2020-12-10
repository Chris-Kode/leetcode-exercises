// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result: ListNode = new ListNode();

  const resultHead = result;
  let quanty: number = 0;

  while (l1 != null || l2 != null) {
    if (l2 == null) {
      l2 = new ListNode();
    }

    if (l1 == null) {
      l1 = new ListNode();
    }

    let sum: number = l1.val + l2.val + quanty;

    if (sum >= 10) {
      quanty = Math.floor(sum / 10);
      result.val = sum - quanty * 10;
    } else {
      result.val = sum;
      quanty = 0;
    }

    if (l1.next != null || l2.next != null) {
      result.next = new ListNode();
      result = result.next;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  if (quanty != 0) {
    result.next = new ListNode();
    result.next.val = quanty;
  }

  return resultHead;
}
