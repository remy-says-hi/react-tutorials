const changeStringState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : value
    }) 
  }
}

const changeTwoStateProps = (prop) => {
  return (prop2) => {
    return (value) => {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || 0) + value,
        [prop2] : (state[prop2] || 0) + value
      }) 
    }
  }
}

const changeThreeStateProps = (prop1, prop2, prop3) => {
  return (value) => {
    return (state) =>  ({
      ...state,
      [prop1] : (state[prop1] || 0) + value,
      [prop2] : (state[prop2] || 0) + value,
      [prop3] : (state[prop2] || 0) + value
    })
  }
}

const changeAllState = (newStateObj) => {
  return (currentState) => ({
    ...currentState,
    ...newStateObj
  })
}

const updateLightAndWater = changeTwoStateProps("light")("water");
const waterPlantsOnSunnyDay = updateLightAndWater(10);
const fernIsHappyObj = fern(waterPlantsOnSunnyDay);

const updateAllProps = changeThreeStateProps("soil", "water", "light");
const theStormIsHere = updateAllProps(-7);
const fernIsHurtByTheStorm = fern(theStormIsHere);

const newState = {soil: 3, water: 3, light: 3};
const tendToPlant = changeAllState(newState);
const fernTendedTo = fern(tendToPlant);
console.log("add 3 to all properties", fernTendedTo);
