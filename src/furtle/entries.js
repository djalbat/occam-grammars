"use strict";

const entries = [
  {
    "type": "^(?:Nodes|Node|String|Number|Boolean)"
  },
  {
    "query": "^(?:nodeQuery|nodesQuery)"
  },
  {
    "return": "^Return"
  },
  {
    "keyword": "^(?:If|Else|Reduce|Every|Some|As)"
  },
  {
    "primitive": "^(?:null|true|false)"
  },
  {
    "bracket": "^(?:\\{|\\})"
  },
  {
    "special": "^(?:!=|==|=|,|;|_|&&|\\|\\||\\(|\\))"
  },
  {
    "unassigned": "^."
  }
];

export default entries;
