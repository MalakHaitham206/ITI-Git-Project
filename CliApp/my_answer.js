const fs = require("fs");
const readlineSync = require("readline-sync");

const Actions = ["[1] Read file", "[2] add file", "[3] update file with streams", "[4] Exit"];
console.log("\nPlease choose what you would like to do:");
const name = readlineSync.question("What's your name: ");
console.log(`Hello ${name}, please choose what you would like to do:`);
function main() {
  while (true) {
    // Display actions
    Actions.forEach((option) => {
      console.log(option);
    });
    const choice = readlineSync.question("Enter your choice: ");
    switch (choice) {
      case "1":
        readFile();
        break;
      case "2":
        writeFile();
        break;
      case "3":
        writeFileWithStream();
        break;
      case "4":
        console.log(`Goodbye, ${name}! Exiting the application.`);
        return; // Exit the main function and stop the loop
      default:
        console.log("Invalid choice. Please try again.");
    }
  }
}

function readFile() {
    const filePath = readlineSync.question("Enter the name of the file: ");
    if (!filePath.length) {
      console.log("No file path provided. Returning to main menu...");
      return;
    }
  
    try {
      const content = fs.readFileSync(filePath, { encoding: "utf-8" });
      console.log("Data found in the file:", content);
    } catch (error) {
      console.log("Error happened during reading the file:", error.message);
    }
  }
  

function writeFile() {
  const filePath = readlineSync.question("Enter the name of the file you want to write in: ");
  if (!filePath.length) {
    console.log("No file path provided. Returning to main menu...");
    return;
  }

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  const content = readlineSync.question("Enter the content of the file: ");
  fs.writeFileSync(filePath, content, { encoding: "utf-8" });
  console.log("File saved successfully.");
}

function writeFileWithStream() {
  const filePath = readlineSync.question("Enter the name of the file you want to write in: ");
  if (!filePath.length) {
    console.log("No file path provided. Returning to main menu...");
    return;
  }

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);

  }

  const content = readlineSync.question("Enter the content of the file: ");
  const writeStream = fs.createWriteStream(filePath, { encoding: "utf-8" });

  writeStream.write(content);
  writeStream.end();

  writeStream.on("finish", () =>{
    console.log("File saved successfully using streams.");
  });

  writeStream.on("error", (error) => {
    console.log("Error happened during writing the file:", error.message);
  });
}

main();