export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS';

export const closeModal = (payload) => ({ type: CLOSE_MODAL, payload });
export const openModal = (payload) => ({ type: OPEN_MODAL, payload });
export const toggleModal = (payload) => ({ type: TOGGLE_MODAL, payload });
export const closeAllModal = () => ({ type: CLOSE_ALL_MODALS });
