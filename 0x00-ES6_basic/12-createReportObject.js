export default function createReportObject(employeesList) {
  const myObj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(empls) {
      return Object.keys(empls).length;
    },
  };

  return myObj;
}
