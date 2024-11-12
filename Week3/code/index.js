// defines the function EmployeeInfo
function EmployeeInfo(name, Salary) 
    {
        console.log("Welcome " + name + " your monthly salary is: " + Salary)
    }

console.log("This is NOT my first programe")

//defining variables
var EmployeeName = "Brian"
var EmployeeSalary = 4444

//calling function employeeinfo
EmployeeInfo(EmployeeName, EmployeeSalary)
    const EmployeeSkills = (skills) =>
        {
            console.log(EmployeeName + " is an expert in " + skills)
        } 
        EmployeeSkills("JavaScript")
//importing modules
const student = require("./studentinfo")
const person = require("./person")            

//using the student module
console.log("Student name: " + student.getName())
console.log(student.Location())
console.log(student.dob)

// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+ student.Studentgrade(55))

// creating new Person
person1 = new person("Bob",24,"randomemail@uel.ac.juk")
console.log("using person Module",person1.getPersonInfo())
console.log("Programe terminated")