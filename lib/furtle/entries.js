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
var LATIN = "[\\p{Script=Latin}]", DECIMAL = "[0-9]";
var entries = [
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
        "primitive": "^(?:null|true|false)"
    },
    {
        "bracket": "^(?:\\{|\\})"
    },
    {
        "special": "^(?:!|=|!=|==|,|;|_|&&|\\|\\||\\(|\\)|\\[|\\])"
    },
    {
        "name": "^".concat(LATIN, "+").concat(DECIMAL, "*")
    },
    {
        "number": "^".concat(DECIMAL, "+")
    },
    {
        "unassigned": "^[^\\s]+"
    }
];
var _default = entries;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdXJ0bGUvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IExBVElOID0gXCJbXFxcXHB7U2NyaXB0PUxhdGlufV1cIixcclxuICAgICAgREVDSU1BTCA9IFwiWzAtOV1cIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJ0eXBlXCI6IFwiXig/Ok5vZGVzfE5vZGV8U3RyaW5nfE51bWJlcnxCb29sZWFuKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInF1ZXJ5XCI6IFwiXig/Om5vZGVRdWVyeXxub2Rlc1F1ZXJ5KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInByaW1hcnkta2V5d29yZFwiOiBcIl5yZXR1cm5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzZWNvbmRhcnkta2V5d29yZFwiOiBcIl4oPzppZnxlbHNlfHJlZHVjZXxldmVyeXxzb21lfGFzKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInByaW1pdGl2ZVwiOiBcIl4oPzpudWxsfHRydWV8ZmFsc2UpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYnJhY2tldFwiOiBcIl4oPzpcXFxce3xcXFxcfSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/OiF8PXwhPXw9PXwsfDt8X3wmJnxcXFxcfFxcXFx8fFxcXFwofFxcXFwpfFxcXFxbfFxcXFxdKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm5hbWVcIjogYF4ke0xBVElOfSske0RFQ0lNQUx9KmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bWJlclwiOiBgXiR7REVDSU1BTH0rYFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJ1bmFzc2lnbmVkXCI6IFwiXlteXFxcXHNdK1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cmllcztcclxuIl0sIm5hbWVzIjpbIkxBVElOIiwiREVDSU1BTCIsImVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNDQTs7O2VBQUE7OztBQXBDQSxJQUFNQSxRQUFRLHVCQUNSQyxVQUFVO0FBRWhCLElBQU1DLFVBQVU7SUFDZDtRQUNFLFFBQVE7SUFDVjtJQUNBO1FBQ0UsU0FBUztJQUNYO0lBQ0E7UUFDRSxtQkFBbUI7SUFDckI7SUFDQTtRQUNFLHFCQUFxQjtJQUN2QjtJQUNBO1FBQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsUUFBUSxBQUFDLElBQVlELE9BQVRELE9BQU0sS0FBVyxPQUFSQyxTQUFRO0lBQy9CO0lBQ0E7UUFDRSxVQUFVLEFBQUMsSUFBVyxPQUFSQSxTQUFRO0lBQ3hCO0lBQ0E7UUFDRSxjQUFjO0lBQ2hCO0NBQ0Q7SUFFRCxXQUFlQyJ9