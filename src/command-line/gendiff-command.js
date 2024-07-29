import { readFile } from "../utils.js"
import { program } from 'commander';

const showHelp = () => {
    const helpFilePath = './resources/gendiff-help.txt';
    console.log(readFile(helpFilePath));
};

const gendiff = () => {
    program
        .version('0.0.1')
        .option('-h, --help', 'Demonstration of the command capabilities')
        .parse(process.argv);

    const { help } = program.opts();

    if (help) {
        showHelp()
    }
    else {
        console.log("Какая-то логика")
    }
}

export { gendiff }