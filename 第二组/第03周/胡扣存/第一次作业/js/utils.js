var utils=function(){
    function getCss(ele,attr){
        var res=null;
        if(typeof getComputedStyle=="function"){
            res=window.getComputedStyle(ele,null)[attr];
        }else{
            if(attr=="opacity"){
                res=ele.currentStyle.filter;
                var reg=/^alpha\(opacity\s*=\s*(\d(?:\.\d+)?)\)$/;
                res=reg.test(res)?RegExp.$1/100:res;
            }else{
                res=ele.currentStyle[attr];
            }
        }
        var reg1=/^[-+]?(?:\d(?:\.\d+)?)(?:px|pt|rem|em)?$/i;
        return reg1.test(res)?parseFloat(res):res;
    }
    function getOffset(ele) {
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var p = ele.offsetParent;
        while (p) {
            if (navigator.userAgent.indexOf("MSIE 8.0") == -1) {
                l += p.clientLeft;
                t += p.clientTop;
            }
            l += p.offsetLeft;
            t += p.offsetTop;
            p = p.offsetParent;
        }
        return {
            l:l,
            t:t
        }
    }
    function  win(attr,value){
        if(typeof value == "undefined"){
            return document.documentElement[attr]||document.body[attr];
        }else{
            document.documentElement[attr]=value;
            document.body[attr]=value;
        }
    }
    return{
        getOffset:getOffset,
        getCss:getCss,
        win:win
    }
}();
