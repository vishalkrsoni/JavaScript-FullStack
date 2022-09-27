n = Number(prompt('Enter the limit'))
for (let i = 0; i < n; i++) {
    j = 1
    while (j <= i * i) {
        for (k = 0; k < n / 2; k++) console.log('Time complexity')
        j += 1;
    }
}
// Ans: O(n^4)
