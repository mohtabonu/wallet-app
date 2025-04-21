import { hours, minutes, day, month, year } from "./time";
import {
    timeElements, dateElements, wayToRegister, wayToLogin, registerPage, loginPage, registerForm, loginForm, accountBtns, homePage, accountPage,
    myCardBtns, myCardPage, homeBtns, logOut
} from "./elements";
import { registered } from './register'
import { logIned } from "./login";

timeElements.forEach(elm => {
    elm.textContent = `${hours}:${minutes}`;
})
dateElements.forEach(date => {
    date.textContent = `Today, ${day} ${month} ${year}`
});

wayToRegister.addEventListener('click', () => {
    registerPage.classList.remove('my-hidden')
    registerPage.classList.add('my-visible')

    loginPage.classList.remove('my-visible')
    loginPage.classList.add('my-hidden')
})

wayToLogin.addEventListener('click', () => {
    registerPage.classList.add('my-hidden')
    registerPage.classList.remove('my-visible')

    loginPage.classList.add('my-visible')
    loginPage.classList.remove('my-hidden')
})

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    registered(form)
})

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const form = e.target as HTMLFormElement
    logIned(form);
})

homeBtns.forEach(homeBtn => {
    homeBtn.addEventListener('click', () => {
    accountPage.classList.add('my-hidden')
    accountPage.classList.remove('my-visible')

    myCardPage.classList.add('my-hidden')
    myCardPage.classList.remove('my-visible')

    homePage.classList.add('my-visible');
    homePage.classList.remove('my-hidden')

    console.log('clicked')
})
});



accountBtns.forEach(accountBtn => {
    accountBtn.addEventListener('click', () => {
        homePage.classList.add('my-hidden')
        homePage.classList.remove('my-visible')

        myCardPage.classList.add('my-hidden')
        myCardPage.classList.remove('my-visible')

        accountPage.classList.remove('my-hidden')
        accountPage.classList.add('my-visible')
    })
});

myCardBtns.forEach(myCardBtn => {
    myCardBtn.addEventListener('click', () => {
    homePage.classList.add('my-hidden')
    homePage.classList.remove('my-visible')

    accountPage.classList.add('my-hidden')
    accountPage.classList.remove('my-visible')

    myCardPage.classList.remove('my-hidden');
    myCardPage.classList.add('my-visible')
})
});


logOut.addEventListener('click', ()=>{
    homePage.classList.add('my-hidden')
    homePage.classList.remove('my-visible')

    accountPage.classList.add('my-hidden')
    accountPage.classList.remove('my-visible')

    myCardPage.classList.add('my-hidden')
    myCardPage.classList.remove('my-visible')

    loginPage.classList.add('my-visble');
    loginPage.classList.remove('my-hidden')
})


