const proc = require('child_process');
const colors = require('colors');


module.exports = exports = (() => {
    "use strict";
    let module = {};


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

        var p = proc.exec(command, {
            env: process.env
        });

        p.stdout.on("data", function (data) {
            process.stdout.write(data.green);
        });

        p.stderr.on("data", function (data) {
            process.stderr.write(data.red);
        });

        p.on("exit", function (data) {
            process.exit(data);
        });

        process.stdin.pipe(p.stdin);


    }

    return module;
})();