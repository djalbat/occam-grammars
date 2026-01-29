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
        "comparison-operator": "^(?:!=|==)"
    },
    {
        "bitwise-operator": "^(?:\\|\\||&&)"
    },
    {
        "primitive": "^(?:null|true|false)"
    },
    {
        "bracket": "^(?:\\{|\\})"
    },
    {
        "special": "^(?:!|=|!=|==|,|;|_|\\(|\\)|\\[|\\])"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdXJ0bGUvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IExBVElOID0gXCJbXFxcXHB7U2NyaXB0PUxhdGlufV1cIixcclxuICAgICAgREVDSU1BTCA9IFwiWzAtOV1cIjtcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcbiAge1xyXG4gICAgXCJ0eXBlXCI6IFwiXig/Ok5vZGVzfE5vZGV8U3RyaW5nfE51bWJlcnxCb29sZWFuKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInF1ZXJ5XCI6IFwiXig/Om5vZGVRdWVyeXxub2Rlc1F1ZXJ5KVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInByaW1hcnkta2V5d29yZFwiOiBcIl5yZXR1cm5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzZWNvbmRhcnkta2V5d29yZFwiOiBcIl4oPzppZnxlbHNlfHJlZHVjZXxldmVyeXxzb21lfGFzKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImNvbXBhcmlzb24tb3BlcmF0b3JcIjogXCJeKD86IT18PT0pXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYml0d2lzZS1vcGVyYXRvclwiOiBcIl4oPzpcXFxcfFxcXFx8fCYmKVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcInByaW1pdGl2ZVwiOiBcIl4oPzpudWxsfHRydWV8ZmFsc2UpXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiYnJhY2tldFwiOiBcIl4oPzpcXFxce3xcXFxcfSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJzcGVjaWFsXCI6IFwiXig/OiF8PXwhPXw9PXwsfDt8X3xcXFxcKHxcXFxcKXxcXFxcW3xcXFxcXSlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJuYW1lXCI6IGBeJHtMQVRJTn0rJHtERUNJTUFMfSpgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJudW1iZXJcIjogYF4ke0RFQ0lNQUx9K2BcclxuICB9LFxyXG4gIHtcclxuICAgIFwidW5hc3NpZ25lZFwiOiBcIl5bXlxcXFxzXStcIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVudHJpZXM7XHJcbiJdLCJuYW1lcyI6WyJMQVRJTiIsIkRFQ0lNQUwiLCJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0Q0E7OztlQUFBOzs7QUExQ0EsSUFBTUEsUUFBUSx1QkFDUkMsVUFBVTtBQUVoQixJQUFNQyxVQUFVO0lBQ2Q7UUFDRSxRQUFRO0lBQ1Y7SUFDQTtRQUNFLFNBQVM7SUFDWDtJQUNBO1FBQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7UUFDRSxxQkFBcUI7SUFDdkI7SUFDQTtRQUNFLHVCQUF1QjtJQUN6QjtJQUNBO1FBQ0Usb0JBQW9CO0lBQ3RCO0lBQ0E7UUFDRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFLFdBQVc7SUFDYjtJQUNBO1FBQ0UsV0FBVztJQUNiO0lBQ0E7UUFDRSxRQUFRLEFBQUMsSUFBWUQsT0FBVEQsT0FBTSxLQUFXLE9BQVJDLFNBQVE7SUFDL0I7SUFDQTtRQUNFLFVBQVUsQUFBQyxJQUFXLE9BQVJBLFNBQVE7SUFDeEI7SUFDQTtRQUNFLGNBQWM7SUFDaEI7Q0FDRDtJQUVELFdBQWVDIn0=