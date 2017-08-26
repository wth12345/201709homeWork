/**
 * Created by Administrator on 2017/8/25 0025.
 */
var utils = (function () {


    function toJSON(strJson) {
        return "JSON" in window ? JSON.parse(strJson) : eval("(" + strJson + ")")
    }


    return {
        toJSON: toJSON
    }


})();
