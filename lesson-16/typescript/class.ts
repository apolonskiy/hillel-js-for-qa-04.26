

interface UserData {
    firstName: string;
    lastName: string;
    method1(arg1: string): string;
}

class User implements UserData {
    private securityNumber: number;
    protected axiosInstance: any;
    public firstName: string
    public lastName: string

    constructor(firstName: string, lastName: string, securityNumber: number, axiosInstance: any) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.securityNumber = securityNumber;
        this.axiosInstance = axiosInstance;
    }

    method1(arg1: string): string {
        return `Method 1 called with ${arg1} and security number is ${this.securityNumber}`;
    }
}

class Admin extends User {
    readonly hasAdminAccess: boolean = true;
    constructor(firstName: string, lastName: string, securityNumber: number, axiosInstance: any) {
        super(firstName, lastName, securityNumber, axiosInstance);
    }

    method2(): string {
        return `and private is not adailable ${this.axiosInstance}`;
    }

    get adminAccessInfo(): string {
        return `Admin access: ${this.hasAdminAccess}`;
    }

    set adminAccess(value: boolean) {
        // this.hasAdminAccess = value; // Cannot assign to 'hasAdminAccess' because it is a read-only property.
    }
}

const admin = new Admin("John", "Doe", 123456789, null);
console.log(admin.method1("test1"));


const generateAdmin = (userData: Admin): Admin => {
    return new Admin(userData.firstName, userData.lastName, 123456789, null);
}

generateAdmin({obv: "qwr"})