function listContainElementByName(list, elementName) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name == elementName) {
      return list[i];
    }
  }
  return false;
}

createIngredient("Tomate", ingredientTypes[1]);
