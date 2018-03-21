export class User {
    constructor(public email: string, public name: string, private password: string){}

    matches(another: User):boolean {
        return another !== undefined
        && another.email === this.email
        && another.password === this.password
    }
}


export const users: {[key: string]: User} = {
    "patrick@flexpro.com.br": new User('patrick@flexpro.com.br', 'Patrick', '1234'),
    "fernanda@gmail.com.br": new User('fernanda@gmail.com.br', 'Fernanda', '4321')
}
