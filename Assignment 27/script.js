// let user1 = {
//     name: "Chetan Singh",
//     email: "chetan@gmail.com",
//     login: function () {
//         console.log("User Logged In")
//     }
// } 
// let user2 = {
//     name: "Chetan Singh",
//     email: "chetan@gmail.com",
//     login: function () {
//         console.log("User Logged In")
//     }
// } 
// let user3 = {
//     name: "Chetan Singh",
//     email: "chetan@gmail.com",
//     login: function () {
//         console.log("User Logged In")
//     }
// } 
// let user4 = {
//     name: "Chetan Singh",
//     email: "chetan@gmail.com",
//     login: function () {
//         console.log("User Logged In")
//     }
// } 
// let user5 = {
//     name: "Chetan Singh",
//     email: "chetan@gmail.com",
//     login: function () {
//         console.log("User Logged In")
//     }
// } 

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     login() {
//         console.log("user logged in");
//     }
// }

// let user1 = new User("Chetan", "chetan@gamil.com");
// let user2 = new User("Harsh", "chetan@gamil.com");

// let product = {
//     name: "iPhone",
//     price: 40000,
//     getAmount: function () {
//         return this.price - 5000;
//     }
// }

// class Car {
//     constructor(brand, speed) {
//         this.brand = brand;
//         this.speed = speed;
//     }

//     drive () {
//         console.log(`${this.brand} - ${this.speed}`)
//     }
// }

// let lambo = new Car("gallardo", 250)
// let city = new Car("honda", 150)

// class Student {
//     constructor(name, rollno) {
//         this.name = name;
//         this.rollno = rollno;
//     }
//     introduce (){
//         console.log(`${this.name} - ${this.rollno}`)
//     }
// }

// let ram = new Student("ram", 1);
// let shyam = new Student("shyam", 2);

// let obj = {
//     sayName: function () {
//         console.log(this)
//     },
//     sayArrowName: () => {
//         console.log(this)
//     }
// }

// function User (name) {
//     this.name = name;
//     this.login = function () {
//         console.log("logged in")
//     }
// }
// function User (name) {
//     this.name = name;
    
// }

// User.prototype.login = function () {
//     console.log("logged in")
// }

// let user1 = new User("ram")
// let user2 = new User("shyam")

// function fnc() {
//     console.log(this.name);
// }

// let obj = {
//     name: "chetan"
// }

// fnc.call(obj);
// fnc.apply(obj, [1, 2])
// let newfnc = fnc.bind(obj, 1);
// newfnc()

// let laptop = {
//     brand: "HP",
//     price: 50000,
//     start: function () {
//         console.log("Laptop started");
//     },
//     incBy10: function () {
//         this.price += this.price * 0.1;
//     }
// }

// if we want 10 different laptops we will need to create 10 different objects again and again 


// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }

//     showDetails() {
//         console.log(`${this.name} - ${this.salary}`)
//     }
// }


// let ram = new Employee("ram", 250000);
// let shyam = new Employee("shyam", 150000);
// let sita = new Employee("sita", 180000);

// creating similar objects again and again will cause loss of memory as each of the object will have separate show details method but in the case of class they share a single method

// class BankAccount {
//     constructor (accountHolderName, balance) {
//         this.accountHolderName = accountHolderName;
//         this.balance = balance;
//     }

//     deposit (amount) {
//         this.balance += amount;
//         return this.balance;
//     }
// }

// let acc1 = new BankAccount("ram", 10000);
// let acc2 = new BankAccount("shyam", 10000);

// both the account instances have separate balance property in the memory that is why changing one does not affect the other one 

// let profile = {
//     username: "chetan",
//     printName: function () {
//         console.log(this.username)
//     }
// }

// function Vehicle(type, wheels) {
//     this.type = type;
//     this.wheels = wheels;
// }

// Vehicle.prototype.describe = function() {
//     console.log(`The type of the vehicle is ${this.type} and the no of wheels is ${this.wheels}`)
// }

// let v1 = new Vehicle("sedan", 4);

// function showBrand () {
//     console.log(this.brand);
// }

// let obj1 = {
//     brand: "Parle"
// }
// let obj2 = {
//     brand: "Sunfest"
// }

// showBrand.call(obj1);
// showBrand.call(obj2);

// function fnc(city, role) {
//     console.log(`${this.name} in ${city}, at role of ${role}`)
// }

// let obj = {
//     name: "Chetan"
// }

// fnc.apply(obj, ["Lucknow", "Web Developer"]);
// fnc.call(obj, 'Lucknow', "Web Developer")

// apply sends arguments of the function in the form of an array in the second arg of apply  function call

// function greet () {
//     console.log("Hello " + this.name);
// }

// let greetChetan = greet.bind({name: "Chetan"});

// greetChetan()

// bind is useful for the cases where do not need to call the function immediately and also in cases where we want to call it again and again with the same object as value of this