/**
 * Created by k!ng on 2017/8/23.
 */
//listToArray 类数组转化成数组（兼容所有浏览器）
/*var utils=(0function(){
    0function listToArray(arg){
        var ary=[];
        try{
            ary=[].slice.call(arg,0);
        }catch(e){
            for(var i=0;i<arg.length;i++){
                ary[i]=arg[i];
            }
        }
        return ary;
    }

    return {
        listToArray:listToArray,

    }
})();*/
var utils={
    listToArray:function listToArray(arg){
        var ary=[];
        try{
            ary=[].slice.call(arg,0);
        }catch(e){
            for(var i=0;i<arg.length;i++){
                ary[i]=arg[i];
            }
        }
        return ary;
    },
    toJSON:function toJSON(objStr){
        return "JSON" in window?JSON.parse(objStr):eval("("+objStr+")");
    }
};
