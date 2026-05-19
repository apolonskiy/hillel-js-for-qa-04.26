const asyncPow1 = async (arg) => arg ** 2;

async function name (params) {
}

const fnName = async function (params) {
};

asyncPow1(3).
    then((res) => console.log(res)). // 9
    catch((err) => console.log(err));

const asyncResolver = async () => {

    try {

        const result = await asyncPow1(3);
        console.log(result);

    } catch (err) {

        console.log(err);

    }

};
console.log(asyncResolver());
