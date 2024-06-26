"use strict";

import { WhitespaceToken, EndOfLineNonSignificantToken } from "occam-lexers";

import entries from "./entries";
import CommonLexer from "../common/lexer";

export default class TeXLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken;

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromNothing() { return CommonLexer.fromNothing(TeXLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(TeXLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(TeXLexer, entries); }
}
