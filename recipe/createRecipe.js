const createRecipeButton = document.getElementById("create-recipe-button");
const recipeNameText = document.getElementById("create-recipe-name");
let ingredientsInRecipe = [];

const addIngredientInRecipeButton = document.getElementById("create-recipe-addingredient-button");
const addIngredientInRecipeText = document.getElementById("create-recipe-addingredient-name");


function checkIngredientToAdd() {
    const ingredientName = addIngredientInRecipeText.value;
    if (ingredientName == "") {
        alert("Le nom de l'ingrédient est nul");
        return;
    }
    const ingredient = listContainElementByName(ingredients, ingredientName);
    if (ingredient === false) {
        alert("Cet ingrédient n'existe pas");
    }
    else if (listContainElementByName(ingredientsInRecipe, ingredientName) !== false) {
        alert("L'ingrédient est déjà dans la recette");
    }
    else {
        AddIngredientInCreateRecipe(ingredient);
        addIngredientInRecipeText.value = "";
    }
}

function AddIngredientInCreateRecipe(ingredient) {
    ingredientsInRecipe.push({ ingredient: ingredient, weight: 1 });
    displayIngredientInRecipeCreation(ingredient)
}

function createRecipe(name, ingredients) {
    const recipe = new Recipe(name, ingredients);
    setWeightsToIngredients();
    displayRecipe(recipe);
}

function setWeightsToIngredients() {
    for (let i = 0; i < ingredientsInRecipe.length; i++) {
        const weightInput = document.getElementById("weight-ingredient-createrecipe-" + ingredientsInRecipe[i].ingredient.id);
        ingredientsInRecipe[i].weight = weightInput.value;
    }
}

addIngredientInRecipeButton.addEventListener("click", checkIngredientToAdd);
createRecipeButton.addEventListener("click", () => {
    const name = recipeNameText.value;
    if (name === "") {
        alert("Vous devez donner un nom à la recette");
        return;
    }
    else if (listContainElementByName(recipes, name) !== false) {
        alert("Ce nom de recette existe déjà");
        return;
    }
    if (ingredientsInRecipe.length === 0) {
        alert("Vous n'avez pas mis d'ingrédients dans la recette");
    }
    else {
        createRecipe(name, ingredientsInRecipe);
        recipeNameText.value = "";
        ingredientsInRecipe = [];
        removeAllChildren(ingredientsInRecipeCreationList);
    }
})