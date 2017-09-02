var utils=function () {
    /**
     *
     * @param likeAry
     * @returns {Array}
     */
     function  listToArray(likeAry) {
         var ary=[];
         try{
             ary=[].slice.call(likeAry)
         }catch (e){
             for(var i=0;i<likeAry.length;i++){
                 ary[ary.length]=likeAry[i]
             }
         }
         return ary
     }

    /**
     *
     * @param str
     * @returns {Object}
     */
     function  toJson(str) {
         return "JSON" in window?JSON.parse(str):eval("("+str+")")
     }
     return{
         listToArray:listToArray,
         toJson:toJson
     }
}();