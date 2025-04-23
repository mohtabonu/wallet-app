import { cardsRender } from './cards';
import {User, users} from './db'
import { homePage, loginPage } from './elements';

function getUser(username: string, password: string) {
    return users.find(user => user.username === username && user.password === password);
}

export let currentUser: User | undefined = undefined;

export function logIned(form: HTMLFormElement) {
    const username = form.username.value;
    const password = form.password.value;

    const user = getUser(username, password);
    currentUser = user;

    if (user) {
        homePage.classList.remove('my-hidden');
        homePage.classList.add('my-visible');

        loginPage.classList.remove('my-visible');
        loginPage.classList.add('my-hidden');

        console.log("Добро пожаловать,", user.username);
        
        cardsRender(user.cards)

    } else {
        console.log("Неверный логин или пароль");
        return false;
    }
}
