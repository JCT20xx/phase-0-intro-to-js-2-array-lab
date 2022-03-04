// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
    return cats.push(cat);
};
function destructivelyPrependCat(cat) {
    return cats.unshift(cat);
};
function destructivelyRemoveLastCat() {
    return cats.pop();
};
function destructivelyRemoveFirstCat() {
    return cats.shift();
};
function appendCat(name) {
    const newCats = [...cats,name]
    return newCats;
};
function prependCat(name) {
    const newCat = [name, ...cats]
    return newCat;
};
function removeLastCat() {
    const removeCat = cats.slice(0,-1)
    return removeCat;
};
function removeFirstCat() {
    const removeCats = cats.slice(1)
    return removeCats;
};