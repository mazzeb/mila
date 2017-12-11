#!/usr/bin/env node

const path = require('path');
const configFile = require('./configfile.js')
const mila = require('./mila.js')

const CONFIGFILE = ".mila.json";
const HOME = process.env['HOME'];
const CONFIG_FILENAME = path.join(HOME, CONFIGFILE)

let cmdline = mila.parseCommandLine(process.argv);
configFile.load(CONFIG_FILENAME);

if (cmdline.list === true) {
    mila.list(cmdline.cmd);
} else {
    let command = configFile.getActionRef(cmdline.cmd);

    if (command !== undefined && typeof command == "string") {
        mila.executeCommand(command);
    } else {
        mila.list(command);
    }
}


