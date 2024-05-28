// <----------------------Array Assignments-------------------------->

/*Part 1: Basic Arrays - Product Inventory
Challenge:
You are tasked with creating a Product Inventory system. Implement functions and logic to
manage object manipulation effectively.
1. Define a type alias named Product to represent a product with the following
properties:
• name (string): The name of the product.
• price (number): The price of the product.
• inventory (object): An object containing inventory details including:
• stock (number): The number of products available.
• colorOptions (string[ ]): An array listing available colors.
2. Create an array named products containing at least three product objects. Each
product object should include a name, price, and inventory details.
3. Implement a function named changeColor that takes a product object and a new
color as input. This function should update the color property of the product and
adjust the price based on the new color (implement your own logic, e.g., increase by
10% for red, decrease by 5% for blue).
4. Display each product's name, price, stock, and available colors. Iterate through the
products array and print each product's details.
 */

type Product = {
    name : string;
    price : number;
    inventory_detail : {   stock : number; colorOption : string[];};
}
let products : Product[] = [
    {
        name : "Laptop",
        price : 44000,
        inventory_detail: { stock : 15, colorOption : ["blue","black","red"]}
    },
    {
        name : "Mobile",
        price : 30000,
        inventory_detail: { stock : 30, colorOption : ["red","black","blue"]}
    },
    {
        name : "Tablet",
        price : 25000,
        inventory_detail: { stock : 10, colorOption : ["black","red","blue"]}
    }

];

function changeColor(products:Product, newColor:string){
    newColor.toLowerCase();
    // check color and update information
    if(!products.inventory_detail.colorOption.includes(newColor)){
        console.log( console.log(`${newColor} color of ${products.name} is no Available`))
    }else{
        // increase and decrease product price according to color
        if(newColor == "red"){
            products.price += products.price/100*10;
        }else if(newColor == "blue"){
            products.price -= products.price/100*5;
        }
        console.log(`Price of ${newColor} color ${products.name} is ${products.price}`);
    }
    return products;
}

for(let product of products){
    console.log("Detail before change the Color./n",product);
}

console.log(changeColor(products[0],"red"));
console.log(changeColor(products[1],"black"));
console.log(changeColor(products[2],"blue"));

for(let product of products){
    console.log("Detail after change the Color./n",product);
}
// <-----------------------------end Part1-------------------------------------->


/*Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
Challenge:
You are tasked with creating a student grading system. Implement functions and logic to
manage student grades effectively.
1. Define a TypeScript type alias named Student to represent a student with the
following properties:
• name (string): The name of the student.
• grades (number[ ]): An array of grades for different subjects.
2. Create an array named students containing at least three student objects. Each student
object should include a name and an array of grades.
3. Implement a function named calculateAverageGrade that takes a student's grades as
input and returns the average grade for that student.
4. Display each student's name and average grade. Iterate through the students array,
calculate the average grade for each student using the calculateAverageGrade
function, and print their name and average grade.
 */

type Student = {
    name : string;
    grades : number[];
}
let students : Student[] = [
    {
        name : "Ali",
        grades : [60,75,80,55,88]

    },
    {
        name : "Ameen",
        grades : [40,60,55,45,50]

    },
    {
        name : "Ahmed",
        grades : [70,50,65,55,60]

    }
]

function calculateAverageGrade(grades:number[]){
    let average = 0;
    for(let grade of grades){
         average += grade;
    }
    return average / grades.length;
}

for(let i = 0; i < students.length; i++){
    let avg = calculateAverageGrade(students[i].grades);
    console.log(`Student name ${students[i].name} student average ${avg}`);
}

//<---------------------------end Part2------------------------------>

/*Part 3: Array with Types and Indexing - Employee Salaries
Challenge:
You are managing employee salaries for a company. Implement logic to calculate salaries and
handle bonuses.
1. Define a type alias named Employee with the following properties:
• name (string): The name of the employee.
• hoursWorked (number): The number of hours the employee worked.
• hourlyRate (number): The hourly rate of the employee.
• salary (number): The base salary of the employee.
2. Define an array named employees containing employee objects. Each employee
object should include a name, hoursWorked, hourlyRate, and salary.
3. Implement a function named calculateSalary that calculates the salary for each
employee based on the hours worked and hourly rate.
4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary. */

type Employee = {
    name : string;
    hoursWorked : number;
    hourlyRate : number;
    salary : number
}
let employees : Employee[] = [
    {
        name : "Ali",
        hoursWorked : 18,
        hourlyRate : 150,
        salary : 0
    },
    {
        name : "Ameen",
        hoursWorked : 8,
        hourlyRate : 100,
        salary : 0
    },
    {
        name : "Ali",
        hoursWorked : 20,
        hourlyRate : 200,
        salary : 0
    }
]
function calculateSalary(employees:Employee[]){
    for(let employee of employees){
        employee.salary = employee.hoursWorked * employee.hourlyRate;
        if(employee.hoursWorked >= 20){
            employee.salary += employee.salary/100*10;
        }
    }
}

calculateSalary(employees);
console.log(employees);

//<-------------------------------end Part3------------------------------------->