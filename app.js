const fetch = require('node-fetch');
const fs = require('fs')

// placeholder variables
let URL = "";
let file = "";
let wordsInFile = [];
let statusCodes = [];
let finalResult = [];

// main action happens here
var bruteForce = (url) => {
    return new Promise(resolve => {
    fetch(url)
        .then(function (response) {
            resolve(response.status)
            })
    });
}

// input processing function
var inputProcess = () => {
    try{
        URL = process.argv[2];
        file = process.argv[3];

        for(let i = 4;i<process.argv.length;i++){
            statusCodes.push(parseInt(process.argv[i]))
        }

        try{
            const data = fs.readFileSync(file, 'UTF-8');
            const lines = data.split(/\r?\n/);

            lines.forEach((line) => {
                wordsInFile.push(line);
            });
        } catch {
            console.error("Error Reading file !");
        }

    } catch {
        console.error("error in command line arguments !!!")
    }
}

var urlGenerator = (word) => {
    return "https://" + URL + "/" + word;
}

// main process
var mainProcess = async () => {
    urls = []

    wordsInFile.forEach((word) => {
        urls.push(urlGenerator(word))
    })

    for(currentUrl of urls) {
        finalResult[currentUrl] = await bruteForce(currentUrl);
    }

    writeToFile();
}

var writeToFile = () => {
    var toWrite = "";

    console.log("Printing all status codes, but writing only the required ones !\n");

    for(key in finalResult){
        let value = finalResult[key];
        console.log(`${key} [Status code ${value}]`);
        if(statusCodes.indexOf(value) !== -1){
            toWrite += `${key} [Status code ${value}]` + "\n" ;
        }
    }

    fs.writeFile('output.txt', toWrite, function (err) {
        if (err) throw err;
        console.log('\nFile Saved!');
      });
}

inputProcess();
mainProcess();