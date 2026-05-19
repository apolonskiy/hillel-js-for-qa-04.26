export class Human {

    countryOfOrigin = "USA";

    // private, must be defined with # and can be used only inside the class
    #socialSecurityNumber;

    // static property
    static teethCount = 32;

    // private propertu
    #gender;

    constructor (name, age, gender, countryOfOrigin = "Ukraine") {

        this.name = name;
        this.age = age;
        this.gender = gender;
        this.countryOfOrigin = countryOfOrigin;

    }

    /*
     * This is not common approach
     * describeInObject = function() {
     *     console.log('I also work and have access to this', this.name)
     * }
     */

    static describeTeethCount () {

        console.log(`Humans have ${this.teethCount} teeth. ${this.age}`);

    }

    #addCountryOfOrigin () {

        console.log(
            "Country of origin is",
            this.countryOfOrigin,
        );

    }

    describeYourself () {

        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I am ${this._gender}. 
            My Social Security Number is ${this.#socialSecurityNumber}`);
        this.#addCountryOfOrigin();

    }

    get gender () {

        return this.#gender;

    }

    set gender (genderValue) {

        if (genderValue.trimg() !== "") {

            this.#gender = genderValue;

        }

    }

    get socialSecurityNumber () {

        return this.#socialSecurityNumber;

    }

    set socialSecurityNumber (value) {

        if (typeof value === "string" && value.length === 9) {

            this.#socialSecurityNumber = value;

        } else {

            console.error("Invalid Social Security Number. It must be a string of 9 characters.");

        }

    }

}

const human1 = new Human(
    "Andrii",
    30,
    "male",
    "Ukraine",
);

console.log(human1 instanceof Human); // true
/*
 * console.log(human1)
 * console.log('describeYourself' in human1) // true
 * console.log(human1.countryOfOrigin) // Ukraine
 * console.log(human1.socialSecurityNumber) // undefined
 * human1.socialSecurityNumber = '123456789';
 * console.log(human1.socialSecurityNumber) //
 * human1.describeYourself()
 * human1.gender = 'female'
 * console.log(human1.gender)
 */

/*
 * --- STATIC
 * console.log(human1)
 * console.log(human1.teethCount) - does not work, since teethCount is static property
 * console.log(Human.teethCount) // 32
 * Human.describeTeethCount() // Humans have 32 teeth.
 */
