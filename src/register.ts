import { registerPage, homePage } from "./elements";
import { addUser, getInfo } from "./db";

export function registered(form: HTMLFormElement){
    const username = form.username.value;
    const phone = form.tel.value;
    const password = form.password.value;
 
    addUser(username,phone,password);
    form.reset()

    registerPage.classList.remove('my-visible');
    registerPage.classList.add('my-hidden');
    homePage.classList.remove('my-hidden')
    homePage.classList.add('my-visible')

    getInfo(username,phone,password);

    return;
}