var utils=function () {
    function listToArray(argu) {
        var ary=[];
        try{
            ary=[].slice.call(argu);
        }catch(e){
            for(var i=0;i<argu.length;i++){
                ary.push(argu[i]);
            }
        }
        return ary;
    }
    function toJson(jsonStr) {
        return 'JSON' in window? JSON.parse(jsonStr):eval('('+jsonStr+')');
    }

    return {
        listToArray:listToArray,
        toJson:toJson
    }
}();
