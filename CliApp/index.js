// take input from the user that will represent the file name
// then process the file name by using fs
// use the featue of async once and the sync once
// the output should be the content of the file
// handle gracefully the errors in case of the file is no exist
// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// [ LAP ⚠️⚠️ LAP] search for package called 'readline-sync' 👇👇👇 read plz
// install nvm:
    //nvm use 16
// 1. install npm install readline-sync
// 2. import the package
    //npm install readline-sync
// 3. do the same below implementation but in another file with the third party lib (readline-sync)
// 4. loop over the terminal and give choice to the user to read or write on the file
// Hello customer, please pick from one of the below choices 
// [1]. readfile
    // [1.1] => enter the name of the file
    // [1.2] => handle if the file exists, print the content, and continue asking him to do another activity 
    // [1.3] => close or pick close or terminate the app, gracefully terminate it
// [2]. write content on file
    // [2.1] please enter the file that you want to write in
    // [2.2] if file exists, remove it and create another pure empty file
    // [2.3] please enter the content of  the file
    // [2.4] Saved successfully, and show him the options in order to print the content of the file
// [3] exit app
// [4] Bonus, any one who will be writing on the files using the core module or fs.stream [writing streams capabilitlies]

const fs = require("fs"); // core module
const readline = require("readline"); // core module

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the file path: ", (filePath) => {
    if (!filePath.length) rl.close();

    fs.readFile(filePath, { encoding: "utf-8" }, (error, content) => {
      if (error) {
        console.log("Error happened during reading the file", error?.message);
        rl.close();
        return;
      }

      console.log("data found in the file", content);
      rl.close();
    });
  });
}

module.exports = main;
