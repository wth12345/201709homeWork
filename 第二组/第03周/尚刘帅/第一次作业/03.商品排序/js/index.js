(function () {
    var resData = null;
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'json/data.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            resData = utils.toJson(xhr.responseText);
            console.log(resData);
        }
    };
    xhr.send(null);

    var nav = document.getElementById('nav');
    var list = document.getElementById('list');
    var str = '';
    for (var i = 0; i < resData.length; i++) {
        str = str + '<li data-id="' + resData[i].id + '" data-time="' + resData[i].time + '" data-salary="' + resData[i].salary + '" data-hot="' + resData[i].hot + '">';
        str += '<img src="' + resData[i].img + '">';
        str += '<p>ID：' + resData[i].id + '</p>';
        str += '<p>时间：' + resData[i].time + '</p>';
        str += '<p>价格：￥' + resData[i].salary + '</p>';
        str += '<p>支持度：' + resData[i].hot + '</p>';
        str += '</li>';
    }
    list.innerHTML = str;
})();


(function () {
    var nav = document.getElementById('nav');
    var list = document.getElementById('list');
    var oNavLis = nav.getElementsByTagName('li');
    var oListLis = list.getElementsByTagName('li');
    var aryLis = utils.listToArray(oListLis);
    for (var i = 0; i < oNavLis.length; i++) {
        oNavLis[i].index = i;
        oNavLis[i].flag = -1;
        oNavLis[i].onclick = function () {
            for (var j = 0; j < oNavLis.length; j++) {
                    if (this.index !== j) {
                        oNavLis[j].flag = -1;
                    }
            }
            this.flag *= -1;
            listSort.call(this);
        };
    }

    function listSort() {
        var that=this;
        console.log(that.flag);
        var aryData = ['data-id', 'data-time', 'data-salary', 'data-hot'];
        aryLis.sort(function (a, b) {
            a = a.getAttribute(aryData[that.index]);
            b = b.getAttribute(aryData[that.index]);
            a = a.replace(/-/g, '');
            b = b.replace(/-/g, '');
            return (a - b) * that.flag;
        });
        var frag = document.createDocumentFragment();
        for (var i = 0; i < aryLis.length; i++) {
            frag.appendChild(aryLis[i]);
        }
        list.appendChild(frag);
    }
})();
