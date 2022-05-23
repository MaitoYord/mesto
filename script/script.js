let popupEditProfile = qs('.popup_type_edit-profile');
let popupEditProfileBtn = qs('.profile__edit-button');
let popupEditProfileClostBtn = qs('.popup__close-button_type_edit-profile');
let formElementEditProfile = qs('.popup__container_type_edit-profile');

let defaultName = qs('.profile__name');
let defaultPassion = qs('.profile__passion');

let nameInput = qs('.popup__input_text_name');
let passionInput = qs('.popup__input_text_passion');


function qs(selector) {
    return document.querySelector(selector);
}

function openPopupEditProfile() {
    popupEditProfile.classList.add('popup_opened');
    nameInput.value = defaultName.textContent;
    passionInput.value = defaultPassion.textContent;
}

function closePopupEditProfile() {
    popupEditProfile.classList.remove('popup_opened');
}

function formEditProfileSubmitHandler(evt) {
    evt.preventDefault();
    defaultName.textContent = nameInput.value;
    defaultPassion.textContent = passionInput.value;
    closePopupEditProfile();
}

popupEditProfileBtn.addEventListener('click', openPopupEditProfile);
popupEditProfileClostBtn.addEventListener('click', closePopupEditProfile);
formElementEditProfile.addEventListener('submit', formEditProfileSubmitHandler);
popupEditProfile.addEventListener('click', event => {
    if (event.target == event.currentTarget && popupEditProfile.classList.contains('popup_opened')) {
        closePopupEditProfile();
    }
});

//======================================================================================

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
        link: 'images/vnovgorod.jpg'
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

let popupAdd = qs('.popup_type_add-place');
let popupAddBtn = qs('.profile__add-button');
let popupAddClostBtn = qs('.popup__close-button_type_add-place');
let formElementAdd = qs('.popup__container_type_add-place');
let template = qs('.elements-template');


function openPopupAdd() {
    popupAdd.classList.add('popup_opened');
}

function closePopupAdd() {
    popupAdd.classList.remove('popup_opened');
}

function formAddSubmitHandler(evt) {

}

let getNewElement = (title) => {
    let newElement = template.content.cloneNode(true);
    let newElementlabel = newElement.qs('.elements__element-label');
    newElementlabel.textContent = title;
    return newElement;
};

popupAddBtn.addEventListener('click', openPopupAdd);
popupAddClostBtn.addEventListener('click', closePopupAdd);

popupAdd.addEventListener('click', event => {
    if (event.target == event.currentTarget && popupAdd.classList.contains('popup_opened')) {
        closePopupAdd();
    }
});


// const zzz = [
//     'Майами', 'Бруклин', 'Новгород', 'Тбилиси', 'asdf',

// ];

// const wrapElements = qs('.elements');

// const insertStuff = (wrap, cardName) => {
//     wrap.insertAdjacentHTML('beforeend',
//         `<article class="elements__element">
// <img class="elements__element-img" src="images/brooklyn.jpg" alt="Бруклин.">
// <div class="elements__element-label-like">
//     <h2 class="elements__element-label">${cardName}</h2>
//     <button type="button" class="elements__element-like elements__element-like_active"></button>
// </div>
// </article>`);
// }

// zzz.forEach((item) => {
//     insertStuff(wrapElements, item);
// });






