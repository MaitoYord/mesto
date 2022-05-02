let popup = qs('.popup');
let popupOpenBtn = qs('.profile__edit-button');
let popupClostBtn = qs('.popup__close-button');
let formElement = qs('.popup__container');

let defaultName = qs('.profile__name');
let defaultPassion = qs('.profile__passion');

let nameInput = qs('.popup__name-input');
let passionInput = qs('.popup__passion-input');

function qs(selector) {
    return document.querySelector(selector);
}

function togglePopup(popUpObj) {
    popUpObj.classList.toggle('popup_opened');
    nameInput.value = defaultName.textContent;
    passionInput.value = defaultPassion.textContent;
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    defaultName.textContent = nameInput.value;
    defaultPassion.textContent = passionInput.value;
    togglePopup(popup);
}

popupOpenBtn.addEventListener('click', function () {
    togglePopup(popup);
    // popup.classList.toggle('popup_opened');
});

popupClostBtn.addEventListener('click', function (event) {
    togglePopup(popup);
    // popup.classList.toggle('popup_opened');
    // либо
    // let currentPopup = event.target.closest('.popup');
    // currentPopup.classList.toggle('popup_opened');
    // либо
    // let currentPopup = event.target.closest('.popup').classList.toggle('popup_opened');
});

popup.addEventListener('click', function (event) {
    if (event.target == event.currentTarget && popup.classList.toggle('popup_opened')) {
        togglePopup(popup);
    }
});

formElement.addEventListener('submit', formSubmitHandler);


