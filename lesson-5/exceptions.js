
const value = 1

try {
    if(value > 0 ){
     console.log('qqqq')
    } else {
        throw new Error('Error text');
    }
} catch(error) {
    console.error('Caught an error:', error.stack);
    // throw Error('Still some error happened')
} finally {
    console.log('This will always execute, even if an error is thrown');
}


console.log('did not get here if throw is unhandled')

