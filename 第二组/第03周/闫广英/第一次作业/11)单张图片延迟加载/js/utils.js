var utils = function () {
    function offSet(ele) {
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var p = ele.offsetParent;
        while (p) {
            if (!/ESIE 8\.0/.test(navigator.userAgent)) {
                l += p.clientLeft;
                t += p.clientTop;
            }
            l += p.offsetLeft;
            t += p.offsetTop;
            p = p.offsetParent;
        }
        return {
            l: l,
            t: t
        }
    }

    function win(attr,value) {
        if(typeof  value ==="undefined"){
            return document.documentElement[attr]||document.body[attr]
        }else{
            document.documentElement[attr] =value;
            document.body[attr] = value;
        }
    }



return{
    offSet:offSet,
    win:win
}
}();