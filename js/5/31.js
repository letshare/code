function getURLArgs(e) { // 获取地址栏URL的参数
    var args = "空", //试着在浏览器添加参数
        _args = [];
    u = window.location.href,
    s = u.indexOf("?"),
    i = 0,
    l = 0,
    o = null;
    if (s != -1) { //如果不等于-1则存在参数
        args = u.substr(s + 1).split("&");
    }
    e.innerHTML = "参数以逗号分隔：" + args;
    l = args.length;
    for (; i < l; i++) {
        if (args[i]) {
            o = args[i].split("=");
            //相同的参数以后边添加的参数为主，会覆盖前面的参数
            _args[o[0]] = o[1];
        }
    }
    console.log(_args); //打印参数列表
    return _args;
}
//获取地址栏URL的参数
getURLArgs(document.getElementById("getURLArgs"));