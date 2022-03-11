"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var entries = [
    {
        "special": "^(?:,|=|::|:|\\|-|\\(|\\))|\\[|\\]|\\.\\.\\."
    },
    {
        "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Variables|Variable|Constructors|Constructor|Combinators|Combinator|DependentTypes|DependentType|DisjointTypes|DisjointType|Metavariables|Metavariable|Abbreviations|Abbreviation|Let|for|from|by)\\b"
    },
    {
        "reserved": "^(?:undefined|free|not|in|is)\\b"
    },
    {
        "name": "^[A-Za-zΑ-Ωα-ω_0-9]+"
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9lbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZW50cmllcyA9IFtcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86LHw9fDo6fDp8XFxcXHwtfFxcXFwofFxcXFwpKXxcXFxcW3xcXFxcXXxcXFxcLlxcXFwuXFxcXC5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJrZXl3b3JkXCI6IFwiXig/OlJ1bGV8QXhpb218VGhlb3JlbXxMZW1tYXxDb25qZWN0dXJlfE1ldGFsZW1tYXxNZXRhdGhlb3JlbXxQcmVtaXNlc3xQcmVtaXNlfENvbmNsdXNpb258UHJvb2Z8VGhlcmVmb3JlfFN1cHBvc2V8VGhlbnxIZW5jZXxUeXBlc3xUeXBlfFZhcmlhYmxlc3xWYXJpYWJsZXxDb25zdHJ1Y3RvcnN8Q29uc3RydWN0b3J8Q29tYmluYXRvcnN8Q29tYmluYXRvcnxEZXBlbmRlbnRUeXBlc3xEZXBlbmRlbnRUeXBlfERpc2pvaW50VHlwZXN8RGlzam9pbnRUeXBlfE1ldGF2YXJpYWJsZXN8TWV0YXZhcmlhYmxlfEFiYnJldmlhdGlvbnN8QWJicmV2aWF0aW9ufExldHxmb3J8ZnJvbXxieSlcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInJlc2VydmVkXCI6IFwiXig/OnVuZGVmaW5lZHxmcmVlfG5vdHxpbnxpcylcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjogXCJeW0EtWmEtes6RLc6pzrEtz4lfMC05XStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbImVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RTt3QjtBQUViLEdBQUssQ0FBQ0EsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO1FBQ0MsQ0FBUyxVQUFFLENBQThDO0lBQzNELENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBUyxVQUFFLENBQThVO0lBQzNWLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBVSxXQUFFLENBQWtDO0lBQ2hELENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBTSxPQUFFLENBQXNCO0lBQ2hDLENBQUM7SUFDRCxDQUFDO1FBQ0MsQ0FBWSxhQUFFLENBQVU7SUFDMUIsQ0FBQztBQUNILENBQUM7ZUFFY0EsT0FBTzswQiJ9