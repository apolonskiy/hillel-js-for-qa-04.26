
// console.log(3 > 1);  // true
// console.log(2 != 1); // true
// console.log(3 == 1); // false

// console.log( '2' > 1 ); // true, рядок '2' стає числом 2
// // console.log( 'a' != 1 );
// const a = 'a'
// console.log(a.charCodeAt(0)); // 97 - код символу 'a' в таблиці Unicode
// console.log('ba' < 'ab');


// --- non strict comparison

// console.log('' == false); // true
// console.log('01' == 1); // true, рядок '01' стає числом 1

// // Логічне значення true стає 1, а false — 0.

// console.log(true == 1); // true  1 === 1
// console.log(false == 0); // true 0 === 0


// console.log('\n')
// // --- strict comparison    
// console.log(0 === false); // false
// console.log('' === false); // false
// console.log('1' == 1); // true
// console.log('1' === 1); // false

// console.log(null > 0);  // false, 0 > 0
// console.log(null >= 0); // true, 0 == 0
// console.log(null == 0); // false, null == 0

// console.log('\n')
// console.log(undefined > 0); // false, NaN > 0
// console.log(undefined < 0); // false, NaN < 0
// console.log(undefined == 0);// false NaN == 0