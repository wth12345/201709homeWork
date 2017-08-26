/**
 * Created by Administrator on 2017/8/23/023.
 */
 var utils=(function () {
    function listToArray(arg) {
        var ary = [];
        try {
             ary = [].slice.call(arg);
        } catch (e) {

            for (var i = 0; i < arg.length; i++) {
                ary[i] = arg[i];
            }
        }
        return ary;
    }
    function toJSON(objstr){
    //    var obj=null;
    //    try{
    //        JSON.parse(objstr);
    //    }catch(e){
    //        eval("("+objstr+")");
    //    }
    //    return obj;
    return "JSON"in window?JSON.parse(objstr):eval("("+objstr+")")
    }
return{
    listToArray:listToArray,
    toJSON:toJSON
}
})();

