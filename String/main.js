// // skip two numbers 

// function twoSkip(str, skip) {
//     const newKey = skip % 26
//     let newstr = ''
//     for(let i=0; i<str.length; i++) {
//         let letterPosition = str.charCodeAt(i) + skip
//         if(letterPosition <= 122) {
//             newstr = str.fromCharCode(letterPosition)
//         } else {
//             const letter = letterPosition % 122
//             newstr = fromCharCode(letter)
//         }

//     }
//     console.log(newstr)
// }

// twoSkip('hai', 2)



const originalString = "Hello, world!";

let reversedString = originalString.split("").reverse().join("");
console.log(reversedString);


const original= "Hello, world!!!!!!!";

let reverse = [...original].reduce((acc, char) => char+acc, '')
console.log(reverse)

let originalString1 = "Hello World!";
let reversedString1 = [...originalString1].reduce((acc,char)=> char+acc,'');
console.log(reversedString1);


let originalString3 = "Abhishek";
let reversedString3 = "";
let i = originalString.length;
while (i > 0) {
  reversedString3 += originalString.charAt(--i);
}
console.log(reversedString3);

// const h = 'hello '
// const w = 'welcome'
// const hw = h+w
// console.log(hw)



