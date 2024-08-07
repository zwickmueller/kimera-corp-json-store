var fs = require("fs");
const { Waldenburg } = require("./fontData/waldenburg.js");
const { Apparat } = require("./fontData/apparat.js");
const { Melange } = require("./fontData/melange.js");

const fontData = [Waldenburg, Apparat, Melange];
const fontDataJson = JSON.stringify(fontData, null, 2);

const fontNames = fontData.map((el) => {
  return {
    name: el.name,
    value: el.name,
  };
});
const fontNamesJson = JSON.stringify(fontNames, null, 2);

fs.writeFile("fontData.json", fontDataJson, "utf8", () =>
  finished("Font Data")
);
fs.writeFile("fontNames.json", fontNamesJson, "utf8", () =>
  finished("Font Names")
);

function finished(name) {
  console.log("Finished writing " + name + " JSON.");
}
