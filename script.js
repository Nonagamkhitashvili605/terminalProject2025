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

// let text = "georgia";
// let result2 = text.toLocaleUpperCase();
// console.log(result2);

// let text = "TECHNOLOGY";
// let result2 = text.toLocaleLowerCase();
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

let data = {
  userName: "nona",
  age: 4,
  is_student: false,
  city: ["tbilisi", "batumi"],
  subjects: {},
};
console.log(data["age"]);
