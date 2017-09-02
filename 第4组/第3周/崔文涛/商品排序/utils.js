/**
 * Created by Administrator on 2017/9/1/001.
 */
var utils=(function () {
     function listToArray(arg){
         var ary=[];
         try{
             ary=[].slice.call(arg);
         }catch(e){
             for(var i=0;i<arg.length;i++){
                 ary[i]=arg[i];
             }
         }
         return ary;
     }
    function toJson(object){
        return "JSON" in window?JSON.parse(object):eval("("+object+")");
    }
    return{
        listToArray:listToArray,
        toJson:toJson
    }
})();