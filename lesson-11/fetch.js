

// fetch('https://swapi.dev234/api/planets/7', {method: 'GET'})
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

const fetchGenerator = (url) => fetch(url, {method: 'GET'})

const fetchResolver = async () => {
    // console.time('fetchResolver')
    // const fetch1 = await fetchGenerator('https://swapi.dev/api/planets/1');
    // const data1 = await fetch1.json()
    // console.log(data1)

    //     const fetch2 = await fetchGenerator('https://swapi.dev/api/planets/2');
    // const data2 = await fetch2.json()
    // console.log(data2)

    //     const fetch3 = await fetchGenerator('https://swapi.dev/api/planets/3');
    // const data3 = await fetch3.json()
    // console.log(data3)

    //     const fetch4 = await fetchGenerator('https://swapi.dev/api/planets/4');
    // const data4 = await fetch4.json()
    // console.log(data4)
    // console.timeEnd('fetchResolver')

    console.time('fetchResolverAll')
    const numbers = [1,2,3,4]
    try {
        const resultAllPromise = await Promise.all(numbers.map((num) => fetchGenerator(`https://swapi.dev/api/planets/${num}`)))
        const dataAll = await Promise.all(resultAllPromise.map((res) => res.json()))
        console.log(dataAll)
        console.timeEnd('fetchResolverAll')
    } catch (error) {
        console.log(error)
    }


    const fastestPlanet = await Promise.race(numbers.map((num) => fetchGenerator(`https://swapi.dev/api/planets/${num}`)))
    console.log(await fastestPlanet.json())
}
fetchResolver()
console.log('After fetchResolver call')