var utilis=function () {
    function listToArray(arg) {
        var ary=[];
        try{
            ary=[].slice.call(arg)
        }catch (e){
            for (var i = 0; i < arg.length; i++) {
                ary[i]= arg[i];
            }
        }
        return ary;

    }
    function toJson(objstr) {
        // var obj=null;
        // try{
        //     obj=JSON.parse(objstr)
        // }catch(e){
        //     obj=eval("("+str+")")
        // }
        // return obj

        return "JSON" in window?JSON.parse(objstr):eval("("+objstr+")")
    }

    return{
        listToArray:listToArray,
        toJson:toJson
    }

}();

