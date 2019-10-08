"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var sorter;
// Sorting array of numbers
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Sorting characters in a string
var charactersCollection = new CharactersCollection_1.CharactersCollection('gfdgdfnjgvzxzczfaqadsajaadsaqqqasasas');
charactersCollection.sort();
console.log(charactersCollection.data);
// Sorting numbers in a LinkedList
var linkedList = new LinkedList_1.LinkedList(1, 5, 6, 3, 8, 9, 0, 1221, 1, 2);
linkedList.sort();
linkedList.print();
