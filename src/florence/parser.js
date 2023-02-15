"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class FlorenceParser extends CommonParser {
  static bnf = bnf;
}
