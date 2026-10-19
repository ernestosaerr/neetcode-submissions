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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if(!head || !head.next) return head;
        let slow = head;
        let fast = head;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let cur = slow.next;
        slow.next = null;
        let prev = null;

        while(cur) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        let l1 = head;
        let l2 = prev;
        let t1 = null;
        let t2 = null;

        while(l2) {
            t1 = l1.next;
            t2 = l2.next;
            l1.next = l2;
            l2.next = t1;
            l1 = t1;
            l2 = t2;
        }

        return head;
    }
}

//   0 -> 1 -> 2 -> 3     6 -> 5 -> 4
//   l1                   l2
//        t1           
//                             t2     
