/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
    let cur1 = list1;
    let cur2 = list2;
    const dummy = new ListNode(0, null);
    let cur3 = dummy;
    while(cur1 && cur2){
        if(cur1.val <= cur2.val) {
            cur3.next = cur1;
            cur1 = cur1.next;
        }else{
            cur3.next = cur2;
            cur2 = cur2.next;
        }
        cur3 = cur3.next;
    }
    cur3.next = cur1 || cur2;
    return dummy.next;
    }
}
