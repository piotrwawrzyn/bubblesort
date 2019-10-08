import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

let sorter;

// Sorting array of numbers
const numbersCollection = new NumbersCollection([10, 3, -5, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Sorting characters in a string
const charactersCollection = new CharactersCollection(
  'gfdgdfnjgvzxzczfaqadsajaadsaqqqasasas'
);
charactersCollection.sort();
console.log(charactersCollection.data);

// Sorting numbers in a LinkedList
const linkedList = new LinkedList(1, 5, 6, 3, 8, 9, 0, 1221, 1, 2);
linkedList.sort();
linkedList.print();
