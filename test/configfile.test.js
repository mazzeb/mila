const subject = require("../src/configfile.js");

describe("configfile", () => {

        it("should get action ref", () => {
            let theJson = '{"do": { "some" : { "stuff": "command for doing stuff"} } }';
            let cmdline = ["do", "some", "stuff"];

            subject._setJson(theJson);

            let result = subject.getActionRef(cmdline);

            expect(result).toBe("command for doing stuff");
        });
    }
);
