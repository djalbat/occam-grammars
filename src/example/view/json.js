"use strict";

import { JSONLexer, JSONParser } from "../../index";  ///

import View from "../view";

export default class JSONView extends View {
  static Lexer = JSONLexer;

  static Parser = JSONParser;

  static readOnly = false;

  static initialContent = `{
  "version": "0.0.1",
  "repository": "https://github.com/djalbat/strings",
  "dependencies": {
    "natural-numbers": "0.1",
    "arithmetic": "2.3"
  }
}
`;

  static defaultProperties = {
    className: "json"
  };
}
