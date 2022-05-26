let popupEditProfile = qs('.popup_type_edit-profile');
let popupEditProfileBtn = qs('.profile__edit-button');
let popupEditProfileClostBtn = qs('.popup__close-button_type_edit-profile');
let formElementEditProfile = qs('.form_type_edit-profile');

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

//===================================5ая ПР===================================

let popupAdd = qs('.popup_type_add-place');
let popupAddBtn = qs('.profile__add-button');
let popupAddClostBtn = qs('.popup__close-button_type_add-place');

let popupImg = qs('.popup_type_img');
let popupImgBtn = qs('.popup_type_img');
let popupImgCover = qs('.popup__img-cover');
let popupImgCaption = qs('.popup__img-caption');
let popupImgClostBtn = qs('.popup__close-button_type_img');

let namePlaceInput = qs('.popup__input_place_name');
let linkPlaceInput = qs('.popup__input_place_url');
let formElementAddCard = qs('.form_type_add-card');

let elements = qs('.elements');
let formElementAdd = qs('.popup__container_type_add-place');

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

function getNewElement(card) {
    let newElement = document.querySelector('.elements-template').content.querySelector('.elements__element').cloneNode(true);
    let newElementlabel = newElement.querySelector('.elements__element-label');
    newElementlabel.textContent = card.name;
    let newElementImg = newElement.querySelector('.elements__element-img');
    newElementImg.src = card.link;
    newElement.querySelector('.elements__element-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__element-like_active');
    });
    newElement.querySelector('.elements__element-trashcan').addEventListener('click', () => {
        newElement.remove();
    });
    newElementImg.addEventListener('click', (evt) => {
        openPopupImg();
        popupImgCover.src = evt.target.src;
        popupImgCaption.textContent = newElement.textContent;
    });
    popupImgClostBtn.addEventListener('click', closePopupImg);
    return newElement;
}

function insertNewElement(element) {
    elements.append(getNewElement(element));
}

initialCards.forEach(function (card) {
    insertNewElement(card);
});

function openPopupImg() {
    popupImgBtn.classList.add('popup_opened');
}

function closePopupImg() {
    popupImgBtn.classList.remove('popup_opened');
}

function openPopupAdd() {
    popupAdd.classList.add('popup_opened');
}

function closePopupAdd() {
    popupAdd.classList.remove('popup_opened');
}

function formAddCardSubmitHandler(evt) {
    evt.preventDefault();
    let card = {};
    card.name = namePlaceInput.value;
    card.link = linkPlaceInput.value;
    insertNewElement(card);
    closePopupAdd();
}

popupAddBtn.addEventListener('click', openPopupAdd);
popupAddClostBtn.addEventListener('click', closePopupAdd);
popupAdd.addEventListener('click', event => {
    if (event.target == event.currentTarget && popupAdd.classList.contains('popup_opened')) {
        closePopupAdd();
    }
});
formElementAddCard.addEventListener('submit', formAddCardSubmitHandler);

popupImg.addEventListener('click', event => {
    if (event.target == event.currentTarget && popupImg.classList.contains('popup_opened')) {
        closePopupImg();
    }
});






