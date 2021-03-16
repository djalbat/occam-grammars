"use strict";

import { MetaJSONLexer } from "../../index";  ///
import { MetaJSONParser } from "../../index";  ///

import View from "../view";

export default class MetaJSONView extends View {
  Lexer = MetaJSONLexer;

  Parser = MetaJSONParser;

  heading = "Meta JSON example";

  readOnly = false;

  initialContent = `{
  "repository": "https://github.com/jecs-imperial/strings",
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
