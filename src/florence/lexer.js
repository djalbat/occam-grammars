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
  static entries = entries;

  static EndOfLineToken = EndOfLineSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static RegularExpressionToken = null;

  static EndOfLineCommentToken = EndOfLineCommentSignificantToken;

  static SingleLineCommentToken = PythonStyleSingleLineCommentToken;

  static EndOfMultiLineCommentToken = PythonStyleEndOfMultiLineCommentToken;  ///

  static StartOfMultiLineCommentToken = PythonStyleStartOfMultiLineCommentToken;  ///

  static MiddleOfMultiLineCommentToken = PythonStyleMiddleOfMultiLineCommentToken;  ///

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;
}
