// Write your solution here!
// Initial array of cats
let cats = ["Milo", "Otis", "Garfield"];

// Destructively append a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Destructively prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Destructively remove the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Destructively remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Append a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
  return [...cats, name];
}

// Prepend a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
  return [name, ...cats];
}

// Remove the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
  return cats.slice(0, -1);
}

// Remove the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
  return cats.slice(1);
}
