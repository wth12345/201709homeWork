var utils=(function () {
    function listToArray(arg) {
        var ary=[];
        try{
            ary=[].slice.call(arg);
        }catch(e){
            for (var i = 0; i < ary.length; i++) {
                ary[i]=arg[i];

            }
        }
       return ary;
    }
    function toJSON(objStr) {
        return "JSON" in window?JSON.parse(objStr):eval("("+objStr+")")
    }

    return {
        listToArray:listToArray,
        toJSON:toJSON
    }
})();

