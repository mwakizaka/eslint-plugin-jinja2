/**
 * @fileoverview preprocess jinja2 template sytax
 * @author mwakizaka
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const processJinja2Template = {
  preprocess(text, filename) {
    const quote = '"';
    const processed = text
      // replace jinja comments with js comments
      .replace(/\{#([\s\S]*?)#\}/g, (str, val) => `/*${val}*/`)
      // treat if-else statement as ( ... , ... )
      .replace(/\{%(-?\s*if.*?)%\}/g, (str, val) => `(/*${val.substr(1)}*/`)
      .replace(/\{%(-?\s*(else|elif).*?)%\}/g, (str, val) => `,/*${val.substr(1)}*/`)
      .replace(/\{%(-?\s*endif\s*-?)%\}/g, (str, val) => `/*${val.substr(1)}*/)`)
      // replace jinja statements with js comments
      .replace(/\{%(.*?)%\}/g, (str, val) => `/*${val}*/`)
      // replace jinja expression tags in strings with spaces
      .replace(/\{[{%]([\s\S]*?)[}%]\}/g, str => str.replace(/['"]/g, ' '))
      .replace(/(['"])(.*?)\1/g, str => str.replace(/(\{\{|\}\})/g, '  '))
      // replace jinja expressions with strings
      .replace(/\{\{(.*?)\}\}/g, (str, val) => `${quote} ${val} ${quote}`);
    return [processed];
  }
};



// import processors
module.exports.processors = {
  ".tmpl": processJinja2Template,
  ".js": processJinja2Template,
  ".j2": processJinja2Template
};

