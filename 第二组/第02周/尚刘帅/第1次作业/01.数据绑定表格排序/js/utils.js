var utils=(function () {
    function listToArray(likeAry) {
        var ary;
        try{
            ary=[].slice.call(likeAry);
        }catch(e){
            for(var i=0;i<likeAry.length;i++){
                ary.push(likeAry[i]);
            }
        }
        return ary;
    }

    function toJSON(jsonStr) {
        return 'JSON' in window? JSON.parse(jsonStr):eval('('+jsonStr+')');
    }

    return {
        listToArray:listToArray,
        toJSON:toJSON
    }
})();
