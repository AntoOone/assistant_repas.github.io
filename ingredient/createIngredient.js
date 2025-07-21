const ingredientNameText = document.getElementById("create-ingredient-name");
const ingredientDropdownType = document.getElementById("ingredient-types-dropdown");
const createIngredientButton = document.getElementById("create-ingredient-button");

function createIngredient(name, type) {
    const ingredient = new Ingredient(name, type);
    displayIngredient(ingredient);
}

createIngredientButton.addEventListener("click", () => {
    const name = ingredientNameText.value;
    if (name === "") {
        alert("Vous devez donner un nom à l'ingrédient");
    }
    else if (listContainElementByName(ingredients, name) !== false) {
        alert("Ce nom d'ingrédient existe déjà");
    }
    else {
        const type = ingredientTypes[ingredientDropdownType.selectedIndex];
        createIngredient(name, type);
        ingredientNameText.value = "";
    }
})