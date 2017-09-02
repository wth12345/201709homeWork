var utils={
    listToArray:function listToArray(arg){
        var ary=[];
        try{
            ary=[].slice.call(arg);
        }catch(e){
            for(var i=0;i<arg.length;i++){
                ary.push=arg[i];
            }
        }
        return ary;
    },
    toJSON:function toJSON(str){
        return "JSON" in window?JSON.parse(str):eval("("+str+")");
    }
};
