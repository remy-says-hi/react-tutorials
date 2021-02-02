// Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color. This should be the end result:

// > painter1.paints()
// "Paints green!"
// > painter2.paints()
// "Paints yellow!"
// > painter3.paints()
// "Paints red!"

const paint = function(color) {
  return {
    paints : function() {
      return `Paints ${color}!`
    }
  }
}

const painter1 = paint("green");
console.log(painter1.paints())

/////////////////////////////////
// arrow function
const paint2 = (color) => {
  return {
    paints : () => {
      return `Paints ${color}!`
    }
  }
}

const painter2 = paint2("yellow");
console.log(painter2.paints())

///////////////////////////////////
// implicit return
const paint3 = color => ({
  paints : () => `Paints ${color}!`
})

const painter3 = paint3("red");
console.log(painter3.paints())