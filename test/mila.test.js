const proc = require('child_process');

const subject = require("../src/mila.js");

describe("mila", () => {

        it("should parse a commandline", () => {
            let argv = ["node", "index.js", "do", "some", "stuff"];

            let result = subject.parseCommandLine(argv);

            expect(result).toHaveLength(3);
            expect(result[0]).toBe("do");
            expect(result[1]).toBe("some");
            expect(result[2]).toBe("stuff");
        });

        it("should execute a command", () => {
            // given
            let proc = require("child_process");
            proc.exec = jest.fn().mockReturnValue({
                stdout: {
                    on: jest.fn()
                },
                stderr: {
                    on: jest.fn()
                },
                stdin: {
                    on: jest.fn()
                },
                on: jest.fn()
            });

            process.stdin.pipe = jest.fn();
            let theCommand = "execute the stuff";

            // when
            subject.executeCommand(theCommand);

            // then
            expect(proc.exec.mock.calls.length).toBe(1);
            expect(proc.exec.mock.calls[0][0]).toBe("execute the stuff");

        });
    }
);