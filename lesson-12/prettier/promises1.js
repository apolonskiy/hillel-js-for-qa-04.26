const promiseGenerator = (decider) =>
    new Promise((resolve, reject) => {
        if (decider) {
            setTimeout(() => resolve({ status: 'success' }), 1000);
        } else {
            setTimeout(() => reject({ status: 'error' }), 500);
        }
    });

const asuncFn = async () => {};
console.log(asuncFn());

// const promise1 = promiseGenerator(true);
// console.log(promise1) // Promise { { status: 'success' } }
promiseGenerator(true)
    .then(
        (res) => res.status,
        (err) => console.log(err),
    ) // 'success'
    .then((status) => console.log(status)) // 'success'
    .catch((err) => console.log(err));

promiseGenerator(false)
    .then((res) => res.status) // 'success'
    .then((status) => console.log(status)) // 'success'
    .catch((err) => console.log(err));

function promiseAbc() {
    const result = fetch('https://swapi.dev/api/planets/4')
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));
    return result;
}

const asyncronousFn = async () => {
    const result = await promiseAbc();
    console.log(result);
};
asyncronousFn();
