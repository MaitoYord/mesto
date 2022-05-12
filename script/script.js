let popup = qs('.popup');
let popupOpenBtn = qs('.profile__edit-button');
let popupClostBtn = qs('.popup__close-button');
let formElement = qs('.popup__container');

let defaultName = qs('.profile__name');
let defaultPassion = qs('.profile__passion');

let nameInput = qs('.popup__input_text_name');
let passionInput = qs('.popup__input_text_passion');


function qs(selector) {
    return document.querySelector(selector);
}

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = defaultName.textContent;
    passionInput.value = defaultPassion.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    defaultName.textContent = nameInput.value;
    defaultPassion.textContent = passionInput.value;
    closePopup();
}

popupOpenBtn.addEventListener('click', openPopup);
popupClostBtn.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
popup.addEventListener('click', function (event) {
    if (event.target == event.currentTarget && popup.classList.contains('popup_opened')) {
        closePopup();
    }
});
  ////////////////////////////////////////////////////

// function togglePopup(popUpObj) {
//     popUpObj.classList.toggle('popup_opened');

// }

// function formSubmitHandler(evt) {
//     evt.preventDefault();
//     defaultName.textContent = nameInput.value;
//     defaultPassion.textContent = passionInput.value;
//     togglePopup(popup);
// }

// nameInput.value = defaultName.textContent;
// passionInput.value = defaultPassion.textContent;

// popupOpenBtn.addEventListener('click', function () {
//     togglePopup(popup);
//     // popup.classList.toggle('popup_opened');
// });

// popupClostBtn.addEventListener('click', function (event) {
//     togglePopup(popup);
//     // popup.classList.toggle('popup_opened');
//     // либо
//     // let currentPopup = event.target.closest('.popup');
//     // currentPopup.classList.toggle('popup_opened');
//     // либо
//     // let currentPopup = event.target.closest('.popup').classList.toggle('popup_opened');
// });

// popup.addEventListener('click', function (event) {
//     if (event.target == event.currentTarget && popup.classList.toggle('popup_opened')) {
//         togglePopup(popup);
//     }
// });

// formElement.addEventListener('submit', formSubmitHandler);


