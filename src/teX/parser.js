"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class TeXParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(TeXParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(TeXParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(TeXParser, rules); }
}
