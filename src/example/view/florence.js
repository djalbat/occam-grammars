"use strict";

import { FlorenceLexer } from "../../index";  ///
import { FlorenceParser } from "../../index";  ///

import View from "../view";

export default class FlorenceView extends View {
  static Lexer = FlorenceLexer;

  static Parser = FlorenceParser;

  static readOnly = false;

  static initialContent = `
  
Rule (Explosion)
  Conclusion
    A

  `;

  static defaultProperties = {
    className: "florence"
  };
}
