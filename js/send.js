"use strict";

const EMAIL = document.querySelector('#email');
const PASSWORD = document.querySelector('#password');
const SUB_BTN = document.querySelector('.sub_btn');

SUB_BTN.addEventListener('click', () => {
    const promise = fetch('/login/', {
        metod: "POST",
        body: "email=EMAIL&password=PASWORD",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
});