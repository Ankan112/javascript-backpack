//! JavaScript String Length

const sentence =
  "I like Cricket more than Football! Because Cricket mappay all time";
// console.log(sentence.length);

//! JavaScript charAt, charCodeAt, & at method
// console.log(sentence.charAt(11));
// console.log(sentence.charCodeAt(11));
// console.log(sentence.at(11));
/* 
sting.charAt()
string.chartCodeAt()
string.at() // include in 2022 & support all the modern browsers
*/

//! Extracting String Parts

/* 
substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().
substr is deprecated now but the use case is second parameter first parameter to second parameter length. Jemon ami 4 length er por theke aro 10 length porjonto chi
They work with length
*/

// console.log(sentence.slice(4, 12) + "...");
// console.log(sentence.substring(4, 6) + "...");
// console.log(sentence.substr(4, 10) + "...");

//! Converting to Upper and Lower Case

/* 
A string is converted to upper case with toUpperCase():
A string is converted to lower case with toLowerCase():
*/
// console.log(sentence.toUpperCase());
// console.log(sentence.toLowerCase());

//! JavaScript String concat()

// let text1 = "Ankan";
// let text2 = "Halder";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

//! JavaScript String trim()

let text1 = "   Hello World! ";
// let text2 = text1.trim();
let text2 = text1.trimStart();
console.log(text2);
