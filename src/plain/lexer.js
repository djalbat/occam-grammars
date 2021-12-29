"use strict";

import { CommonLexer, EndOfLineSignificantToken } from "occam-lexers";

import entries from "./entries";

export default class PlainLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineSignificantToken;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromRules(rules) { return CommonLexer.fromRules(PlainLexer, rules); }

  static fromNothing() { return CommonLexer.fromEntries(PlainLexer, entries); }

  static fromEntries(entries) { return CommonLexer.fromEntries(PlainLexer, entries); }
}
