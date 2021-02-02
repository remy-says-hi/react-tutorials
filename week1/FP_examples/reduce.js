const numArray = [1,2,3,4];

const callback = (total, currentArrayElement) => {
    return total + currentArrayElement;
}

console.log("line 7", numArray.reduce(callback));
// 10

console.log("line 9", numArray.reduce(callback, 10));
// 20
console.log("line 10", numArray.reduce(callback, ""));
// "1234"

const makeNewArray = (array, currentArrayElement) => {
  array.push(currentArrayElement);
  return array;
}

console.log("line 17", numArray.reduce(makeNewArray, []));

const makeObj = (obj, currentArrayElement) => {
  obj["item "+currentArrayElement] = currentArrayElement;
  return obj;
}

// { "item 1" : 1, ...}

console.log("line 24", numArray.reduce(makeObj, {}));

const relaxingActivities = ["hike", "hike", "bike", "hang loose", "sleep", "sleep", "sleep"];

const makeTally = (obj, currentArrayElement) => {
    obj[currentArrayElement] = (obj[currentArrayElement] || 0) + 1;
    return obj;
}

console.log("line 38", relaxingActivities.reduce(makeTally, {}));