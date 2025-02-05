// 1. დავალება: ელემენტის დამატება
// დაამატეთ ელემენტი მასივის ბოლოს.
// let fruits = ["apple", "banana", "cherry"];
// // დაამატეთ "orange" მასივის ბოლოში.

// let fruits = ["apple", "banana", "cherry"];
// fruits.push("orange");
// console.log(fruits);

// 2. დავალება: ელემენტის ამოღება
//  ამოიღეთ ელემენტი მასივის დასაწყისიდან.
// let numbers = [10, 20, 30, 40];
// // წაშალეთ პირველი ელემენტი და აჩვენეთ დარჩენილი მასივი.

// let numbers = [10, 20, 30, 40];
// numbers.shift();
// console.log(numbers);

// 3. დავალება: ელემენტის ჩასმა
//  დაამატეთ ელემენტი კონკრეტულ ინდექსზე.
// let colors = ["red", "blue", "green"];
// // ჩასვით "yellow" ინდექსზე 1.

// let colors = ["red", "blue", "green"];
// colors.splice(1, 0, "yellow");
// console.log(colors);

// 4. დავალება: მასივის გაერთიანება
//  ორი მასივი გააერთიანეთ ერთ მასივად.
// let animals1 = ["cat", "dog"];
// let animals2 = ["lion", "tiger"];
// // გააერთიანეთ მასივები და მიიღეთ ახალი მასივი.

// let animals1 = ["cat", "dog"];
// let animals2 = ["lion", "tiger"];
// let animals = animals1.concat(animals2);
// console.log(animals);

// 5 დავალება: მასივის სორტირება
//  დაალაგეთ მასივი ზრდადობის მიხედვით.
// let scores = [50, 30, 20, 10, 40];
// // დაალაგეთ მასივი.

// let scores = [50, 30, 20, 10, 40];
// scores.sort();
// console.log(scores);

// 6. დავალება: მასივის ელემენტების ტექსტად გაერთიანება
// გაერთიანეთ მასივის ყველა ელემენტი ერთ სტრინგში.
// let cities = ["Tbilisi", "Batumi", "Kutaisi"];
// // გააერთიანეთ ელემენტები, სადაც მათ შორის იქნება " - ".

// let cities = ["Tbilisi", "Batumi", "Kutaisi"];
// let result = cities.join(" -");
// console.log(result);

// 8.დავალება: მასივის ზომის დადგენა
// დაადგინეთ მასივის სიგრძე.
// let books = ["Math", "Science", "History"];
// // გაარკვიეთ მასივის სიგრძე.

// let books = ["Math", "Science", "History"];
// // console.log(books.length);
// let result2 = books.length;
// console.log(result2);

//29 january
// ჩანესტილი მასივი
// let array = [1, 2, 3, 4, [22, 33, [66, 67], 44]];
// console.log(array[4][2][1]);

//სტრინგის მეთოდები
// let text = "georgia";
// let result2 = Text.at(-3);
// console.log(result2);

// let text = "georgia";
// let result2 = text.charAt(5);
// console.log(result2);

// let text = "georgia";
// let result2 = text.repeat(5);
// console.log(result2);

// let text = "georgia";
// let result2 = text.replace("g", "l");
// console.log(result2);

// let text = "georgia";
// let result2 = text.slice(1, 3);
// console.log(result2);

// let text = "TECHNOLOGY";
// let result2 = text.toLowerCase();
// console.log(result2);

// let text = "     ECHNOLOGY      ";
// let result2 = text.trim();
// console.log(result2);

// let text = "     TECHNOLOGY      ";
// let result2 = text.trimStart();
// console.log(result2);

// let text = "     TECHNOLOGY      ";
// let result2 = text.trimEnd();
// console.log(result2);

// let text = "TECHNOLOGY";
// let result2 = text.substring(2, 4);
// console.log(result2);

//

// let products = {
//   userName: "nona",
//   age: 4,
//   is_student: false,
//   city: ["tbilisi", "batumi"],
//   subjects: {},
// };
// console.log(data["age"]);

// დავალება 1: სტრიქონის სიგრძე
// შეამოწმეთ მოცემული სტრიქონის სიგრძე და დააბეჭდეთ, რამდენი სიმბოლოა მასში.

// let words = ["one", "two", "three"];
// console.log(words.length);
// let result2 = words.length;
// console.log(result2);

// დავალება 2: სტრიქონის ყველა ასო დიდი
// შეიტანეთ სტრიქონი და გამოიტანეთ ის მხოლოდ დიდი ასოებით.

// let text = "hypertext markup language";
// let result2 = text.toLocaleUpperCase();
// console.log(result2);

// დავალება 3: სტრიქონის ყველა ასო პატარა
// შეიტანეთ სტრიქონი და გამოიტანეთ ის მხოლოდ პატარა ასოებით.
// let text = "TECHNOLOGY";
// let result2 = text.toLocaleLowerCase();
// console.log(result2);

// დავალება 4: სტრიქონის კონკრეტული სიმბოლო
// შეიტანეთ სტრიქონი და შეამოწმეთ, რა სიმბოლოა კონკრეტულ ინდექსზე.

// let text = "georgia";
// let result2 = Text.at(-3);
// console.log(result2);

// დავალება 5: სტრიქონის ნაწილი
// შეიტანეთ სტრიქონი და ამოჭერით მხოლოდ ნაწილობრივი სტრიქონი (ინდექსებით განსაზღვრული).

// let text = "georgia";
// let result2 = text.slice(1, 3);
// console.log(result2);

// დავალება 6: სტრიქონის ცვლილება
// შეიტანეთ სტრიქონი და შეცვალეთ სიტყვა "hello" სიტყვით "hi".
// let text = "hello";
// let result2 = text.replaceAll("hello", "hi");
// console.log(result2);

// დავალება 7: სტრიქონის განაწილება
// შეიტანეთ სტრიქონი, რომელშიც სიტყვები გამოყოფილია მძიმეთი, და გაყავით სტრიქონი შესაბამის ნაწილებად (მიუთითეთ split() მეთოდზე).
// let text = "java,script";
// let result2 = text.split("");
// console.log(result2);
// დავალება 8: სტრიქონის დასაწყისი
// შეამოწმეთ, იწყება თუ არა სტრიქონი სიტყვით "Java".

// let text = "javascript";
// let result2 = text.startsWith("java");
// console.log(result2);

// დავალება 9: სტრიქონის ბოლოს
// შეამოწმეთ, მთავრდება თუ არა სტრიქონი სიტყვით "Script".

// let text = "javascript";
// let result2 = text.endsWith("script");
// console.log(result2);

// დავალება 10: სტრიქონის გამეორება
// შეიტანეთ სტრიქონი და გამეორეთ ის 4-ჯერ.

// let text = "javascript";
// let result2 = text.repeat(4);
// console.log(result2);

// დავალება 11: სტრიქონის ცარიელი სივრცეების მოცილება
// შეიტანეთ სტრიქონი, რომელშიც იქნება ცარიელი ადგილები დასაწყისსა და ბოლოში. წაშალეთ ეს ცარიელი ადგილები.

// let text = "     TECHNOLOGY      ";
// let result2 = text.trim();
// console.log(result2);

// დავალება 12: სტრიქონის გამოყოფა
// შეიტანეთ სტრიქონი და შეამოწმეთ, თუ შეიცავს თუ არა ის სიტყვას "JavaScript".
// let text = "javascript is programming languadze";
// let result2 = text.includes("javascript");
// console.log(result2);

//31 january 2025/
//prompt method//
// let age = prompt("დაწერეთ ასაკი");
// console.log(typeof age);

// let age = Number(prompt("დაწერეთ ასაკი"));
// console.log(age);

// let fullname = prompt("დაწერეთ სახელი");
// let result = fullname.trim();
// console.log(result);

// let fullname = prompt("დაწერეთ სახელი");
// let result = fullname.toUpperCase();
// console.log(result);

// let fullname = prompt("დაწერეთ სახელი");
// let result = fullname.toLowerCase();
// console.log(result);

// let fullname = prompt("დაწერეთ სახელი");
// let result =  fullname.charAt(0).toUpperCase() + fullname.slice(1).toLocaleLowerCase();
// console.log(result);

//template literal
// let age = Number(prompt("დაწერეთ ასაკი"));
// console.log(`ჩემი ასაკია: ${age}`);

// let school = {
//   name: "greenwood High School",
//   location: "tbilisi, georgia",
//   Numberofstudents: 500,
//   hasSportsFacilities: true,
//   subjects: ["msth", "Science", "history", "geography", "literature"],
//   principal: {
//     name: "mr. john Smith",
//     age: 45,
//     contact: "John.smith@school.com",
//   },
// };

// // console.log(school.principal["name"], school.principal["age"]);
// console.log(`${school.principal["name"]}is director, he is ${school.principal["age"]}
// ), ჩემი საყვარელი საგანია ${school.subjects[0]}  და ${school.subjects[1]}`);

// let notebook = {
//   specifications: {
//     processor: "intel Core i7",
//     ram: "16GB",
//     Screen: "13.3 inches, Full HD",
//     Storage: "512 gb SSD",
//   },

//   reviews: ["Excelent laptop!", "good laptop"],
// };

// console.log(notebook.specifications.Screen);
// console.log(notebook.reviews[1]);
// console.log(notebook.specifications.ram);

// notebook.specifications.ram = "20GB";
// მთლიანად წაშლა
// delete notebook.specifications.ram;
// console.log(`კომპიუტერის რემი არის ${notebook.specifications.ram}`);
// დინამიურად ცვლის ინფორმაციას

// დავალება N1 students

// let student = {
//   fullname: "nino",
//   age: 12,
//   learn: true,
//   list: ["math", "science", "literature", "technology"],
//   adress: {
//     city: "gori",
//     street: "mirza gelovani",
//   },
// };

// console.log(student.age);
// console.log(student.list[2]);
// console.log(student.adress.street);

//  დავალება N2 books

// let books = {
//   name: "zebuloni",
//   location: "centraluri biblioteka",
//   autor: "jemal qarchkhadze",
//   price: 50,
//   avilable: true,
//   Array: ["Fantasy", "Mystery", "Thriller", "Romance", "istorical Fiction"],
//   contact: "j.qarchkhadze@gmil.com",
// };

// // console.log(books.location);
// // console.log(books.Array[4]);
// console.log(books.avilable);

// დავალება N3 Theater tickets

// let theater = {
//   ticketsNumber: g3455,
//   theaterName: "marjanishvili",
//   spectacle: "hamlet",
//   price: 20,
//   available: true,
//   address: "8 Kote Marjanishvili St, Tbilisi",
//   phone: "032 2 95 35 82",
//   date: "31.01.2025",
// };

// theater.price = 40;
// theater.available = false;
// console.log(theater.price);
// console.log(theater.available);

//console.log(theater.date);
// console.log(theater.phone);

//ციკლი - loop - 03 თებერვალი 2025

// for (let i = 0; i < 5; i++) {
//   console.log("hello");
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//   console.log("bye");
// }

//
// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < 8; i++) {
//   console.log(array[i]);
// }

// let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

//if/else

// let x = 5;
// if (x > 4) {
//   console.log("right");
// } else {
//   console.log("wrong");
// }

// let x = 3;
// if (x > 4) {
//   console.log("right");
// } else if (x < 7) {
//   console.log("right1");
// } else {
//   console.log("wrong");
// }

// let score = 120;
// if (score >= 90 && score <= 100) {
//   console.log("A");
// } else if (score >= 80 && score <= 89) {
//   console.log("B");
// } else if (score >= 70 && score <= 79) {
//   console.log("C");
// } else if (score > 100) {
//   console.log("score is more than 100");
// } else {
//   console.log("fail");
// }

// let array = [2, 4, 6, 8, 34, 23, 45, 66, 88];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 1) {
//     console.log(array[i]);
//   }
// }

//5 თებერვალი დავალების განხილვა
//	for ციკლით: დაწერეთ კოდი, რომელიც for ციკლის გამოყენებით გამოთვლის რიცხვების ჯამს 1-დან 100-მდე.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(sum);
//
//რიცხვის დადებითი, უარყოფითი ან ნულის შემოწმება:
//დაწერეთ კოდი, რომელიც იღებს რიცხვს და ამოწმებს, არის თუ არა ის დადებითი, უარყოფითი ან ნული. შესაბამისად, დაბეჭდეთ "რიცხვი დადებითია", "რიცხვი უარყოფითია" ან "რიცხვი ნულია".
//შეგვიძლია prompt -იც გამოვიყენოთ
//  let nummebr = prompt('დაწერეთ რიცხვი');
// let number = 0;
// if (number > 0) {
//   console.log("დადებითია");
// } else if (number < 0) {
//   console.log("უარყოფითია");
// } else {
//   console.log("ნული");
// }

//დაწერეთ კოდი, რომელიც იღებს წელს და ამოწმებს, არის თუ არა ის ნაკიანი. ნაკიანი წელია,
// რომელიც იყოფა 4-ზე, მაგრამ არ იყოფა 100-ზე, გარდა იმ შემთხვევისა, როცა ის იყოფა 400-ზე.
// თუ წელი ნაკიანია, დაბეჭდეთ "წელი ნაკიანია", წინააღმდეგ შემთხვევაში - "წელი არ არის ნაკიანი".
//  let year =2025;
//  if ((year%4===0 && year % 100 !===0) || year % 400 === 0){
//    }console.log("ნაკიანია");

//დაწერეთ კოდი, რომელიც იღებს რიცხვს და დაბეჭდავს შეტყობინებას, თუ რამდენი ციფრი აქვს მას. მაგალითად, თუ რიცხვი არის 123,
// დაბეჭდეთ "რიცხვს აქვს 3 ციფრი".

// let number = 12345;
// let result = number.toString().length;
// console.log(result);

//დაწერეთ კოდი, რომელიც იღებს კვირის დღის  ნომერს (1-დან 7-მდე, სადაც 1 შეესაბამება ორშაბათს და 7 - კვირას)
// და დაბეჭდავს შეტყობინებას, არის თუ არა ეს დღე სამუშაო დღე  თუ დასვენების დღე.
// let day = 2;
// if (day % 7 === 0 || day % 7 === 6) {
//   console.log("უქმე");
// } else {
//   console.log("სამუშაო დღე");
// }
//მეორე ვარიანტი
let day = 8;
if (day >= 1 && day <= 5) {
  console.log("work");
} else if (day === 6 || day === 7) {
  console.log("not work");
} else {
  console.log("it is not right number");
}
