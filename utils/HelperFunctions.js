const netExpense = categories => {
    let total = 0;
    for (let category of categories) total += category.total;
    return total;
};

export {
    netExpense,
};