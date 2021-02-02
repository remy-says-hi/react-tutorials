const myCat = {
  name: "Murphy",
  age: 1
}

const anotherCat = {...myCat};

const myCatGotOlder = {...myCat, age: 2}

const flagColor1 = {
  color1: "green"
}

const flagColor2 = {
  color1: "gold"
}

const flagColor3 = {
  color1: "black"
}

const jamaicanFlag = {...flagColor1, ...flagColor2, ...flagColor3}
const jamaicanFlag = Object.assign({}, flagColor1, flagColor2, flagColor3);

const array = [1,2];
const array2 = [3,4];
const array3 = [...array, ...array2];

function spreadArgs(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}

const array = [1,2,3];
spreadArgs(...array);