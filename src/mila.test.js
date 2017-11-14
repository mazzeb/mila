const chai = require("chai");
const expect = require("chai").expect;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const proc = require('child_process');
const subject = require("./mila.js");

chai.use(sinonChai);


describe("mila", function () {

        it("should parse a commandline", function () {
            let argv = ["node", "index.js", "do", "some", "stuff"];

            let result = subject.parseCommandLine(argv);

            expect(result).to.have.lengthOf(3);
            expect(result[0]).to.equal("do");
            expect(result[1]).to.equal("some");
            expect(result[2]).to.equal("stuff");
        });

        it("should execute a command", function() {
            let theCommand = "execute the stuff";
            let execStub = sinon.stub(proc, "exec");

            subject.executeCommand(theCommand);

            expect(execStub).to.have.been.calledWith("execute the stuff");

        })
    }
);