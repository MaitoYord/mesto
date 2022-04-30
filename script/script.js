let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.profile__edit-button');
let popupClostBtn = document.querySelector('.popup__close-button');

function togglePopup(popUpObj) {
    popUpObj.classList.toggle('popup_opened');
    // document.body.style.overflowY = "hidden";
}

popupOpenBtn.addEventListener('click', function () {
    togglePopup(popup);

    // popup.classList.toggle('popup_opened');
});

popupClostBtn.addEventListener('click', function (event) {
    // togglePopup();
    // popup.classList.toggle('popup_opened');
    // let currentPopup = event.target.closest('.popup');
    // currentPopup.classList.toggle('popup_opened');
    // либо
    let currentPopup = event.target.closest('.popup').classList.toggle('popup_opened');
    // document.body.style.overflowY = "scroll";

});

popup.addEventListener('click', function (event) {
    if (event.target == event.currentTarget) {
        togglePopup(popup);
        // document.body.style.overflowY = "scroll";
    }
});

