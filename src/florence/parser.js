"use strict";

import CommonParser from "../common/parser";

import bnf from "./bnf";

export default class FlorenceParser extends CommonParser {
  static bnf = bnf;
}
