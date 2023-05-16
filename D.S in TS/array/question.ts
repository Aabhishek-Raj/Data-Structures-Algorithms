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
