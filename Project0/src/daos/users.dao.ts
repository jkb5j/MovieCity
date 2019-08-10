/**
 * No longer in use
 */
import User from '../models/user';

let users: User[] = [
    new User(1, 'btkruppa', 'password', 'blake.kruppa@revature.com', 'blake', 'kruppa', '90210', 'admin'),
    new User(2, 'bill', 'password', 'bill@revature.com', 'bill', 'bob', '90210', 'manager'),
    new User(3, 'larry', 'password', 'larry@revature.com', 'larry', 'the cableman', '90210', 'employee'),
];

export function findAll(): User[] {
    return users;
}

export function findById(id: number): User {
    return users.filter(user => user.id === id)[0];
}

export function findByFirstName(firstName: string): User[] {
    return users.filter(user => user.firstName === firstName);
}

export function findByUsernameAndPassword(username: string, password: string): User {
    return users.filter(user => user.username === username && user.password === password)[0];
}

export function save(user?: User) {
    const newId = Math.floor(Math.random() * 100000000);
    user.id = newId;
    users.push(user);
}



/**
 * {
 *  id: 1,
 * username: 'btkruppa'
 * password: 'password'
 * firstName: 'blake'
 * lastName: 'kruppa'
 * email: 'blake.kruppa@revature.com'
 * phone: '0903294'
 * }
 *
 * {
 *  id: 1,
 *  phone: '9329304'
 * }
 * @param user
 */
export function patch(user: Partial<User>) {
    users = users.map(ele => {
        if (user.id === ele.id) {
            return {
                ...ele,
                ...user
            };
        } else {
            return ele;
        }
    });
}


export function deleteUser(id: number) {
    users = users.filter(user => user.id !== id);
}