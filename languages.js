const { join } = require("path");
const { readdirSync, lstatSync } = require("fs");

const defaultLanguage = "fr";

// based on the directories get the language codes
const languages = readdirSync(join(__dirname, "locales")).filter((fileName) => {
  const joinedPath = join(join(__dirname, "locales"), fileName);
  const isDirectory = lstatSync(joinedPath).isDirectory();
  return isDirectory;
});

module.exports = {
  languages,
  defaultLanguage,
};
