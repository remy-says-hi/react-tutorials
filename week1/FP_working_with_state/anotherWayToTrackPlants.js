const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const addPlantToState = (defaultPlantValueObj) => {
  return (uniqueName) => {
    return (state) => ({
      ...state,
      [uniqueName] : defaultPlantValueObj
    })
  }
}

const changePlantState = (prop) => {
  return (value) => {
    return (uniqueName) => {
      return (state) => ({
        ...state,
        [uniqueName] : { ...state[uniqueName], [prop]: (state[uniqueName][prop] || 0) + value }
      })
    }
  }
}

// userInput
const plantName = "fern";

const stateObj = storeState();
const defaultValues = { soil: 0, water: 0, light: 0 }

const newPlant = addPlantToState(defaultValues)(plantName);
const newPlant2 = addPlantToState(defaultValues)("Bobbers");
const newState = stateObj(newPlant);
console.log("state obj", newState);
const newState2 = stateObj(newPlant2);
console.log("state obj", newState2);
const blueFood = changePlantState("soil")(5);
const updateNewPlant = blueFood("fern");
const newState3 = stateObj(updateNewPlant);
console.log("state obj", newState3);

