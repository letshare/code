function updateWin(str) { //最小化、最大化、关闭窗口
    var _w = 0,
        _h = 0;
    //IE支持,其它浏览器只支持新打开窗口的大小设置
    if (str == "max") {
        _w = screen.availWidth;
        _h = screen.availHeight;
    }
    if (str == "min") {
        //方法1    updateWinMinIE.Click();
        /*方法2 各种浏览器对 window.resizeTo() 方法 与 window.moveTo() 支持程度不一样导致结果不一样，
                 大多是出于用户体验及安全的考虑，截止2014年 1月份---Chrome、Firefox不支持此方法，ie支持，其它浏览器没测试过感兴趣的朋友可以测测*/
        _w = 1;
        _h = 1;
    }
    if (str == "close") { //关闭窗口
        /* 只对 ie 与Chrome起作用  ，Firefox需要特殊配置
                 * 1.在Firefox地址栏里输入 about:config
                 2.在配置列表中找到 dom.allow_scripts_to_close_windows
                 3.点右键的选切换把上面的false修改为true即可，默认是false，是为了防止脚本乱关窗口
                 FireFox中做如此设置以后，直接使用“window.close()”即可对窗口关闭。
                 * */
        window.open('', '_self', '');
        window.close();
    }
    window.moveTo(0, 0);
    window.resizeTo(_w, _h);
}
document.getElementById("updateWinMin").onclick = function() { //最小化
    updateWin("min");
}
document.getElementById("updateWinMax").onclick = function() { //最大化
    updateWin("max");
}
document.getElementById("updateWinClose").onclick = function() { //关闭窗口
    updateWin("close");
}