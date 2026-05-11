
                                                // childrenData is optional parameter and must be nested object
export const objGenerator = (name, age, gender, childrenData) => {
    return childrenData ? {
        name,
        age,
        gender,
        childrenData
    } : {
        name,
        age,
        gender
    };
}