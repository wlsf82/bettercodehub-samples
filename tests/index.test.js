const test = require("tape");

const printDevInfo = require("../index.js");

test("returns correct info for dev: Walmyr", t => {
  const info = {
    firstName: "Walmyr",
    lastName: "Filho",
    twitter: "@walmyrlimaesilv",
    github: "wlsf82"
  };

  const result = printDevInfo(info);

  const expected = `${info.firstName} ${info.lastName}, ${info.twitter}, ${
    info.github
  }`;

  t.plan(1);
  t.equal(result, expected);
});
