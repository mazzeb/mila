const exec = require('child_process').exec;
const colors = require('colors');


module.exports = exports = function() {
    module = {};


    module.parseCommandLine = function(argv) {
        let cmd = [];
        argv.forEach((val, index) => {
            if (index > 1) {
                cmd.push(val);
            }
        });
        return cmd;
    }


    module.executeCommand = function(command) {
        console.log(`executing: ${command}`);

        child = exec(command, function (error, stdout, stderr) {
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
}();