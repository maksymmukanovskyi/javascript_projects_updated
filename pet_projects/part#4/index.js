'use strict';
const selector = el => document.querySelector(el);

const strings = {
modal: selector('.modal'),
overlay: selector('.overlay'),
btnCloseModal: selector('.close-modal'),
btnsOpenModal: document.querySelectorAll('.show-modal'),
};

const modal = {
    active: false,
};


const toggleModal = function(e){
    const showModalPressed = e.target.classList.value === "show-modal";
    modal.active = showModalPressed? true: false;
};

const ctrlElements =  Array.from(strings.btnsOpenModal).concat(strings.btnCloseModal, strings.overlay);


ctrlElements.forEach(el => el.addEventListener('click', onClickModal));

function onClickModal(e){
        toggleModal(e);
        modal.active ? strings.modal.classList.remove('hidden'): strings.modal.classList.add('hidden');
        modal.active ? strings.overlay.classList.remove('hidden'): strings.overlay.classList.add('hidden');
    };