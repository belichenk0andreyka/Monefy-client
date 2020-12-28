export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS';
export const TOGGLE_RIGHT_DRAWER = 'TOGGLE_RIGHT_DRAWER';
export const TOGGLE_LEFT_DRAWER = 'TOGGLE_LEFT_DRAWER';

export const closeModal = (payload) => ({ type: CLOSE_MODAL, payload });
export const openModal = (payload) => ({ type: OPEN_MODAL, payload });
export const toggleModal = (payload) => ({ type: TOGGLE_MODAL, payload });
export const closeAllModal = () => ({ type: CLOSE_ALL_MODALS });
export const toggleRightDrawer = () => ({ type: TOGGLE_RIGHT_DRAWER });
export const toggleLeftDrawer = () => ({ type: TOGGLE_LEFT_DRAWER });
