// Flaten objects
export const flatenEmployee = data => {
  if (data.employee) {
    return {
      ...data,
      fullName: `${data.employee.first_name} ${data.employee.last_name}`
    };
  }
};
