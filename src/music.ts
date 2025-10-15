const songs: Array<string> = ['Over the Moon-The Marias','Wish-Blood Orange'];

export function printSongs(): void {
  console.log("Music:")
  songs.forEach((songs, index) => {
    console.log(`${songs}`);
  });
}

printSongs();