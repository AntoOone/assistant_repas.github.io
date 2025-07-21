const recipes = []; // Ne rien y ajouter manuellement

class Recipe {
    static idCount = 0;
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
        this.id = Ingredient.idCount;
        Recipe.idCount++;
        recipes.push(this);
    }
}