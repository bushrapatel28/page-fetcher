const fs = require('fs');
const request = require('request');

const input = process.argv.slice(2);
const URL = input[0].toString();
const filePath = input[1].toString();

request(`${URL}`, (error, response, body) => {
  if(error) {
    console.log("Invalid URL\n", error);
    return;
  } else { 
    fs.writeFile(`${filePath}`, body, (error) => {
      if (error) {
        console.log("Invalid File Path\n", error);
        return;
      } else {
        fs.readFile(`./index.html`, 'utf-8', (error, data) => {
          if(error) {
            console.log("Failed to read file\n", error);
            return;
          } else {
            console.log(`Downloaded and saved ${data.length} bytes to ${filePath}.`);
          }
        });
      }
    });
  }
});