"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class ReadmeParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(ReadmeParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(ReadmeParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(ReadmeParser, rules); }
}
