const foods = [];
foods.push("pizza", "cheeseburger");
foods.unshift("taco");
favFood = foods[1];
foods.splice(2, 0, "tofu");
console.log("Exercise 5 result:", foods);
foods.splice(1, 1, "sushi", "cupcake");
console.log("Exercise 6 result:", foods);
const yummy = foods.splice(1, 2, "sushi", "cupcake");
console.log("Exercise 7 result:", yummy);
const soyIdx = foods.indexOf("tofu");

console.log("Exercise 8 result:", soyIdx);
allFoods = foods.join("->");

console.log("Exercise 9 result:", allFoods);
hasSoup = foods.includes("soup");

console.log("Exercise 10 result:", hasSoup);
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
odds = [];
console.log(nums.length);
for (i = 0; i < nums.length; i++) {
  if (nums[i] % 2 != 0) {
    odds.push(nums[i]);
  }
}

console.log("Exercise 11 result:", odds);

fizz = [];
buzz = [];
fizzbuzz = [];
fizzChecker = false;
buzzCheker = false;
console.log(nums.length);
for (i = 0; i < nums.length; i++) {
  if (nums[i] % 3 === 0) {
    fizz.push(nums[i]);
    fizzChecker = true;
  }
  if (nums[i] % 5 === 0) {
    buzz.push(nums[i]);
    buzzCheker = true;
  }
  if (fizzChecker === true && buzzCheker === true) {
    fizzbuzz.push(nums[i]);
    fizzChecker = false;
    buzzCheker = false;
  }
}

console.log("Exercise 12 Results:");
console.log("  fizz:", fizz);
console.log("  buzz:", buzz);
console.log("  fizzbuzz:", fizzbuzz);

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];

numList = numArrays[numArrays.length - 1];
console.log("Exercise 13 result:", numList);

num = numArrays[2][1];
console.log("Exercise 14 result:", num);

total = 0;
for (i = 0; i < numArrays.length; i++) {
  for (u = 0; u < numArrays[i].length; u++) {
    total += numArrays[i][u];
  }
}

console.log("Exercise 15 result:\n", total);
