interface UserInterface {
    name: string;
    age: number;
    readonly type: string;
    bithday?: Date;
    setName(str: string): void;
}

let user: UserInterface = {
    name: 'Denis',
    age: 29,
    type: 'user',
    setName(str: string): void {
        this.name = str;
    }
};

// let users: UserInterface[] = [
//     {
//         name: 'Denis',
//         age: 29,
//         type: 'user'
//     },
//     {
//         name: 'Ivan',
//         age: 29,
//         type: 'user'
//     },
// ];
