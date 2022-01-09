"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class PlainParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(PlainParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(PlainParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(PlainParser, rules); }
}
