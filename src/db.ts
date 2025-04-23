import { userNames, userNumber, userPassword } from "./elements"

export interface Card {
    cardNumber: number;
    expiryDate: string;
    balance: number;
    history: History[];
}

class History{
    constructor(
        public date: string,
        public amount: number,
        public type: 'deposit' | 'withdrawal' // можно указать тип операции
    ) {}
}

export class User{
    constructor(public username:string, public phoneNumber:number, public password:string, public cards: Card[],){}
}

export let users: User[] = [
    {
        username: 'admin',
        phoneNumber: 998998745612,
        password: 'bonu',
        cards: [
            {
                cardNumber: 9580124565892568,
                expiryDate: '09/28',
                balance: 200,
                history: [
                    { date: '2025-04-01', amount: 50, type: 'deposit' },
                    { date: '2025-04-10', amount: 20, type: 'withdrawal' }
                ]
            },
            {
                cardNumber: 1000022558925685,
                expiryDate: '10/30',
                balance: 1500,
                history: [
                    { date: '2025-03-15', amount: 100, type: 'deposit' },
                    { date: '2025-03-20', amount: 30, type: 'withdrawal' }
                ]
            }
        ],
    }
];


export function addUser(username:string,phone:number,password:string){
    let user = new User(username,phone,password,[])
    users.push(user)
    console.log(users)
}

export function getInfo(name:string,phone:number,password:string){
    userNames.forEach(userName =>{
        userName.textContent = name;
    })

    userNumber.textContent = phone.toString();
    userPassword.textContent = password;
}