import { printSnacks } from "./snacks"; 
import printSongs from './music';

function main(): void {
    printSongs();
    let snacks = ['Turbos', 'Popcorn', 'Sour candy', 'Chocolate', 'Cookies'];
    printSnacks(snacks);
}

main();
