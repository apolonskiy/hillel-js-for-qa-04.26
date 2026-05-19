/*
 * const person = {name: 'QWE', name: 'John', age: 30};
 * const newPerson = {gender: 'female', name: 'Alice', ...person};
 */

// // newPerson.name = "Changed Name";
// console.log(newPerson);
// console.log(person); // person не змінився, оскільки newPerson є копією, а не посиланням на той же об'єкт

/*
 * const parents = {
 *     mother: {
 *         name: "Jane",
 *         age: 55
 *     },
 *     father: {
 *         name: "Jack",
 *         age: 60
 *     }
 * }
 */

/*
 * const ojb1 = {
 *     name: "Object 1",
 *     age: 10,
 *     parents
 * }
 */

/*
 * console.log(typeof JSON.stringify(ojb1));
 * const copyObj1 = JSON.parse(JSON.stringify(ojb1)); // Глибока копія об'єкта ojb1
 * const copyObj2 = structuredClone(ojb1); // Глибока копія об'єкта ojb1 за допомогою structuredClone
 * copyObj1.name = "Changed Object 1 Name";
 * copyObj1.parents.mother.name = "Changed Mother Name";
 */

/*
 * console.log(copyObj1);
 * console.log(ojb1);
 */

const generateObjectInfo = (name, age = 50, gender = "male", childrenData = {}) => {

    return childrenData
        ? {
            name,
            age,
            gender,
            "children": childrenData,
        }
        : {name,
            age,
            gender};

};

generateObjectInfo(
    "Andrii",
    undefined,
    undefined,
    {"age": 5,
        "name": "Marry"},
);

const generataObjectWithObjectArg = (obj) => {

    const defaultvalues = {"age": 50,
        "gender": "male",
        "childrenData": {}};
    obj = {...defaultvalues,
        ...obj};
    return obj.childrenData
        ? {
            "name": obj.name,
            "age": obj.age,
            "gender": obj.gender,
            "children": obj.childrenData,
        }
        : {"name": obj.name,
            "age": obj.age,
            "gender": obj.gender};

};

console.log(generataObjectWithObjectArg({"name": "Andrii",
    "childrenData": {"age": 5,
        "name": "Marry"}}));
