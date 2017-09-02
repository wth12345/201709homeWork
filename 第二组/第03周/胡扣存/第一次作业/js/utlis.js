var utlis=function(){
    function listToArray(arg){
        var ary=[];
        try{
            ary=[].slice.call(arg);
        }catch(e){
            for (var i = 0; i < arg.length; i++) {
                ary[i]=arg[i];
            }
        }
        return ary;
    }
    function toJson(str){
        return "JSON" in window?JSON.parse(str):eval("("+str+")");
    }
    return {
        listToArray:listToArray,
        toJson:toJson
    }
}();