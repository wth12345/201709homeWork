var utils=(function () {
    /**
     *
     * @param arg
     * @returns {Array}
     */
    function listToArray(arg) {
        var ary=[];
        try{
            ary=[].slice.call(arg)
        }catch(e){
            for(var i=0;i<ary.length;i++){
                ary[i]=arg[i];
            }
        }
        return ary;
    }

    /**
     *
     * @param objStr
     * @returns {Object}
     */
    function toJSON(objStr) {
        return "JSON" in window?JSON.parse(objStr):eval("("+objStr+")");
    }

    /**
     *
     * @param ele  当前元素
     * @returns {{}} 距离body的上偏移和距离body的左偏移
     */
    function offset(ele) {
        var l=ele.offsetLeft;
        var t=ele.offsetTop;
        var p=ele.offsetParent;
        while (p!=document.body&&p){
            if(navigator.userAgent.indexOf("MSIE 8.0")==-1){
                l+=p.clientLeft;
                t+=p.clientTop
            }
            l+=p.offsetLeft;
            t+=p.offsetTop;
            p=p.offsetParent;
        }
        return {
            l:l,
            t:t
        }
    }
    function getCss(ele,attr){
        var res = null;
        if(typeof getComputedStyle =="function"){
            res = window.getComputedStyle(ele,null)[attr];
        }else{
            if(attr=="opacity"){
                res = ele.currentStyle.filter;
                var reg = /^alpha\(opacity\s*=\s*(\d+(?:\.\d+)?)\)$/;
                res = reg.test(res) ? RegExp.$1/100 : 1;

            }else{
                res =  ele.currentStyle[attr];
            }
        }
        var reg = /^[+-]?(?:\d+(?:\.\d+)?)(?:px|pt|rem|em)?$/i;
        return  reg.test(res)?parseFloat(res):res;
    }
    function win(attr,value){
        if(typeof  value =="undefined"){
            return document.documentElement[attr]||document.body[attr]
        }else{
            document.documentElement[attr] =value;
            document.body[attr] = value;
        }
    }
    return {
        listToArray:listToArray,
        toJSON:toJSON,
        offset:offset,
        getCss:getCss,
        win:win
    }
})()