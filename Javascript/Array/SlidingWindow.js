
const res = longestUniqueSubstring()
console.log(res)


function MaximumAverageSubarrayBruteForce() {
    const nums = [1, 12, -5, -6, 50, 3]
    const k = 4

    let avg = 0;
    for(let i = 0; i <= nums.length - k; i++) {
        let currentSum = 0;

        for(let j = i; j < i + k; j++) {
            currentSum += nums[j]
        }
        let currentAvg = currentSum / k

        avg = Math.max(avg, currentAvg)
    }
    return avg
}

function MaximumAverageSubarray() {
    const nums = [1, 12, -5, -6, 50, 3]
    const k = 4

    let maxSum = 0;
    for(let i = 0; i <  k; i++) {
        maxSum += nums[i]
    }
    let sum = maxSum
    for(let i = k; i < nums.length; i++) {
        sum += nums[i]
        sum -= nums[i - k]

        maxSum = Math.max(maxSum, sum)
    }
    return maxSum / k
}

//  3. Longest substring Without Repeating Characters ==>

function longestUniqueSubstringBruteForce() {
    const strg = "bbbbb"
    let maxCount = 0
    for(let i = 0; i < strg.length; i++ ) {
        
        let letters = new Set()
        let count = 0
        for(let j = i; j < strg.length; j++) {
            if(!letters.has(strg[j])) {
                letters.add(strg[j])
                count++
            } else {
                break
            }
        }
        maxCount = Math.max(maxCount, count)
    }
    return maxCount
}

function longestUniqueSubstring2() {
    const strg = "bacabcb"
    let max = 0
    let pointer = 0
    const window = new set()

    while (i < strg.length) {
        if(!window.has(strg[i])) {
            window.add(strg[i])
            Math.max(max, i - pointer + 1)
            i++
        } else {
            window.delete(strg[pointer])
            pointer++
        }
    }
    return max

}

function longestUniqueSubstring() {
    const strg = "bacabcb"
    let maxWindowSize = 0;
    let left = 0;
    let letters = new Set()

    for( let i = 0; i < strg.length; i++) {

        while (letters.has(strg[i])) {
            letters.delete(strg[left])
            left++
        }

        letters.add(strg[i])
        maxWindowSize = Math.max(maxWindowSize, i - left + 1)
    }
    return maxWindowSize
}