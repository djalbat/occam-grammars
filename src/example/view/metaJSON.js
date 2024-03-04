"use strict";

import { MetaJSONLexer, MetaJSONParser } from "../../index";  ///

import View from "../view";

export default class MetaJSONView extends View {
  static Lexer = MetaJSONLexer;

  static Parser = MetaJSONParser;

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
    className: "meta-json"
  };
}
