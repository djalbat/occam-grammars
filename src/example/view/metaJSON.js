"use strict";

import { MetaJSONLexer } from "../../index";  ///
import { MetaJSONParser } from "../../index";  ///

import View from "../view";

export default class MetaJSONView extends View {
  static Lexer = MetaJSONLexer;

  static Parser = MetaJSONParser;

  static readOnly = false;

  static initialContent = `{
  "repository": "https://github.com/djalbat/strings",
  "dependencies": [
    "natural-numbers",
    "arithmetic"
  ]
}
`;

  static defaultProperties = {
    className: "meta-json"
  };
}
