#!/usr/bin/env node

const path = require('path');
const configFile = require('./configfile.js')
const mila = require('./mila.js')

const CONFIGFILE = ".mila.json";
const HOME = process.env['HOME'];
const CONFIG_FILENAME = path.join(HOME, CONFIGFILE)

let cmdline = mila.parseCommandLine(process.argv);
configFile.load(CONFIG_FILENAME);
let command = configFile.getActionRef(cmdline)

mila.executeCommand(command);
