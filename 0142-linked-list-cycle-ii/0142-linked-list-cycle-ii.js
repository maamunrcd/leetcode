/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head) return null;
    const obj = new Set();
    let temp = head;
    while(temp !==null){
        if(obj.has(temp)){
            return temp;
        } 
        obj.add(temp);
        temp = temp.next;
    }
    return null;
};