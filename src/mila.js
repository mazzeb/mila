const proc = require('child_process');
const colors = require('colors');


module.exports = exports = (() => {
    "strict";
    module = {};


    module.parseCommandLine = (argv) => {
        let cmd = [];
        argv.forEach((val, index) => {
            if (index > 1) {
                cmd.push(val);
            }
        });
        return cmd;
    }


    module.executeCommand = (command) => {
        console.log(`executing: ${command}`);

        child = proc.exec(command, function (error, stdout, stderr) {
            if (stdout) {
                console.log(stdout.green);
            }

            if (stderr) {
                console.log(stderr.red);
            }

            if (error != null) {
                console.log(`exec error: ${error}`.red);
            }
        });
    }

    return module;
})();