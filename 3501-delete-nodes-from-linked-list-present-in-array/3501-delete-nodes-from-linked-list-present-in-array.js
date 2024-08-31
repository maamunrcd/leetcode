/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    let current = head;
    let set = new Set();
    for(item of nums){
        set.add(item);
    }
    while(current){
        if(set.has(current.val)){
            prev.next = current.next;
            current = current.next;
        } else {
            prev = current;
            current = current.next;
        }
    }
    return dummy.next;
};