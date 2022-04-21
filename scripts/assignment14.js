
//Problem 1

const employees = [
  {
    name: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligable: true,
  },

  {
    name: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligable: true,
  },

  {
    name: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligable: false,
  },
];


console.log('Problem 1',employees);

//Problem 2

const company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employees,
};

console.log('Problem 2',company);

//Problem 3

function addEmployee(employeeName, department, designation, salary, raiseEligable) {
  const newEmployee = {
    name: employeeName,
    department: department,
    designation: designation,
    salary: salary,
    raiseEligable: raiseEligable,
  };

  employees.push(newEmployee);

}

addEmployee('Anna', 'Tech', 'Executive', 25600, false);
console.log('Problem 3', company);

//Problem 4

let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
  totalSalary += employees[i].salary;
}

console.log('Problem 4', totalSalary);

//Problem 5

function doRaise() {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].raiseEligable) {
      employees[i].salary *= 1.1;
      employees[i].raiseEligable = false;
    }
  }
}

doRaise();
console.log('Problem 5', employees);


//Problem 6

const workFromHome = ['Anna', 'Sam'];
function setWFH() {
for (let i = 0; i < employees.length; i++) {
  employees[i].wfh = workFromHome.includes(employees[i].name);
  }
}

setWFH();
console.log('Problem 6', employees);
