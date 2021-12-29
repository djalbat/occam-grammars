"use strict";

import { FlorenceLexer } from "../../index";  ///
import { FlorenceParser } from "../../index";  ///

import View from "../view";

export default class FlorenceView extends View {
  Lexer = FlorenceLexer;

  Parser = FlorenceParser;

  heading = "Florence Example";

  readOnly = false;

  initialContent = `
  
Rule (Explosion)
  Conclusion
    A

  `;

  static defaultProperties = {
    className: "florence"
  };
}
