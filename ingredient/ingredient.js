const ingredients = []; // Ne rien y ajouter manuellement

class Ingredient {
    static idCount = 0;
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.id = Ingredient.idCount;
        Ingredient.idCount++;
        ingredients.push(this);
    }
}

const ingredientTypes = [
    { value: "meat", name: "Viande" },
    { value: "vegetable", name: "Légume" },
    { value: "starchy", name: "Féculent" },
];
