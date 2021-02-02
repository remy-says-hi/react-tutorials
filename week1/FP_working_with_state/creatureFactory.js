const canEat = (creature) => ({
  eat: (food) => {
    return `The ${creature.name} eats the ${food}.`
  }
});

const canSleep = (creature) => ({
  sleep: () => {
    return `The ${creature.name} sleeps.`
  }
});

const sleepingEatingCreature = (name) => {
  let creature = {
    name
  }

  return { ...creature, ...canEat(creature), ...canSleep(creature) };
};

const platypus = sleepingEatingCreature("platypus");

const layEggs = (creature) => {
  return {
    layEggs: () => {
      return `The ${creature.name} lays eggs.`
    }
  }
};

const addFeatureToMyCreature = (creatureObj, newFeature) => {
  const updatedCreature = {...creatureObj, ...newFeature(creatureObj)};
  return updatedCreature;
}

const platypusLaysEggs = addFeatureToMyCreature(platypus, layEggs);
console.log(platypus);
console.log(platypusLaysEggs);
