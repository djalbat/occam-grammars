"use strict";

import { CommonParser as CommonParserBase } from "occam-parsers";

import State from "../state";

export default class CommonParser extends CommonParserBase {
  static State = State;
}
