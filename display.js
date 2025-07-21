const ingredientTypesDropdown = document.getElementById(
  "ingredient-types-dropdown"
);
const ingredientsList = document.getElementById("ingredients-list");
const recipesList = document.getElementById("recipes-list");
const ingredientsInRecipeCreationList = document.getElementById(
  "create-recipe-ingredients-list"
);

function displayIngredientTypes(ingredientTypes) {
  for (let i = 0; i < ingredientTypes.length; i++) {
    const option = document.createElement("option");
    option.value = ingredientTypes[i].value;
    option.textContent = ingredientTypes[i].name;
    ingredientTypesDropdown.appendChild(option);
  }
}

function displayIngredient(ingredient) {
  const element = document.createElement("li");
  element.textContent = ingredient.name + " - " + ingredient.type.name;
  element.id = "ingredient-" + ingredient.id;
  const deleteButton = createDeleteButton(element);
  deleteButton.addEventListener("click", (e) => {
    deleteIngredient(e.target.name);
  });
  ingredientsList.appendChild(element);
}

function displayRecipe(recipe) {
  const element = document.createElement("li");
  element.textContent = recipe.name;
  element.id = "recipe-" + recipe.id;
  const deleteButton = createDeleteButton(element);
  deleteButton.addEventListener("click", (e) => {
    deleteRecipe(e.target.name);
  });
  recipesList.appendChild(element);
}

function displayIngredientInRecipeCreation(ingredient) {
  const element = document.createElement("li");
  element.textContent = ingredient.name + " - " + ingredient.type.name;
  element.id = "ingredient-createrecipe-" + ingredient.id;

  const weightInput = document.createElement("input");
  weightInput.type = "number";
  weightInput.id = "weight-" + element.id;
  weightInput.value = "1";

  weightInput.addEventListener("input", (e) => {
    // Si l'utilisateur entre une valeur non valide, on la réinitialise à 1
    if (e.target.value < 1 || !Number.isInteger(parseFloat(e.target.value))) {
      e.target.value = "1";
    }
  });

  element.appendChild(weightInput);

  const deleteButton = createDeleteButton(element);
  deleteButton.addEventListener("click", (e) => {
    deleteIngredientInRecipeCreation(e.target.name, ingredientsInRecipe);
  });
  ingredientsInRecipeCreationList.appendChild(element);
}

function createDeleteButton(htmlElement) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "supprimer";
  deleteButton.name = htmlElement.id;
  deleteButton.addEventListener("click", (e) => {
    document.getElementById(e.target.name).remove();
  });
  htmlElement.appendChild(deleteButton);
  return deleteButton;
}

function deleteIngredient(id) {
  for (let i = 0; i < ingredients.length; i++) {
    if ("ingredient-" + ingredients[i].id === id) {
      ingredients.splice(i, 1);
      return;
    }
  }
}

function deleteRecipe(id) {
  for (let i = 0; i < recipes.length; i++) {
    if ("recipe-" + recipes[i].id === id) {
      recipes.splice(i, 1);
      return;
    }
  }
}

function deleteIngredientInRecipeCreation(id, ingredientsInRecipeCreation) {
  for (let i = 0; i < ingredientsInRecipeCreation.length; i++) {
    if ("ingredient-createrecipe-" + ingredientsInRecipeCreation[i].id === id) {
      ingredientsInRecipeCreation.splice(i, 1);
      return;
    }
  }
}

function deleteElement(id) {
  document.getElementById(id).remove();
}

function removeAllChildren(htmlElement) {
  while (htmlElement.firstChild != null) {
    htmlElement.removeChild(htmlElement.firstChild);
  }
}

displayIngredientTypes(ingredientTypes);
