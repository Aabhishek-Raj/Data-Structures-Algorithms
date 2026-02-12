const checkUniqueChar = (str: string): boolean => {
    for(let i = 0; i <= str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if(str[i] == str[j]){
                console.log(str[i])
                return true
            }         
        }
    }
    return false
}

const ar: string = 'abihisek'
// console.log(checkUniqueChar(ar))

//another method
const CheckUnique = (str: string): boolean => {
    const ojb: {[key: string]: number} = {}

    for (let i = 0; i < str.length; i++) {
        if(ojb[str[i]] && ojb[str[i]] == 1) {
            console.log(ojb)
            ojb[str[i]] ++
            return true
        } else {
            ojb[str[i]] = 1
        }  
    }
    console.log(ojb)
    return false
}

// console.log(CheckUnique(ar));

//Difference between two array
const FindDifferenceInArrays = (arr1: number[], arr2: number[]) => {

    const obj: {[key: number]: number} = {}

    let out: number[] = []

    arr1.forEach(i => obj[i] = 1)

    arr2.forEach(i => {
        if(obj[i] || obj[i] === 1) {
            obj[i] = 2
        } else {
            out.push(i)
        }
    })
    console.log(obj)
    return out
}

//Common between two array
const FindCommonInArrays = (arr1: number[], arr2: number[]) => {

    const obj: {[key: number]: number} = {}

    let out: number[] = []

    arr1.forEach(i => obj[i] = 1)

    arr2.forEach(i => {
        if(obj[i] === 1) {
            out.push(i)
        } else {
            obj[i] = -1
        }
    })
    console.log(obj)
    return out
}

const arr1 = [1, 3, 4, 1, 5, 900, 111,]
const arr2 = [1, 3, 4, 1, 5, 900, 111, 666, 0, 0]

console.log(FindCommonInArrays(arr1, arr2))


// 121. Best Time to Buy and Sell Stock
function maxProfit(prices: number[]): number {
    let maxProfit = 0
    for(let i = 0; i < prices.length - 1; i++) {
        for(let j = i; j < prices.length; j++) {
            let profit = prices[j] - prices[i]
            maxProfit = Math.max(maxProfit, profit)
        }
    }
    return maxProfit
}

const res = [7,6,4,3,1]

console.log('121 ans: ',maxProfit(res))


const sh = "A man, a plan, a canal: Panama"
console.log(sh.length - 1)

// 242. Valid Anagram
function isAnagram(s: string, t: string): boolean {

    if(s.length !== t.length) return false

    const count = new Map<string, number>()

    for(const char of s) {
        if(!count.has(char)) {
            count.set(char, 1)
        } else {
            count.set(char, count.get(char)! + 1)
        }
    }
    for(const char of t) {
        if (!count.has(char) || count.get(char)! === 0) return false;
        count.set(char, count.get(char)! - 1);
    }
    return true
}

function isAnagram2(s: string, t: string): boolean {
    if(s.length !== t.length) return false

    const count: Record<string, number> = {}

    for (const char of s) {
        count[char] = (count[char] || 0) + 1
    }

    for(const char of t) {
        if(!count[char]) return false
        count[char]--
    }

    return true
}

const s = "anagram", t = "nagaram"
// console.log('242 ans: ', isAnagram2(s, t))

// 136. Single Number
function singleNumber(nums: number[]): number {
    const set = new Set<number>()
    for(const num of nums) {
        if(!set.has(num)) {
            set.add(num)
        } else {
            set.delete(num)
        }
    }
    return [...set][0]
    
};

const singleNumArray = [2,2,1]

// console.log(singleNumber(singleNumArray))


function majorityElement(nums: number[]) {
    const map = new Map()
    for(const num of nums) {
        if(!map.has(num)) {
            map.set(num, 1)
        } else {
            map.set(num, map.get(num) + 1)
        }
    }

    for(const [key, value] of [...map]) {
        if(value > nums.length / 2) return key
    }
    return -1
};

const mElemNums = [2,2,1,1,1,2,2]

console.log(majorityElement(mElemNums))


