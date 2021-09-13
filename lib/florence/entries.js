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
        "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Conjecture|Metalemma|Metatheorem|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Operators|Operator|Variables|Variable|Constructors|Constructor|DependentTypes|DependentType|DisjointTypes|DisjointType|Metavariables|Metavariable|Abbreviations|Abbreviation|Let|for|from|by)\\b"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mbG9yZW5jZS9lbnRyaWVzLmpzIl0sIm5hbWVzIjpbImVudHJpZXMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVosR0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztTQUNDLE9BQVMsSUFBRSw0Q0FBOEM7SUFDM0QsQ0FBQztJQUNELENBQUM7U0FDQyxPQUFTLElBQUUsd1VBQTBVO0lBQ3ZWLENBQUM7SUFDRCxDQUFDO1NBQ0MsUUFBVSxJQUFFLGdDQUFrQztJQUNoRCxDQUFDO0lBQ0QsQ0FBQztTQUNDLElBQU0sSUFBRSx3QkFBc0I7SUFDaEMsQ0FBQztJQUNELENBQUM7U0FDQyxVQUFZLElBQUUsUUFBVTtJQUMxQixDQUFDO0FBQ0gsQ0FBQztlQUVjLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/Oix8PXw6Onw6fFxcXFx8LXxcXFxcKHxcXFxcKSl8XFxcXFt8XFxcXF18XFxcXC5cXFxcLlxcXFwuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwia2V5d29yZFwiOiBcIl4oPzpSdWxlfEF4aW9tfFRoZW9yZW18TGVtbWF8Q29uamVjdHVyZXxNZXRhbGVtbWF8TWV0YXRoZW9yZW18UHJlbWlzZXN8UHJlbWlzZXxDb25jbHVzaW9ufFByb29mfFRoZXJlZm9yZXxTdXBwb3NlfFRoZW58SGVuY2V8VHlwZXN8VHlwZXxPcGVyYXRvcnN8T3BlcmF0b3J8VmFyaWFibGVzfFZhcmlhYmxlfENvbnN0cnVjdG9yc3xDb25zdHJ1Y3RvcnxEZXBlbmRlbnRUeXBlc3xEZXBlbmRlbnRUeXBlfERpc2pvaW50VHlwZXN8RGlzam9pbnRUeXBlfE1ldGF2YXJpYWJsZXN8TWV0YXZhcmlhYmxlfEFiYnJldmlhdGlvbnN8QWJicmV2aWF0aW9ufExldHxmb3J8ZnJvbXxieSlcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInJlc2VydmVkXCI6IFwiXig/OnVuZGVmaW5lZHxmcmVlfG5vdHxpbnxpcylcXFxcYlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjogXCJeW0EtWmEtes6RLc6pzrEtz4lfMC05XStcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl19