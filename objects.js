const obj = {
  name: "Ameay",
  age: 24,
  "key-three": true,
};
obj.hobby = "football";
delete obj.hobby;

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-three"]);
console.log(obj);

// Object.keys() .values() .entries()

console.log(Object.keys(obj));
console.log(Object.values(obj));

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
