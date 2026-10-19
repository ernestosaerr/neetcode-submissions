class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0;
const freq = {};
let coincidencias = 0;


for (let char of s1) {
freq[char] = (freq[char] || 0) + 1;
}


const needDistinct = Object.keys(freq).length;


for (let right = 0; right < s2.length; right++) {
const r = s2[right];


// expand: meter s2[right]
if (r in freq) {
freq[r]--;
if (freq[r] === 0) coincidencias++; // quedó exacto
else if (freq[r] === -1) coincidencias--; // se pasó (antes estaba exacto)
}


// shrink: si la ventana se pasó de tamaño
while (right - left + 1 > s1.length) {
const l = s2[left];


if (l in freq) {
// antes de revertir, ajusta coincidencias según el estado actual
if (freq[l] === 0) coincidencias--; // al sacar, deja de estar exacto
else if (freq[l] === -1) coincidencias++; // al sacar un extra, vuelve a exacto


freq[l]++; // revertimos el efecto de haberlo metido
}


left++;
}


// check: ventana exacta + todas las letras distintas en match
if (right - left + 1 === s1.length && coincidencias === needDistinct) {
return true;
}
}


return false;
    }
}


/*

{
a:1
b:1
c:1
}

*/