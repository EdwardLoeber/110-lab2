import { printFunWay} from "./animation";

const snackList: string[] = ['skittles', 'Turbos', 'Popcorn', 'Sour candy', 'Chocolate', 'Cookies'];

export function printSnacks(snacks: string[]): void {
    printFunWay("I like snacks, YIPEEE!");
    snacks.forEach(snack => console.log(snack));
}

//printSnacks(snackList);