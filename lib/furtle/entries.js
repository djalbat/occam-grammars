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
const LATIN = "[\\p{Script=Latin}]", DECIMAL = "[0-9]";
const entries = [
    {
        "type": "^(?:Nodes|Node|String|Number|Boolean)"
    },
    {
        "query": "^(?:nodeQuery|nodesQuery)"
    },
    {
        "primary-keyword": "^return"
    },
    {
        "secondary-keyword": "^(?:if|else|reduce|every|some|as)"
    },
    {
        "null": "^null"
    },
    {
        "boolean": "^(?:true|false)"
    },
    {
        "bracket": "^(?:\\{|\\})"
    },
    {
        "special": "^(?:!=|==|!|=|,|;|&&|\\|\\||\\(|\\)|\\[|\\])"
    },
    {
        "name": `^${LATIN}+${DECIMAL}*`
    },
    {
        "number": `^${DECIMAL}+`
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
const _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdXJ0bGUvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IExBVElOID0gXCJbXFxcXHB7U2NyaXB0PUxhdGlufV1cIixcclxuICAgICAgREVDSU1BTCA9IFwiWzAtOV1cIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJ0eXBlXCI6IFwiXig/Ok5vZGVzfE5vZGV8U3RyaW5nfE51bWJlcnxCb29sZWFuKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInF1ZXJ5XCI6IFwiXig/Om5vZGVRdWVyeXxub2Rlc1F1ZXJ5KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInByaW1hcnkta2V5d29yZFwiOiBcIl5yZXR1cm5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzZWNvbmRhcnkta2V5d29yZFwiOiBcIl4oPzppZnxlbHNlfHJlZHVjZXxldmVyeXxzb21lfGFzKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bGxcIjogXCJebnVsbFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJvb2xlYW5cIjogXCJeKD86dHJ1ZXxmYWxzZSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJicmFja2V0XCI6IFwiXig/OlxcXFx7fFxcXFx9KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86IT18PT18IXw9fCx8O3wmJnxcXFxcfFxcXFx8fFxcXFwofFxcXFwpfFxcXFxbfFxcXFxdKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjogYF4ke0xBVElOfSske0RFQ0lNQUx9KmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBgXiR7REVDSU1BTH0rYFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbIkxBVElOIiwiREVDSU1BTCIsImVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlDQTs7O2VBQUE7OztBQXZDQSxNQUFNQSxRQUFRLHVCQUNSQyxVQUFVO0FBRWhCLE1BQU1DLFVBQVU7SUFDZDtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsU0FBUztJQUNYO0lBQ0E7UUFDRSxtQkFBbUI7SUFDckI7SUFDQTtRQUNFLHFCQUFxQjtJQUN2QjtJQUNBO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxRQUFRLENBQUMsQ0FBQyxFQUFFRixNQUFNLENBQUMsRUFBRUMsUUFBUSxDQUFDLENBQUM7SUFDakM7SUFDQTtRQUNFLFVBQVUsQ0FBQyxDQUFDLEVBQUVBLFFBQVEsQ0FBQyxDQUFDO0lBQzFCO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7TUFFRCxXQUFlQyJ9