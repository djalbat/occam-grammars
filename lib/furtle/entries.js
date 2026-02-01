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
        "null": "^null"
    },
    {
        "boolean": "^(?:true|false)"
    },
    {
        "bracket": "^(?:\\{|\\})"
    },
    {
        "special": "^(?:!=|==|!|=|,|;|_|&&|\\|\\||\\(|\\)|\\[|\\])"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdXJ0bGUvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IExBVElOID0gXCJbXFxcXHB7U2NyaXB0PUxhdGlufV1cIixcclxuICAgICAgREVDSU1BTCA9IFwiWzAtOV1cIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJ0eXBlXCI6IFwiXig/Ok5vZGVzfE5vZGV8U3RyaW5nfE51bWJlcnxCb29sZWFuKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInF1ZXJ5XCI6IFwiXig/Om5vZGVRdWVyeXxub2Rlc1F1ZXJ5KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInByaW1hcnkta2V5d29yZFwiOiBcIl5yZXR1cm5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzZWNvbmRhcnkta2V5d29yZFwiOiBcIl4oPzppZnxlbHNlfHJlZHVjZXxldmVyeXxzb21lfGFzKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcIm51bGxcIjogXCJebnVsbFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImJvb2xlYW5cIjogXCJeKD86dHJ1ZXxmYWxzZSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJicmFja2V0XCI6IFwiXig/OlxcXFx7fFxcXFx9KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInNwZWNpYWxcIjogXCJeKD86IT18PT18IXw9fCx8O3xffCYmfFxcXFx8XFxcXHx8XFxcXCh8XFxcXCl8XFxcXFt8XFxcXF0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwibmFtZVwiOiBgXiR7TEFUSU59KyR7REVDSU1BTH0qYCxcclxuICB9LFxyXG4gIHtcclxuICAgIFwibnVtYmVyXCI6IGBeJHtERUNJTUFMfStgXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInVuYXNzaWduZWRcIjogXCJeW15cXFxcc10rXCJcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzO1xyXG4iXSwibmFtZXMiOlsiTEFUSU4iLCJERUNJTUFMIiwiZW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUNBOzs7ZUFBQTs7O0FBdkNBLElBQU1BLFFBQVEsdUJBQ1JDLFVBQVU7QUFFaEIsSUFBTUMsVUFBVTtJQUNkO1FBQ0UsUUFBUTtJQUNWO0lBQ0E7UUFDRSxTQUFTO0lBQ1g7SUFDQTtRQUNFLG1CQUFtQjtJQUNyQjtJQUNBO1FBQ0UscUJBQXFCO0lBQ3ZCO0lBQ0E7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNFLFFBQVEsQUFBQyxJQUFZRCxPQUFURCxPQUFNLEtBQVcsT0FBUkMsU0FBUTtJQUMvQjtJQUNBO1FBQ0UsVUFBVSxBQUFDLElBQVcsT0FBUkEsU0FBUTtJQUN4QjtJQUNBO1FBQ0UsY0FBYztJQUNoQjtDQUNEO0lBRUQsV0FBZUMifQ==