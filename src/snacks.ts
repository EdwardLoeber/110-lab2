import { printFunWay} from "./animation";

export const snackList: string[] = ['chips','skittles', 'Turbos', 'Popcorn', 'Sour candy', 'Chocolate', 'Cookies'];

export function printSnacks(snacks: string[]): void {
    printFunWay("I like snacks, YIPEEE!");
    snacks.forEach(snack => console.log(snack));
}

//printSnacks(snackList);