var orientationCall = [], //方向改变事件待执行的函数队
    orientation = (function() { //移动设备方向改变事件
        var o = ""; //待遍历的对象键
        window.addEventListener("orientationchange", function(event) { //检测浏览器的方向改变
            for (o in orientationCall) {
                orientationCall[i](); //运行待执行的函数
            }
        }, false);
    })();

function addOrientation(callFun) { //增加方向变换的回调队列
    orientationCall[orientationCall.length] = callFun; //推入回调
}
/*
 *移除浏览器地址栏
 * */
function clearUrl() {
    /*
     * 页面内容多，超过屏幕高度时，却会自动隐藏地址栏，
     * 目前网络上流行的是将当前页面的屏幕向上滚动，
     * 造成地址栏超出视野范围，就不会看到
     * */
    var scroll = function() {
        window.scrollTo(0, 1); // 将屏幕滚动到指定的位置
    };
    scroll(); //页面载入的时候运行
    addOrientation(scroll); //待方向变更的时候修改屏幕滚轴
}