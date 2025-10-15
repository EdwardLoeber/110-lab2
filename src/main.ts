import { printSnacks } from "./snacks"; 
import printSongs from './music';

function main(): void {
    printSongs();
    console.log('\n');
    console.log('\n');
    let snacks = ['Turbos', 'Popcorn', 'Sour candy', 'Chocolate', 'Cookies', 'snack1', 'snack2'];
    printSnacks(snacks);
}

main();
