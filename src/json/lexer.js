"use strict";

import { WhitespaceToken,
         EndOfLineNonSignificantToken,
         DoublyQuotedStringLiteralToken } from "occam-lexers";

import entries from "./entries";
import CommonLexer from "../common/lexer";

export default class JSONLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return CommonLexer.fromNothing(JSONLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(JSONLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(JSONLexer, entries); }
}
