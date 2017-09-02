var utilis=function () {
   function toArray(likeArray) {
       var ary=[];
       try{
           ary=[].slice.call(likeArray,0)
       }catch(e){
           for (var i = 0; i < likeArray.length; i++) {

               ary[ary.length]=likeArray[i]

           }
       }
       return ary

   }
   function toJson(str) {
       return "JSON" in window?JSON.parse(str):eval("("+str+")")

   }
   return{
       toArray:toArray,
       toJson:toJson
   }
}()