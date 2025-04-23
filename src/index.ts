import { hours, minutes } from "./time";
import {
    timeElements, dateElements, wayToRegister, wayToLogin, registerPage, loginPage, registerForm, loginForm, accountBtns, homePage, accountPage,
    myCardBtns, myCardPage, homeBtns, logOut,
    notificationBtns,
    notificationPage,
    addCardElm,
    cardModal,
    cancelBtn,
    cardForm
} from "./elements";
import { registered } from './register'
import { logIned } from "./login";
import { addCard } from "./cards";

timeElements.forEach(elm => {
    elm.textContent = `${hours}:${minutes}`;
})

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

loginForm.addEventListener('submit', (e) => {
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

        notificationPage.classList.add('my-hidden')
        notificationPage.classList.remove('my-visible')

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


logOut.addEventListener('click', () => {
    homePage.classList.add('my-hidden')
    homePage.classList.remove('my-visible')

    accountPage.classList.add('my-hidden')
    accountPage.classList.remove('my-visible')

    myCardPage.classList.add('my-hidden')
    myCardPage.classList.remove('my-visible')

    loginPage.classList.add('my-visble');
    loginPage.classList.remove('my-hidden')
})

notificationBtns.forEach(notificationBtn => {

    notificationBtn.addEventListener('click', () => {
        homePage.classList.add('my-hidden')
        homePage.classList.remove('my-visible')

        accountPage.classList.add('my-hidden')
        accountPage.classList.remove('my-visible')

        myCardPage.classList.add('my-hidden')
        myCardPage.classList.remove('my-visible')

        notificationPage.classList.remove('my-hidden')
        notificationPage.classList.add('my-visible')
    })


})

addCardElm.addEventListener('click',()=>{
    cardModal.classList.remove('hidden');
})

cancelBtn.addEventListener('click', () => {
    cardModal.classList.add('hidden');
});

cardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputs = Array.from(cardForm.querySelectorAll('input'));
    const [numberInput, dateInput, balanceInput] = inputs;
    const cardData = {
      number: +numberInput.value,
      expiration: dateInput.value,
      balance: parseFloat(balanceInput.value),
    };

    addCard(cardData.number, cardData.expiration, cardData.balance)
  
    console.log("Добавлена карта:", cardData);
    cardModal.classList.add('hidden');
    cardForm.reset();

});