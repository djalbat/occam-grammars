"use strict";

import { CommonLexer } from "occam-lexers";

import entries from "./entries";

export default class ReadmeLexer extends CommonLexer {
  static entries = entries;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromRules(rules) { return CommonLexer.fromRules(ReadmeLexer, rules); }

  static fromNothing() { return CommonLexer.fromEntries(ReadmeLexer, entries); }

  static fromEntries(entries) { return CommonLexer.fromEntries(ReadmeLexer, entries); }
}
