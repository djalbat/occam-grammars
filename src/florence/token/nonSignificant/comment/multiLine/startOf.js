"use strict";

import { types } from "occam-lexers";
import { NonSignificantToken } from "occam-lexers";

const { startOfMultiLineCommentType } = types;

export default class StartOfMultiLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(StartOfMultiLineCommentToken, startPosition, endPosition); }

  isInCommentPreserving() {
    const inCommentPreserving = true;

    return inCommentPreserving;
  }

  static type = startOfMultiLineCommentType;

  static regularExpression = /^###/;

  static match(content) { return NonSignificantToken.match(StartOfMultiLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(StartOfMultiLineCommentToken, content); }
}
