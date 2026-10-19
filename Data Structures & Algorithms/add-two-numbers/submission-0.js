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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let sum = 0;
        let dummy = new ListNode(0);
        let cur = dummy;

        while(l1 || l2 || carry) {
            const x = l1 ? l1.val : 0;
            const y = l2 ? l2.val : 0;
            sum = x + y + carry;
            const digito = sum % 10; 
            carry = Math.floor(sum/10);
            cur.next = new ListNode(digito);
            cur = cur.next;
            if(l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        return dummy.next;
    }
}

// 5 + 6 = 11
// Math.floor(sum/10)
