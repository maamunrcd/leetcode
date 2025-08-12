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
    const dummyNode = new ListNode();
    let current = dummyNode;
    let remainder = 0;
    while(l1 || l2 || remainder){
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + remainder;
        current.next = new ListNode(sum % 10);
        remainder = Math.floor(sum / 10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        current = current.next;
    }
    return dummyNode.next;
};
