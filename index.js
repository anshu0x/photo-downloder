// const request = require('request');
// const fs = require('fs');

// for (let id = 1; id <= 1150; id++) {
//   let url = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;

//   request.get(url)
//     .pipe(fs.createWriteStream(`${id}.svg`))
//     .on('close', () => console.log(`Saved image ${id}.svg`));
// }



//  program to delete all these downloaded images 


// const fs = require('fs');

// for (let id = 1; id <= 1150; id++) {
//   let filePath = `${id}.svg`;
//   fs.unlink(filePath, (err) => {
//     if (err) {
//       console.error(`Error deleting file ${filePath}:`, err);
//     } else {
//       console.log(`Deleted file ${filePath}`);
//     }
//   });
// }
