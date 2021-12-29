"use strict";

import { PlainLexer } from "../../index";  ///
import { PlainParser } from "../../index";  ///

import View from "../view";

export default class PlainView extends View {
  Lexer = PlainLexer;

  Parser = PlainParser;

  readOnly = false;

  initialContent = "";

  static defaultProperties = {
    className: "plain"
  };
}
