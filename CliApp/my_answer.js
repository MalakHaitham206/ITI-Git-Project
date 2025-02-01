const fs = require("fs"); // core module
var readlineSync = require('readline-sync'); // core module
Actions = [{'readfile':[]}, {'write':[]}, {'exit':[]},{'write with module':[]}],
function taskFunction() {
   
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
