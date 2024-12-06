"use strict";

const entries = [
  {
    "type": "^(?:Boolean|String|Number|Nodes|Node|Void)"
  },
  {
    "query": "^(?:nodeQuery|nodesQuery)"
  },
  {
    "return": "^Return"
  },
  {
    "keyword": "^(?:If|Else|ForEach)"
  },
  {
    "primitive": "^(?:null|true|false)"
  },
  {
    "bracket": "^(?:\\{|\\})"
  },
  {
    "special": "^(?:!=|==|=|,|;|_|&&|\\|\\||@|!|\\*|\\||\\/|\\(|\\)|\\[|\\]|\\.\\.\\.)"
  },
  {
    "name": "^[a-zA-Z\-]+"
  },
  {
    "number": "^[0-9]+"
  },
  {
    "unassigned": "^."
  }
];

export default entries;
