/**
 * 获取鼠标在页面上的位置
 * _e       触发的事件
 * left:鼠标在页面上的横向位置, top:鼠标在页面上的纵向位置
 */
var _mousepos = { //鼠标在页面上的位置
    "top": 0,
    "left": 0
},
    getMousePoint = function(_e) {
        var _body = document.body,
            _left = 0,
            _top = 0;
        //浏览器支持 pageYOffset, 那么可以使用pageXOffset 和 pageYOffset 获取页面和视窗之间的距离
        if (typeof window.pageYOffset != 'undefined') {
            _left = window.pageXOffset;
            _top = window.pageYOffset;
        }
        //如果浏览器指定了DOCTYPE并且支持compatMode
        else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
            _left = document.documentElement.scrollLeft;
            _top = document.documentElement.scrollTop;
        } else if (typeof _body != 'undefined') { //其他的如果浏览器支持document.body
            _left = _body.scrollLeft;
            _top = _body.scrollTop;
        }
        _left += _e.clientX;
        _top += _e.clientY;
        _mousepos.left = _left;
        _mousepos.top = _top;
        return _mousepos;
    },
    getAbsoluteLeft = function(_e) { //获取元素的绝对left
        var _left = _e.offsetLeft,
            _current = _e.offsetParent;
        while (_current !== null) {
            _left += _current.offsetLeft;
            _current = _current.offsetParent;
        }
        return _left;
    },
    getAbsoluteTop = function(_e) { //获取元素的绝对top
        var _top = _e.offsetTop,
            _current = _e.offsetParent;
        while (_current !== null) {
            _top += _current.offsetTop;
            _current = _current.offsetParent;
        }
        return _top;
    },
    isScrollBar = false, //是否开启滚动
    scrollBarLeft = 0, //拖拽的修正值
    scrollBarMaxLeft = 0, //left最大拖拽值
    scrollBarObj = null, //被拖拽的滚轴元素的对象
    scrollBarContent = null, //被拖动的内容元素
    scrollBarScale = 1, //转换比例
    scrollBar = function(options) { //初始化滚动条
        var _parent = options.scrolling.parentNode,
            parentWidth = _parent.offsetWidth,
            contentWidth = options.contentScroll.scrollWidth,
            _scrolling = options.scrolling,
            _scale = scrollBarScale = parentWidth / contentWidth,
            _scrollingWidth = parentWidth * _scale;
        scrollBarContent = options.contentScroll; //初始化内容元素对象
        scrollBarObj = _scrolling; //初始化变量差值
        _scrolling.style.width = _scrollingWidth + "px"; //初始化滚动条长度
        scrollBarMaxLeft = getAbsoluteLeft(_parent) + _parent.offsetWidth - _scrolling.offsetWidth - 10; //初始化最大left值
        _scrolling.onmousedown = function(event) { //开启滚动
            //获取拖拽对象的坐标
            event = event || window.event;
            var _pos = getMousePoint(event);
            isScrollBar = true;
            scrollBarLeft = _pos.left - getAbsoluteLeft(this);
        }
    },
    closeScrollBar = function() { //关闭滚动条
        isScrollBar = false;
    },
    moveScrollBar = function(event) { //移动滚动条
        if (isScrollBar) { //如果开启滚轴
            event = event || window.event; //获取拖拽对象的坐标
            var _pos = getMousePoint(event),
                _left = _pos.left - scrollBarLeft,
                cLeft = _left;
            if (_left < 0) {
                _left = 0;
                cLeft = 0;
            }
            //如果滚轴的left坐标大于最大值则修正
            if (_left > scrollBarMaxLeft) _left = scrollBarMaxLeft;
            if (cLeft > scrollBarMaxLeft + 10) cLeft = scrollBarMaxLeft + 10;
            scrollBarObj.style.left = _left + "px"; //设置滚轴层的left
            //设置内容层left变化
            scrollBarContent.style.left = -1 * cLeft / scrollBarScale + "px"
        }
    };
scrollBar({
    "contentScroll": document.getElementById("contentScroll"),
    "scrolling": document.getElementById("scrolling")
});
document.body.onmousemove = function(e) { //拖动层移动
    moveScrollBar(e); //用层实现滚动条
}
document.onmouseup = function(e) { //拖动结束
    closeScrollBar(e);
}