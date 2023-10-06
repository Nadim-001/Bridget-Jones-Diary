// JEST Setup to have access to a fake DOM

//tool to work with directories and file paths
const path = require("path");
//import of JSDOM contructor which will allow us to build the fake DOM
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const renderDOM = async (filename) => {
  const filePath = path.join(process.cwd(), filename);
  const dom = await JSDOM.fromFile(filePath, {
    //Allows scripts inside the dom(html) to execute. so basically anything within a script tag.
    runScripts: "dangerously",
    //loads external scripts such as when there is a <script src='file.js'></script>
    resources: "usable",
  });

  return new Promise((resolve) => {
    dom.window.document.addEventListener("DOMContentLoaded", () => {
      resolve(dom);
    });
  });
};

module.exports = renderDOM;
