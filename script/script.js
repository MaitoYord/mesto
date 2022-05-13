let popup = qs('.popup');
let popupOpenBtn = qs('.profile__edit-button');
let popupClostBtn = qs('.popup__close-button');

function qs(selector) {
    return document.querySelector(selector);
}

function togglePopup(popUpObj) {
    popUpObj.classList.toggle('popup_opened');
}

popupOpenBtn.addEventListener('click', function () {
    togglePopup(popup);
    // popup.classList.toggle('popup_opened');
});

popupClostBtn.addEventListener('click', function (event) {
    // popup.classList.toggle('popup_opened');
    // либо
    // let currentPopup = event.target.closest('.popup');
    // currentPopup.classList.toggle('popup_opened');
    // либо
    let currentPopup = event.target.closest('.popup').classList.toggle('popup_opened');
});

popup.addEventListener('click', function (event) {
    if (event.target == event.currentTarget && popup.classList.toggle('popup_opened')) {
        togglePopup(popup);
    }
});

// Нижа часть за редактирование имени и информации о себе

let formElement = qs('.popup__container');

let defaultName = qs('.profile__name');
let defaultPassion = qs('.profile__passion');

let nameInput = qs('.popup__name-input');
let passionInput = qs('.popup__passion-input');


function formSubmitHandler(evt) {
    evt.preventDefault();
    defaultName.textContent = nameInput.value;
    defaultPassion.textContent = passionInput.value;
    togglePopup(popup);
}

formElement.addEventListener('submit', formSubmitHandler);


const initialCards = [
    {
        name: 'Майами',
        link: 'images/miami.jpg'
    },
    {
        name: 'Бруклин',
        link: 'images/brooklyn.jpg'
    },
    {
        name: 'Сан-Фиерро',
        link: 'images/san_fierro.jpg'
    },
    {
        name: 'Новгород',
        link: 'images/like.svg'
    },
    {
        name: 'Тбилиси',
        link: 'images/tbilisi.jpg'
    },
    {
        name: 'Иритилл Холодной долины',
        link: 'images/irithyll_of_the_boreal_valley.jpg'
    }
];