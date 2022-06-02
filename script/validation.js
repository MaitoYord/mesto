const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitBtnSelector: '.form__submit',
    inactiveBtnClass: 'form__submit_inactive',
    inputErrClass: 'popup__input_type_err',
    errClass: 'popup__err_active'
};

const showInputErr = (formElement, inputElement, errMessage, inputErrClass, errClass) => {
    const errElement = formElement.querySelector(`.${inputElement.name}-err`);
    inputElement.classList.add(inputErrClass);
    errElement.textContent = errMessage;
    errElement.classList.add(errClass);
}

const hideInputErr = (formElement, inputElement, inputErrClass, errClass) => {
    const errElement = formElement.querySelector(`.${inputElement.name}-err`);
    inputElement.classList.remove(inputErrClass);
    errElement.classList.remove(errClass);
    errElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, inputErrClass, errClass) => {
    if (!inputElement.validity.valid) {
        showInputErr(formElement, inputElement, inputElement.validationMessage, inputErrClass, errClass);
    } else {
        hideInputErr(formElement, inputElement, inputErrClass, errClass);
    };
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const toggleButtonState = (formElement, inputList, submitBtnSelector, inactiveBtnClass) => {
    const buttonElement = formElement.querySelector(submitBtnSelector);
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveBtnClass);
        buttonElement.setAttribute('disabled', true);
        buttonElement.style.pointerEvents = "none";
    } else {
        buttonElement.classList.remove(inactiveBtnClass);
        buttonElement.removeAttribute('disabled');
        buttonElement.style.pointerEvents = "auto";
    };
}

const setEventListener = (formElement, inputSelector, submitBtnSelector, inactiveBtnClass, inputErrClass, errClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, inputErrClass, errClass);
            toggleButtonState(formElement, inputList, submitBtnSelector, inactiveBtnClass);
        });
    });
}

const enableValidation = ({
    formSelector,
    inputSelector,
    submitBtnSelector,
    inactiveBtnClass,
    inputErrClass,
    errClass
}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListener(formElement, inputSelector, submitBtnSelector, inactiveBtnClass, inputErrClass, errClass);
    });
}

const checkValidity = (config, popup) => {
    const formElement = popup.querySelector(config.formSelector);
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    inputList.forEach((inputElement) => {
        hideInputErr(formElement, inputElement, config.inputErrClass, config.errClass)
        toggleButtonState(formElement, inputList, config.submitBtnSelector, config.inactiveBtnClass);
    });
}

enableValidation(config);
