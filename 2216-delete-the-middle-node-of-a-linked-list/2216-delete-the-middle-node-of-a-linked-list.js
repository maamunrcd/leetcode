/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let slow = head;
    let fast = head;
    let prevSlow = null;
    while(fast != null && fast.next != null) {
        prevSlow = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if (prevSlow === null) return null;
    prevSlow.next = slow.next;
    return head;
};