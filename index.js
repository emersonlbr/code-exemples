let lol = 'good';

console.log(lol);

let arr = ["emerson", "ana", "james", "roberto", "audrey"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


const age = (yearOfBirth) => {
    let age = 2017 - yearOfBirth;
    return age;
};

console.log(age(1996));

const arr2 = [["emerson", "deivson", "ferreira", "lopes"], ["ana", "neide", "ferreira", "oliveira"], ["adir", "lopes", "oliveira"] ];

var ew = () => {
    for(let i = 0; i < arr2.length; i++) {
        for(let x = 0; x < arr2[i].length; x++) {
            console.log(arr2[i][x]);
        }
    }
};

// calling the function
ew();








