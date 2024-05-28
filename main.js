"use strict";
// <----------------------Array Assignments-------------------------->
let products = [
    {
        name: "Laptop",
        price: 44000,
        inventory_detail: { stock: 15, colorOption: ["blue", "black", "red"] }
    },
    {
        name: "Mobile",
        price: 30000,
        inventory_detail: { stock: 30, colorOption: ["red", "black", "blue"] }
    },
    {
        name: "Tablet",
        price: 25000,
        inventory_detail: { stock: 10, colorOption: ["black", "red", "blue"] }
    }
];
function changeColor(products, newColor) {
    newColor.toLowerCase();
    // check color and update information
    if (!products.inventory_detail.colorOption.includes(newColor)) {
        console.log(console.log(`${newColor} color of ${products.name} is no Available`));
    }
    else {
        // increase and decrease product price according to color
        if (newColor == "red") {
            products.price += products.price / 100 * 10;
        }
        else if (newColor == "blue") {
            products.price -= products.price / 100 * 5;
        }
        console.log(`Price of ${newColor} color ${products.name} is ${products.price}`);
    }
    return products;
}
for (let product of products) {
    console.log("Detail before change the Color./n", product);
}
console.log(changeColor(products[0], "red"));
console.log(changeColor(products[1], "black"));
console.log(changeColor(products[2], "blue"));
for (let product of products) {
    console.log("Detail after change the Color./n", product);
}
let students = [
    {
        name: "Ali",
        grades: [60, 75, 80, 55, 88]
    },
    {
        name: "Ameen",
        grades: [40, 60, 55, 45, 50]
    },
    {
        name: "Ahmed",
        grades: [70, 50, 65, 55, 60]
    }
];
function calculateAverageGrade(grades) {
    let average = 0;
    for (let grade of grades) {
        average += grade;
    }
    return average / grades.length;
}
for (let i = 0; i < students.length; i++) {
    let avg = calculateAverageGrade(students[i].grades);
    console.log(`Student name ${students[i].name} student average ${avg}`);
}
let employees = [
    {
        name: "Ali",
        hoursWorked: 18,
        hourlyRate: 150,
        salary: 0
    },
    {
        name: "Ameen",
        hoursWorked: 8,
        hourlyRate: 100,
        salary: 0
    },
    {
        name: "Ali",
        hoursWorked: 20,
        hourlyRate: 200,
        salary: 0
    }
];
function calculateSalary(employees) {
    for (let employee of employees) {
        employee.salary = employee.hoursWorked * employee.hourlyRate;
        if (employee.hoursWorked >= 20) {
            employee.salary += employee.salary / 100 * 10;
        }
    }
}
calculateSalary(employees);
console.log(employees);
//<-------------------------------end Part3------------------------------------->
