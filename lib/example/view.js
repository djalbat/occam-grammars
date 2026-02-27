"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _easylayout = require("easy-layout");
const _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
const _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
const _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
const _ruleName = /*#__PURE__*/ _interop_require_default(require("./view/input/ruleName"));
const _tokens = /*#__PURE__*/ _interop_require_default(require("./view/textarea/tokens"));
const _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
const _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
const _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class View extends _easy.Element {
    keyUpHandler = (event, element)=>{
        // try {
        const tokens = this.getTokens(), parseTree = this.getParseTree(tokens);
        this.setTokens(tokens);
        this.setParseTree(parseTree);
    // } catch (error) {
    //   console.log(error);
    //
    //   this.clearTokens();
    //
    //   this.clearParseTree();
    // }
    };
    getTokens() {
        const { Lexer } = this.constructor, lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, lexer = Lexer.fromEntries(entries), content = this.getContent(), tokens = lexer.tokenise(content);
        return tokens;
    }
    getParseTree(tokens) {
        let parseTree = null;
        const { Parser } = this.constructor, bnf = this.getBNF(), parser = Parser.fromBNF(bnf), ruleName = this.getRuleName(), ruleMap = parser.getRuleMap(), rule = ruleMap[ruleName], node = parser.parse(tokens, rule);
        if (node !== null) {
            parseTree = node.asParseTree(tokens);
        }
        return parseTree;
    }
    childElements() {
        const { readOnly } = this.constructor;
        return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
            onKeyUp: this.keyUpHandler,
            readOnly: readOnly
        }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
            onKeyUp: this.keyUpHandler,
            readOnly: readOnly
        }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Rule name"), /*#__PURE__*/ React.createElement(_ruleName.default, {
            onKeyUp: this.keyUpHandler
        }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
            onKeyUp: this.keyUpHandler
        }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))));
    }
    initialise() {
        this.assignContext();
        const { Lexer, Parser, initialContent, initialRuleName } = this.constructor, { bnf } = Parser, { entries } = Lexer, content = initialContent, ruleName = initialRuleName, lexicalEntries = entries; ///
        this.setBNF(bnf);
        this.setContent(content);
        this.setRuleName(ruleName);
        this.setLexicalEntries(lexicalEntries);
        this.keyUpHandler();
    }
    static initialRuleName = null;
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}
const _default = (0, _easywithstyle.default)(View)`

  padding: 1rem;
 
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3ZpZXcvc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBSdWxlTmFtZUlucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvcnVsZU5hbWVcIjtcbmltcG9ydCBUb2tlbnNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3Rva2Vuc1wiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIC8vIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLmdldFRva2VucygpLFxuICAgICAgICAgICAgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vXG4gICAgLy8gICB0aGlzLmNsZWFyVG9rZW5zKCk7XG4gICAgLy9cbiAgICAvLyAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICAvLyB9XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgeyBMZXhlciB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IHsgUGFyc2VyIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgcGFyc2VyID0gUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTWFwID0gcGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFtydWxlTmFtZV0sXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHJ1bGUpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IHJlYWRPbmx5IH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSByZWFkT25seT17cmVhZE9ubHl9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IHJlYWRPbmx5PXtyZWFkT25seX0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBSdWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxSdWxlTmFtZUlucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFRva2Vuc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFRva2Vuc1RleHRhcmVhIC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBMZXhlciwgUGFyc2VyLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbFJ1bGVOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgYm5mIH0gPSBQYXJzZXIsXG4gICAgICAgICAgeyBlbnRyaWVzIH0gPSBMZXhlcixcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gaW5pdGlhbFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxSdWxlTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuIFxuYDtcbiJdLCJuYW1lcyI6WyJWaWV3IiwiRWxlbWVudCIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInRva2VucyIsImdldFRva2VucyIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsInNldFRva2VucyIsInNldFBhcnNlVHJlZSIsIkxleGVyIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJsZXhlciIsImZyb21FbnRyaWVzIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsIlBhcnNlciIsImJuZiIsImdldEJORiIsInBhcnNlciIsImZyb21CTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJydWxlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwicmVhZE9ubHkiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJSdWxlTmFtZUlucHV0IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIlRva2Vuc1RleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbFJ1bGVOYW1lIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldFJ1bGVOYW1lIiwic2V0TGV4aWNhbEVudHJpZXMiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3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