import { printFunWay } from "./animation";

const songs: Array<string> = ['Over the Moon-The Marias','Wish-Blood Orange'];

export default function printSongs(): void {
  printFunWay('Get Jiggy Baby');
  console.log("Music:");
  songs.forEach((songs, index) => {
    console.log(`${songs}`);
  });
}