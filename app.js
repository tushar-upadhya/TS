// let num1 = 1;
// function cal(num1: number, num2: number) {
//     return num1 + num2;
// }
// console.log("cal:", cal(num1, 5));
// ==========================================================
// function getTotal(number: number[]) {
//     return number.reduce((acc, item) => {
//         return acc + item;
//     }, 0);
// }
// console.log("getTotal:", getTotal([3, 1, 2]));
// ==========================================================
// const user = {
//     fistName: "john",
//     lastName: "doe",
//     role: "professor",
// };
// console.log("user:", user);
// ==========================================================
//? TYPE ALIAS ==========================================================
// type User = {
//     name: string;
//     age: number;
//     address?: string;
// };
// const user: User = {
//     name: "john",
//     age: 30,
//     address: "INDIA",
// };
// function login(userData: User): User {
//     return userData;
// }
// console.log("login:", login({ name: "jo", age: 2 }));
// ==========================================================
//? INTERFACE ==========================================================
// interface Transaction {
//     payerAccountNumber: number;
//     payeeAccountNumber: number;
// }
// interface BankAccount {
//     accountNumber: number;
//     accountHolder: string;
//     balance: number;
//     isActive: boolean;
//     transaction: Transaction[];
// }
// const transaction1: Transaction = {
//     payerAccountNumber: 1,
//     payeeAccountNumber: 2,
// };
// const transaction2: Transaction = {
//     payerAccountNumber: 12,
//     payeeAccountNumber: 23,
// };
// const bankAccount: BankAccount = {
//     accountNumber: 123456,
//     accountHolder: "john doe",
//     balance: 1000,
//     isActive: true,
//     transaction: [transaction1, transaction2],
// };
//* Extend ->  ========>>>
// interface Book {
//     name: string;
//     price: number;
// }
// interface Ebook extends Book {
// name: string;
// price: number;
//     fileSize: number;
//     format: string;
// }
// interface AudioBook extends Ebook {
// name: string;
// price: number;
// fileSize: number;
// format: string;
//     duration: number;
// }
// const book1: Ebook = {
//     name: "abc",
//     price: 100,
//     fileSize: 200,
//     format: "pdf",
//     duration: 300,
// };
// const book2: AudioBook = {
//     name: "abc",
//     price: 100,
//     fileSize: 200,
//     format: "mp3",
//     duration: 300,
// };
//* MERGING 2 TWO interface ->> =========================
// interface Book {
//     name: string;
//     price: number;
// }
// interface Book {
//     size: number;
// }
// const book: Book = {
//     name: "abc",
//     price: 100,
//     size: 200,
// };
// ==========================================================
// ==========================================================
//! TYPE vs INTERFACE
// type Book = {
//     name: string;
//     price: number;
// };
// type Book = {
//     size: number;
// };
// todo -> WE CAN MERGE TWO INTERFACE
//todo -> duplicate identifier
// interface Book {
//     name: string;
//     price: number;
// }
// interface Book {
//     size: number;
// }
// ==========================================================
//? UNIONS =========================================================
// type ID = number | string;
// function printID(id: ID) {
//     if (typeof id === "string") {
//         console.log("printID:", id.toUpperCase);
//     } else {
//         console.log("printID:", id);
//     }
// }
// printID("hello");
// function getFirstThree(x: string | number[]) {
//     return x.slice(0, 3);
// }
// console.log("getFirstThree:", getFirstThree([1, 2, 3, 4, 5, 6]));
// ==========================================================
//? GENERICS ==========================================================
// function logString(args: string) {
//     console.log("args:", args);
//     return args;
// }
// function logNumber(args: number) {
//     console.log("args:", args);
//     return args;
// }
// function logArray<T>(args: T): T {
//     console.log("args:", args);
//     return args;
// }
// logString("hello");
// logNumber(2);
// logArray([5, "s", { name: "tushar" }]);
// ===<
// interface HasAge {
//     age: number;
// }
// function getOld<T extends HasAge>(people: T[]): T {
//     return people.sort((a, b) => a.age - b.age)[0];
// }
// const people: HasAge[] = [{ age: 30 }, { age: 5 }, { age: 2 }];
// interface Player {
//     name: string;
//     age: number;
// }
// const player: Player[] = [
//     { name: "a", age: 20 },
//     { name: "b", age: 10 },
//     { name: "c", age: 5 },
// ];
// getOld(people).age;
// const person = getOld(player);
// console.log(person.name);
// person.age;
// ==========================================================
//? DUCK TYPING / STRUCTURAL TYING =========================================================
// function login(credentials);
