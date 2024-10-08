/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    let current = head;
    while(current){
        if(current.val == val){
            prev.next = current.next;
            current = current.next;
        } else {
            prev = current;
            current = current.next;
         }
    }
    return dummy.next;
};