"use strict";
// Assignment-03 [08/15/2023]
// Q2: Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
// Simple Shopping Cart Program
let shoppingCart = [];
// Add New Item in Shopping Cart Function
function addItemToShoppingCart(item, quantity) {
    shoppingCart.push({ item, quantity });
    console.log(`New Item: ${item} and Item Quantity: ${quantity} is added to Shopping Cart`);
    console.log(`Updated Cart after Adding new Item: ${shoppingCart}`);
}
// Remove Item from Shopping Cart Function
function removeItemFromShoppingCart(item) {
    let itemIndex = shoppingCart.findIndex((cartItem) => cartItem.item === item);
    if (itemIndex !== -1) {
        shoppingCart.splice(itemIndex, 1);
        console.log(`Item: ${item} is Removed from Shopping Cart: ${shoppingCart}`);
    }
    else {
        console.log(`Item: ${item} is not found in Shopping Cart: ${shoppingCart}`);
    }
}
// Update Quantity of Item from Shopping Cart Function
function updateQuantityOfItemInShoppingCart(item, newQuantity) {
    let cartItem = shoppingCart.find((cartItem) => cartItem.item === item);
    if (cartItem) {
        console.log(`Old Quanity of Item: ${cartItem.item} was: ${cartItem.quantity}`);
        cartItem.quantity = newQuantity;
        console.log(`New Quanity of Item: ${cartItem.item} is now: ${cartItem.quantity}`);
    }
    else {
        console.log(`Item: ${item} is not found in Shopping Cart: ${shoppingCart}`);
    }
}
addItemToShoppingCart("Sugar", 10);
removeItemFromShoppingCart("Salt");
updateQuantityOfItemInShoppingCart("Oil", 20);
