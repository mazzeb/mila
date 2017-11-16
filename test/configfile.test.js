const chai = require("chai");
const expect = require("chai").expect;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const fs = require('fs');

const subject = require("../src/configfile.js");

chai.use(sinonChai);


describe("configfile", () => {

        var readFileSync;

        beforeEach(function () {
            readFileSync = sinon.stub(fs, "readFileSync");

        });

        afterEach(function () {
            readFileSync.restore();
        });

        it("should load the json", () => {
            let theJson = '{"some": "json"}';

            readFileSync.returns(theJson);

            subject.load("someFileName");

            expect(readFileSync).to.have.been.calledWith("someFileName");

        });

        it("should get action ref", () => {
            let theJson = '{"do": { "some" : { "stuff": "command for doing stuff"} } }';
            let cmdline = ["do", "some", "stuff"];

            readFileSync.returns(theJson);

            subject.load("someFileName");

            let result = subject.getActionRef(cmdline);

            expect(result).to.be.equal("command for doing stuff");
        });
    }
);
