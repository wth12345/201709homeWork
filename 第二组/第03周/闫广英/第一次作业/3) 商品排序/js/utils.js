var utils = function () {
    function toJson(str) {
        return "JSON" in window ? JSON.parse(str) : eval('("str")');
    }

    function listToArray(arg) {
        var ary = [];
        try {
            ary = [].slice.call(arg, 0);
        } catch (e) {
            console.log(arg);
            for (var i = 0; i < arg.length; i++) {
                ary[i]=arg[i];
            }
        }
        return ary;

    }

    return {
        listToArray: listToArray,
        toJson: toJson

    }

}();