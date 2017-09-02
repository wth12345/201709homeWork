
    var transfer = null;
    var xhr = new XMLHttpRequest();
    xhr.open("get", "json/data.json", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            transfer = utils.toJson(xhr.responseText)
        }
    };
    xhr.send(null);

    var oUl = document.getElementById("list");
    var str = "";
    for (var i = 0; i < transfer.length; i++) {
        str += "<li data-time='" + transfer[i]["time"] + "' data-price='" + transfer[i]["price"] + "' data-hot='" + transfer[i]["hot"] + "'>";
        str += "<img src='" + transfer[i]["img"] + "'>";
        str += "<span>" + transfer[i]["title"] + "</span>";
        str += "<span>" + transfer[i]["time"] + "</span>";
        str += "<span>" + "￥" + transfer[i]["price"] + "</span>";
        str += "<span>" + transfer[i]["hot"] + "</span>";
        str += "</li>";
    }
    oUl.innerHTML = str;



    var oTop=document.getElementById("top");
    var likeA=oTop.getElementsByTagName("a");
    for (var i=0;i<likeA.length;i++){
        likeA[i].flag=-1;
        likeA[i].index=i;
        likeA[i].onclick=function () {
            this.flag*=-1;
            for (var j=0;j<likeA.length;j++){
                if(this!=likeA[j]){
                    likeA[j].flag=-1;
                }
            }
            listSort.call(this);
        }
    }

    var oUl=document.getElementById("list");
    var oLis=oUl.getElementsByTagName("li");
    var ary=utils.listToArray(oLis);
    console.log(ary);

    function listSort() {
        console.log(this.index);
        var that=this;
        var ary1=["data-time","data-price","data-hot"];
        ary.sort(function (cur,next) {
            var newCur=cur.getAttribute(ary1[that.index]);
            var newNext=next.getAttribute(ary1[that.index]);
            newCur=newCur.replace(/-/g,"");
            newNext=newNext.replace(/-/g,"");
            return (newCur-newNext)*(that.flag);
        });
        var frg = document.createDocumentFragment();
        for (var i = 0; i < ary.length; i++) {
            frg.appendChild(ary[i]);
        }
        oUl.appendChild(frg);
    }


