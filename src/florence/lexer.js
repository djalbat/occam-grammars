"use strict";

import { CommonLexer,
         WhitespaceToken,
         EndOfLineSignificantToken,
         DoublyQuotedStringLiteralToken,
         EndOfLineCommentSignificantToken,
         PythonStyleSingleLineCommentToken,
         PythonStyleEndOfMultiLineCommentToken,
         PythonStyleStartOfMultiLineCommentToken,
         PythonStyleMiddleOfMultiLineCommentToken } from "occam-lexers";

import entries from "./entries";

export default class FlorenceLexer extends CommonLexer {
  matchRegularExpression(content) { return null; }

  matchSinglyQuotedStringLiteral(content) { return null; }

  static entries = entries;

  static EndOfLineToken = EndOfLineSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static RegularExpressionToken = null;

  static EndOfLineCommentToken = EndOfLineCommentSignificantToken;

  static SingleLineCommentToken = PythonStyleSingleLineCommentToken;

  static EndOfMultiLineCommentToken = PythonStyleEndOfMultiLineCommentToken;  ///

  static StartOfMultiLineCommentToken = PythonStyleStartOfMultiLineCommentToken;  ///

  static MiddleOfMultiLineCommentToken = PythonStyleMiddleOfMultiLineCommentToken;  ///

  static SinglyQuotedStringLiteralToken = null;  ///

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return CommonLexer.fromNothing(FlorenceLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(FlorenceLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(FlorenceLexer, entries); }
}
