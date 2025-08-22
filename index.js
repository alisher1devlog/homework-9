const employess = [
    {name: "Alice",age:25, department:"HR",salary:50000},
    {name: "Bob",age:30, department:"Engineering",salary:70000},   
    {name: "Charlie",age:35, department:"HR",salary:60000},
    {name: "David",age:28, department:"HR",salary:65000}
];

const updateEmployees = employess.map((employee) => {
    if(employee.department == "Engineering"){
        return {...employee, salary: employee.salary *1.1};
    }
    return employee;
});

console.log(updateEmployees);