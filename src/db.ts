import { userNames, userNumber, userPassword } from "./elements"

class User{
    constructor(public username:string, public phoneNumber:number, public password:string){}
}

export let users: User[] = []

export function addUser(username:string,phone:number,password:string){
    let user = new User(username,phone,password)
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