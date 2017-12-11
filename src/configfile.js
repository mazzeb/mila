const debug = require("debug")("configfile");

module.exports = exports = (() => {
    "use strict";
    let module = {};
    let _json;

    module._setJson = (theJson) => {
        _json = JSON.parse(theJson);
    }

    module.load = (fileName) => {
        debug(`loading configfile ${fileName}`);
        _json = require(fileName);
    };

    module.getActionRef = (cmdline) => {
        var res = _json;
        cmdline.forEach(function (val) {
            res = res[val];
        });
        return res;
    };

    return module;
})();

