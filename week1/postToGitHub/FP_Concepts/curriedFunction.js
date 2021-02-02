function aThingIMaybeLike(howMuchILikeIt, thing, reason) {
  return `I ${howMuchILikeIt} ${thing} because ${reason}.`;
}

aThingIMaybeLike("a lot", "functional programming", "it's cool");

function aThingIMaybeLike(howMuchILikeIt) {
  return function(thing) {
    return function(reason) {
      return `I ${howMuchILikeIt} ${thing} because ${reason}.`;
    }
  }
}
aThingIMaybeLike("a lot")("functional programming")("it's cool");
// I a lot functional programming..."

const iLikeALot = aThingIMaybeLike("like a lot");
iLikeALot("coding")("of course!!")
iLikeALot("my cat")("he's purrfect");

const doNotLike = aThingIMaybeLike("do not like at all");



















function aThingIMaybeLike(howMuchILikeIt) {
  return function(thing) {
    return function(reason) {
      return `I ${howMuchILikeIt} ${thing} because ${reason}.`;
    }
  }
}














function aThingIMaybeLike(howMuchILikeIt) {
  return function(thing) {
    return function(reason) {
      return `I ${howMuchILikeIt} ${thing} because ${reason}.`;
    }
  }
}

aThingIMaybeLike("really like", "functional programming", "it's cool");

const thingsThatBugMe = aThingIMaybeLike("do not like");
thingsThatBugMe("global variables")("they are a code smell");

const allTheReasonsWhyIDoNotLikeGlobalVariables = thingsThatBugMe("global variables");
allTheReasonsWhyIDoNotLikeGlobalVariables("They cause a lot of bugs");
allTheReasonsWhyIDoNotLikeGlobalVariables("It is hard to track what is updating them and where");