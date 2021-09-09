"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var bnf = "\n\n\n    document          ::=  ( metaJSON error* ) | error+ ;\n\n\n    metaJSON          ::=  \"{\" ( ( repositoryPair ( \",\" dependenciesPair )? ) | ( dependenciesPair \",\" repositoryPair ) ) \"}\" ;\n\n\n    dependenciesPair  ::=  \"\\\"dependencies\\\"\" \":\" dependencies ;\n    \n    \n    repositoryPair    ::=  \"\\\"repository\\\"\" \":\" repository ;\n\n\n    dependencies      ::=  \"[\" (dependency ( \",\" dependency )*)? \"]\" ;\n  \n\n    dependency        ::=  [string-literal] ;\n\n\n    repository        ::=  [string-literal] ;\n\n\n    error             ::=  . ;\n\n";
var _default = bnf;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhSlNPTi9ibmYuanMiXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVaLEdBQUssQ0FBQyxHQUFHLElBQUksOGtCQTBCYjtlQUVlLEdBQUcifQ==