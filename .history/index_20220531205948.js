// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;

}

function destructivelyPrependCat(name){
    cats.unshift(name);
}