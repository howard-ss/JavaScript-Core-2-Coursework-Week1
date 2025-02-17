/*
  You have a pantry object that tells you the contents of your fridge and your cupboards.

  Write a function createShoppingList that takes a recipe as a parameter.
  The recipe parameter has two properties:
    - "name", which is a string
    - "ingredients", which is an array of strings

  The createShoppingList function should find which ingredients from the recipe are missing from the pantry.

  The createShoppingList function should return an object with two properties:
    - "name" of the recipe, which is a string,
    - "items", which is an arry of the missing ingredients that need to be on the shopping list
*/

let pantry = {
  fridgeContents: ["butter", "milk"],
  cupboardContents: ["salt", "tinned tomatoes", "oregano"],
};

function createShoppingList(recipe) {
  // write code here

  //First initializes an empty shopping list object with the recipe name.
  let shoppingList = {
    name: recipe.name,
    items: [],
  };
  // Then iterates over the ingredients in the recipe, and checks if each
  //   ingredient is in the fridge or cupboard contents.
  //   If it is not, it is added to the shopping list.
  for (let ingredient of recipe.ingredients) {
    if (
      !pantry.fridgeContents.includes(ingredient) &&
      !pantry.cupboardContents.includes(ingredient)
    ) {
      shoppingList.items.push(ingredient);
    }
  }
  //Finally, the shopping list is returned.
  return shoppingList;
}  

//solution from coursework review on 07 January 2023
/**
 * function createShoppingList(recipe) {
  let missingIngredients = recipe.ingredients.filter(
    (ingredient) => {
      return !pantry.fridgeContents.includes(ingredient) && !pantry.cupboardContents.includes(ingredient)
    }
  );
  return {
    name: recipe.name,
    items: missingIngredients,
  }
}
 */


/* ======= TESTS - DO NOT MODIFY =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 3-shopping-list.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("createShoppingList works for pancakes recipe", () => {
  let recipe1 = {
    name: "pancakes",
    ingredients: ["flour", "salt", "milk", "eggs", "vegetable oil"],
  };

  expect(createShoppingList(recipe1)).toEqual({
    name: "pancakes",
    items: ["flour", "eggs", "vegetable oil"],
  });
});

test("createShoppingList works for margherita pizza recipe", () => {
  let recipe2 = {
    name: "margherita pizza",
    ingredients: ["flour", "salt", "yeast", "tinned tomatoes", "oregano", "mozarella"],
  };

  expect(createShoppingList(recipe2)).toEqual({
    name: "margherita pizza",
    items: ["flour", "yeast", "mozarella"]
  });
});