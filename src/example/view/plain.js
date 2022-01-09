"use strict";

import { PlainLexer } from "../../index";  ///
import { PlainParser } from "../../index";  ///

import View from "../view";

export default class PlainView extends View {
  static Lexer = PlainLexer;

  static Parser = PlainParser;

  static readOnly = false;

  static initialContent = "";

  static defaultProperties = {
    className: "plain"
  };
}
