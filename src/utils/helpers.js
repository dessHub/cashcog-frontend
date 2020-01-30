// Flaten objects
export const flatenEmployee = data => {
  if (data.employee) {
    return {
      ...data,
      fullName: `${data.employee.first_name} ${data.employee.last_name}`
    };
  }
};

export const filterExpenses = (status, expenses) => {
  return expenses.filter(item => item.approved === status);
};

export const getCount = (status, expenses) => {
  let data = expenses.filter(item => item.approved === status);
  return data ? data.length : 0;
};
