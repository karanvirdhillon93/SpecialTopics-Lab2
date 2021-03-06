import * as fs from "fs";
import * as process from "process";

const { COPYFILE_EXCL } = fs.constants;
console.log(`${process.argv[0]}`);
console.log(`${process.argv[1]}`);
console.log(`${process.argv[2]}`);
console.log(`${process.argv[3]}`);

let source=process.argv[2];
console.log(`Source: ${source}`);
let Destination=process.argv[3];
console.log(`Destination: ${Destination}`);



function callback(err) {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
}

//You can use fs.readFileSync to read files, fs.writeFileSync to write files, and fs.existsSync to check if a file exists or not. 

// destination.txt will be created or overwritten by default.
fs.copyFile(source, Destination, callback);

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
fs.copyFile(source,Destination, COPYFILE_EXCL, callback);
