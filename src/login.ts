import {users} from './db'
import { homePage, loginPage } from './elements';

function isUserValid(username: string, password: string): boolean {
    return users.some(user => user.username === username && user.password === password);
}

export function logIned(form: HTMLFormElement) {
    const username = form.username.value;
    const password = form.password.value;

    if (isUserValid(username, password)) {
        homePage.classList.remove('my-hidden')
        homePage.classList.add('my-visible')

        loginPage.classList.remove('my-visible');
        loginPage.classList.add('my-hidden')
    } else {
        console.log("Неверный логин или пароль");
        return false;
    }
}
