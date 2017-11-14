const fs = require('fs');

module.exports = exports = function() {
  module = {};

  let _json;

  module.load = function(fileName) {
      let data = fs.readFileSync(fileName, 'utf8');
      _json = JSON.parse(data);
  }

  module.getActionRef = function(cmdline) {
      var res = _json;
      cmdline.forEach(function(val) {
          res = res[val];
      });
      return res;
  }

  return module;
}();