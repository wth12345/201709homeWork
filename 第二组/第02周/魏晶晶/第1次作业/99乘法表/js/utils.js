var utilis=function () {
    function toJson(objstr) {
        return "JSON"in window?JSON.parse(objstr):eval("("+objstr+")")
    }
    return{
        toJson:toJson
    }

}()
