utils = (function () {
    function listToArray(arg) {
        var ary = [];
        if ([].slice) {
            ary = [].slice.call(arg);
        } else {
            for (var i = 0; i < arg.length; i++) {
                ary[ary.length] = arg[i];
            }
        }
        return ary;
    }

    function toJSON(str) {
        return window.JSON ? JSON.parse(str) : eval("(" + str + ")");
    }

    function getCss(ele, attr) {
        var res = null;
        if (window.getComputedStyle) {
            res = window.getComputedStyle(ele, null)[attr];
        } else {
            if (attr == "opacity") {
                res=ele.currentStyle[attr];
                var reg = /^alpha\(opacitu\s*=\s*(\d+(?:\.\d+)?)\)$/i;
                res=reg.test(res) ? RegExp.$1 / 100 : 1;
            } else {
                res = ele.currentStyle[attr];
            }
        }
        reg = /^-?\d+(?:\.\d+)?(?:px|em|rem|pt)?$/i;
        return reg.test(res) ? parseFloat(res) : res;
    }
    function offset(ele) {
        var top=ele.offsetTop;
        var left=ele.offsetLeft;
        var p=ele.offsetParent;
        if(p!==document.body&&p){
            if(window.navigator.userAgent.indexOf("MSIE 8.0")===-1){
                top+=p.clientTop;
                left+=p.clientLeft;
            }
            top+=p.offsetTop;
            left+=p.offsetLeftl
        }
        return {
            top:top,
            left:left
        }
    }
    function win(attr,value) {
         if(!value){
             return document.documentElement[attr]||document.body[attr];
         }else{
             document.documentElement[attr]=value;
             document.body[attr]=value;
         }
    }

    return {
        listToArray:listToArray,
        toJSON:toJSON,
        getCss:getCss,
        offset:offset,
        win:win
    }











})();