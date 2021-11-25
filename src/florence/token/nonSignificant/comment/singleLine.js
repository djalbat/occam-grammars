"use strict";

import { types } from "occam-lexers";
import { NonSignificantToken } from "occam-lexers";

const { singleLineCommentType } = types;

export default class SingleLineCommentToken extends NonSignificantToken {
  clone(startPosition, endPosition) { return super.clone(SingleLineCommentToken, startPosition, endPosition); }

  isInCommentPreserving() {
    const inCommentPreserving = false;

    return inCommentPreserving;
  }

  static type = singleLineCommentType;

  static regularExpression = /^#.*/;

  static match(content) { return NonSignificantToken.match(SingleLineCommentToken, content); }

  static fromContent(content) { return NonSignificantToken.fromContent(SingleLineCommentToken, content); }
}
