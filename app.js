// let num1 = 1;
function getOld(people) {
    return people.sort(function (a, b) { return a.age - b.age; })[0];
}
var people = [{ age: 30 }, { age: 5 }, { age: 2 }];
var player = [
    { name: "a", age: 20 },
    { name: "b", age: 10 },
    { name: "c", age: 5 },
];
getOld(people).age;
var person = getOld(player);
console.log(person.name);
person.age;
// ==========================================================
