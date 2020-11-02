var report = require("vfile-reporter");
var remark = require("remark");
var styleGuide = require("remark-preset-lint-markdown-style-guide");

var file = remark().use(styleGuide).processSync("_Hello world_");

console.log(report(file));
