const fs = require('fs');
const ytdl = require('ytdl-core');

var link = 'Youtube-Link'; // Enter a YouTube link

console.log('Downloading.....');

const writeStream = fs.createWriteStream('output.mp4');

ytdl(link)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('Download completed.');
  })
  .on('error', (err) => {
    console.error('Error:', err.message);
  });
