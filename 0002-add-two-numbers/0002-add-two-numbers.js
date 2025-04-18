/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let curry = 0;
    let dummyHead = new ListNode();
    current = dummyHead;
    while(l1 || l2 || curry){
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + curry;

        curry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        l1 = l1 ? l1.next:null;
        l2 = l2 ? l2.next:null;
    }
    return dummyHead.next;
};
