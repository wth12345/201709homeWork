var utlis=function (){
    function listToArray(arg){
        var ary=[];
        try{
            ary=[].slice.call(arg);/*标准浏览器模式下*/
        }catch (e){/*处理ie6~8兼容性问题的方法*/
            for (var i = 0; i < ary.length; i++) {
                ary[i]=arg[i];
            }
        }
        return ary;
    }
    function toJson(strobj){
        return "JSON" in window?JSON.parse(strobj):eval('("+str+")');
    }
    return {
        listToArray:listToArray,
        toJson:toJson
    };
}();


//var utlis=(function (){
//    function listToArray(arg){
//        var ary=[];
//        try{
//            ary=[].slice.call(arg);/*标准浏览器模式下*/
//        }catch (e){/*处理ie6~8兼容性问题的方法*/
//            for (var i = 0; i < ary.length; i++) {
//                ary[i]=arg[i];
//            }
//        }
//        return ary;
//    }
//    return {listToArray:listToArray};
//})();




