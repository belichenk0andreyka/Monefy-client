import React from 'react';

import { getAllExpensesIncomes } from 'helpers/actionHelper';

const ListExpenses = ({ actionsData }) => {
    console.log(getAllExpensesIncomes(actionsData.categories));
    return (
        <div>
            ListExpenses
        </div>
    );
};

export default ListExpenses;
