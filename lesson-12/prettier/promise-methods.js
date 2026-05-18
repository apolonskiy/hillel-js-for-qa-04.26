

const promiseGenerator = (decider, delay) => new Promise((resolve, reject) => {
    if(decider){
        setTimeout(() => resolve({status: 'success' + delay}), delay)
        
    } else {
        setTimeout(() => reject({status: 'error' + delay}), delay)
    }
})

const promise1 = promiseGenerator(false, 1000);
const promise2 = promiseGenerator(false, 500);
const promise3 = promiseGenerator(false, 1500);

Promise.all([promise1, promise2, promise3])
    .then((res) => console.log(res)) // Виконається, якщо всі проміси успішні
    .catch((err) => console.log(err)); // Виконається, якщо хоча б один проміс відхилено

Promise.allSettled([promise1, promise2, promise3])
    .then((res) => console.log(res)) // Виконається, коли всі проміси завершаться (успішно або з помилкою)
    // .catch((err) => console.log(err)); // Не виконається, оскільки allSettled не відхиляє проміс

Promise.race([promise1, promise2, promise3])
    .then((res) => console.log(res)) // Виконається, коли перший проміс завершиться (успішно або з помилкою)
    .catch((err) => console.log(err)); // Виконається, якщо перший проміс відхилено

Promise.any([promise1, promise2, promise3])
    .then((res) => console.log(res)) // Виконається, коли перший проміс успішно завершиться
    .catch((err) => console.log(err)); // Виконається, якщо всі проміси відхилені