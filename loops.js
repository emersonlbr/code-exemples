for (let i = 0; i <= 5; i++) {
    console.log(i);
}

let x = 0;
while (x <= 5) {
    console.log(x);
    x++;
}

const arr = ["cool", "chill", "sad", "great", "not cool"];

arr.forEach((mood) => {
    console.log(`I am ${mood}`);
});

const names = ['flavio', 'joao', 'rick'];

names.forEach(function(name) {
    console.log(`My name is ${name}`);
});