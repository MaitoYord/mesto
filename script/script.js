const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupEditProfileBtn = document.querySelector('.profile__edit-button');
const popupEditProfileClostBtn = popupEditProfile.querySelector('.popup__close-button_type_edit-profile');

const nameInput = popupEditProfile.querySelector('.popup__input_text_name');
const passionInput = popupEditProfile.querySelector('.popup__input_text_passion');
const formElementEditProfile = popupEditProfile.querySelector('.form_type_edit-profile');

const defaultName = document.querySelector('.profile__name');
const defaultPassion = document.querySelector('.profile__passion');

const popupAdd = document.querySelector('.popup_type_add-place');
const popupAddBtn = document.querySelector('.profile__add-button');
const popupAddClostBtn = popupAdd.querySelector('.popup__close-button_type_add-place');
const namePlaceInput = popupAdd.querySelector('.popup__input_place_name');
const linkPlaceInput = popupAdd.querySelector('.popup__input_place_url');
const formElementAddCard = popupAdd.querySelector('.form_type_add-card');

const cardsContainer = document.querySelector('.elements');
const elementsTemplate = document.querySelector('.elements-template').content;

const popupImg = document.querySelector('.popup_type_img');
const popupImgClostBtn = popupImg.querySelector('.popup__close-button_type_img');
const popupImgCover = popupImg.querySelector('.popup__img-cover');
const popupImgCaption = popupImg.querySelector('.popup__img-caption');

const initialCards = [
    {
        name: 'Иритилл Холодной Долины',
        link: 'images/irithyll_of_the_boreal_valley.jpg'
    },
    {
        name: 'Тбилиси',
        link: 'images/tbilisi.jpg'
    },
    {
        name: 'Новгород',
        link: 'images/vnovgorod.jpg'
    },
    {
        name: 'Сан-Фиерро',
        link: 'images/san_fierro.jpg'
    },
    {
        name: 'Бруклин',
        link: 'images/brooklyn.jpg'
    },
    {
        name: 'Майами',
        link: 'images/miami.jpg'
    },
    // {
    //     name: 'Алтай',
    //     link: 'https://sun9-20.userapi.com/s/v1/ig2/iOSMyTEisFB7kJdmV0LnLCQHWZJoCJMWPYJKuDuWaVzhMVhJEOgUTLNtEV90UmXgckcNkjgqzJmSL5nmQeBWb5qd.jpg?size=1080x1080&quality=95&type=album'
    // },
    // {
    //     name: 'тилл туммороу',
    //     link: 'https://sun9-44.userapi.com/s/v1/if1/piGeoMcpgB3NrWO0Rxlr7W3jAndpnaOhSxdWNoG841MJb1JwM_67Gw8rVPOOJYhmuVgZwN5W.jpg?size=1280x838&quality=96&type=album'
    // }

];


function openPopup(popup) {
    popup.classList.add('popup_opened');
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

function handlerFormEditProfileSubmit(evt) {
    evt.preventDefault();
    defaultName.textContent = nameInput.value;
    defaultPassion.textContent = passionInput.value;
    closePopup(popupEditProfile);
};

function getNewElement(card) {
    const newElement = elementsTemplate.querySelector('.elements__element').cloneNode(true);
    const newElementlabel = newElement.querySelector('.elements__element-label');
    newElementlabel.textContent = card.name;
    const newElementImg = newElement.querySelector('.elements__element-img');
    newElementImg.src = card.link;
    newElementImg.alt = card.name;
    newElement.querySelector('.elements__element-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__element-like_active');
    });
    newElement.querySelector('.elements__element-trashcan').addEventListener('click', () => {
        newElement.remove();
    });
    newElementImg.addEventListener('click', (evt) => {
        popupImgCover.src = evt.target.src;
        popupImgCaption.textContent = newElement.textContent;
        openPopup(popupImg);
    });
    return newElement;
};

function insertNewElement(element) {
    cardsContainer.prepend(getNewElement(element));
};

initialCards.forEach(function (card) {
    insertNewElement(card);
});

function handlerFormAddCardSubmit(evt) {
    evt.preventDefault();
    const card = {};
    card.name = namePlaceInput.value;
    card.link = linkPlaceInput.value;
    insertNewElement(card);
    closePopup(popupAdd);
    evt.target.reset();
};

popupEditProfileBtn.addEventListener('click', () => {
    nameInput.value = defaultName.textContent;
    passionInput.value = defaultPassion.textContent;
    openPopup(popupEditProfile);
});

popupEditProfileClostBtn.addEventListener('click', () => {
    closePopup(popupEditProfile);
});

popupEditProfile.addEventListener('click', evt => {
    if (evt.target == evt.currentTarget) {
        closePopup(popupEditProfile);
    }
});

formElementEditProfile.addEventListener('submit', handlerFormEditProfileSubmit);

popupAddBtn.addEventListener('click', () => {
    openPopup(popupAdd);
});

popupAddClostBtn.addEventListener('click', () => {
    closePopup(popupAdd);
});

popupAdd.addEventListener('click', evt => {
    if (evt.target == evt.currentTarget) {
        closePopup(popupAdd);
    }
});

formElementAddCard.addEventListener('submit', handlerFormAddCardSubmit);

popupImgClostBtn.addEventListener('click', () => {
    closePopup(popupImg);
});

popupImg.addEventListener('click', evt => {
    if (evt.target == evt.currentTarget) {
        closePopup(popupImg);
    }
});







