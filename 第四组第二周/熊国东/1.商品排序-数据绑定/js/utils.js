var utils = (function () {
    /**
     * 将类数组装换成数组方法
     * @param arg 要传入的类数组
     * @returns {Array} 转换成的数组
     */
    function listToArray(arg) {
        var ary = [];
        try {
            ary = [].slice.call(arg);//标准浏览器转换类数组方式
        } catch (e) {
            for (var i = 0; i < arg.length; i++) {//IE6~8转换类数组方式
                ary[ary.length] = arg[i];
            }
        }
        return ary;
    }

    /**
     * 将JSON字符串转换成JSON格式数据
     * @param objStr 需要转换成数据的字符串
     * @returns {Object} 返回的JSON对象
     */
    function toJSON(objStr) {
        /*var obj=null;
        try{
            obj= Json.parse(objStr);
        }catch(e){
            obj= eval("("+objStr+")");
        }
        return obj;*/
        //还可以用三元运算符
        return "JSON" in window ? JSON.parse(objStr) : eval("(" + objStr + ")");
    }

    return {
        listToArray: listToArray,
        toJSON:toJSON
    }
})();



