var utils = (function (){
    function listToArray(arg) {
        var ary = [];
        try{
            ary = [].slice.call(arg);
        }catch(e){
            for(var i = 0;i < arg.length;i ++){
                ary[i] = arg[i]
            }
        }
        return ary;
    }
    function toJSON(jsonStr){
        // var jsonAry = null;
        // try{
        //     jsonAry = JSON.parse(jsonStr);
        // }catch(e){
        //     jsonAry = eval("("+jsonStr+")");
        // }
        // return jsonAry;
        return "JSON" in window ? JSON.parse(jsonStr) : eval("("+jsonStr+")");
    }
    return {
        listToArray : listToArray,
        toJSON : toJSON
    };

})();