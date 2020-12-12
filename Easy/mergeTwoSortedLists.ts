class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let newList: ListNode = new ListNode();
  const headNewList: ListNode = newList;

  if (!l1 && !l2) {
    return null;
  }

  while (l1 != null || l2 != null) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        newList.val = l1.val;
        l1 = l1.next;
      } else {
        newList.val = l2.val;
        l2 = l2.next;
      }
    } else {
      if (l1 != null) {
        newList.val = l1.val;
        l1 = l1.next;
      } else {
        newList.val = l2.val;
        l2 = l2.next;
      }
    }

    if (l1 != null || l2 != null) {
      newList.next = new ListNode();
      newList = newList.next;
    }
  }
  return headNewList;
}
