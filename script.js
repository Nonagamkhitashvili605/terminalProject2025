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
