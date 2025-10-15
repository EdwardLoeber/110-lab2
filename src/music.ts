export const songs: Array<string> = ['Over the Moon-The Marias','Wish-Blood Orange'];

export default function printSongs(): void {
  console.log("Music:")
  songs.forEach((songs, index) => {
    console.log(`${songs}`);
  });
}