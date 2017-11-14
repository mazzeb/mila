let subject = require("./mila.js");
let expect = require("chai").expect;

describe("mila", function () {

        it("should parse a commandline", function () {
            let argv = ["node", "index.js", "do", "some", "stuff"];

            let result = subject.parseCommandLine(argv);

            expect(result).to.have.lengthOf(3);
            expect(result[0]).to.equal("do");
            expect(result[1]).to.equal("some");
            expect(result[2]).to.equal("stuff");
        });
    }
);