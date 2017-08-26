//1.获取数据
var resData = null;
var xhr = new XMLHttpRequest();
xhr.open('get', 'json/data.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
        resData = utils.toJSON(xhr.responseText);
        console.log(xhr.responseText);
        console.log(resData);
    }
};
xhr.send(null);

//2.绑定数据
var oUl = document.getElementById('list');
var str = '';
for (var i = 0; i < resData.length; i++) {
    str += '<li>';
    console.log(resData[i]['img']);
    str += '<img src="' + resData[i]['img'] + '">';
    str += '<p>工号：' + resData[i]['id'] + '</p>';
    str += '<p>姓名：' + resData[i]['name'] + '</p>';
    str += '<p>时间：' + resData[i]['time'] + '</p>';
    str += '<p>薪水：￥' + resData[i]['salary'] + '</p>';
    str += '<p>支持度：' + resData[i]['hot'] + '</p>';
    str += '</li>';

}
oUl.innerHTML = str;