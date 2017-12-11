const proc = require('child_process');
const debug = require('debug')('mila');
const colors = require('colors');


module.exports = exports = (() => {
    "use strict";
    let module = {};


    module.parseCommandLine = (argv) => {
        let ret = {};
        ret.cmd = [];
        argv.forEach((val, index) => {
            if (index > 1) {
                if (!val.startsWith("--")) {
                    ret.cmd.push(val);
                } else {
                    val = val.substring(2);
                    ret[val] = true;
                }
            }
        });
        return ret;
    };

    module.executeCommand = (command) => {
        debug(`executing: ${command}`);

        let p = proc.exec(command, {
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


    };

    module.list = (o, ident) => {
        ident = ident || "";
        for(let p in o) {
            console.log(ident + p);
            if (typeof o[p] === "object") {
                module.list(o[p], ident + "  ");
            }
            // if (typeof o[p] == "string") {
            //     console.log(ident + "  ==> " + o[p]);
            // }
        }

    };

    return module;
})();