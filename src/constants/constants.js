export const validateRegistrationSignIn = {
    email: /^(([a-zA-Z0-9#!$%&'*+\-\/=?^_`{}|~]+(\.[a-zA-Z0-9#!$%&'*+\-\/=?^_`{}|~]+)*)|("[^"]*"))@([a-zA-Z0-9]{1,15})(\.([a-zA-Z0-9]{1,15}))*(\.([a-zA-Z0-9]{1,12})){1,100}$/,
    password: /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}/,
    username: /^[A-Za-z]+$/,
}

export const MODAL_TYPES = {
    ACTION_MODAL_CREATE: 'modalActionCreate',
    ADD_EXPENSE_MODAL: 'addExpenseModal',
    ADD_ACTIONS: 'addActionsModal',
};

export const CATEGORIES_EXPENSE = {
    FOOD: 'food',
    CAFE: 'cafe',
    CONNECTION: 'connection',
    ENTERTAINMENT: 'entertainment',
    TAXI: 'taxi',
    BILL: 'bill',
    HEALTH: 'health',
    TRANSPORT: 'transport',
};

export const CATEGORIES_PROFIT = {
    SALARY: 'salary',
    SAVING: 'saving',
    DEPOSIT: 'deposit',
};

export const CATEGORIES_COLORS = {
    food: '#A9D9C3',
    cafe: '#69B1C2',
    connection: '#5C80AC',
    entertainment: '#FBDD7B',
    taxi: '#F3A578',
    bill: '#58BB7A',
    health: '#FFB3B3',
    transport: '#C3C9CE',
}
