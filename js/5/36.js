/* 第一种方法，在<head></head>中加入以下类似代码：
         <meta http-equiv="Page-Enter" content="RevealTrans(duration=5,Transitionv=11)">
         http-equiv参数：
         "进入网页"（Page-Enter）、"离开网页"（Page-Exit）、"进入站点"（Site-Enter）、"离开站点"（Site-Exit）
         duration=时间
         Transitionv=方式
         Page-Enter
         说明：duration为页面切换的时间长度，3.000表示3秒钟，一般可以直接输入3便可；transition为切换效果，从1-23共22种不同的切换效果，其中23为随机效果。


         效果 　Content 　Transitionv
         盒状收缩 0　
         盒状展开 1
         圆形收缩 2　
         圆形展开 3
         向上擦除 4
         向下擦除 5
         向左擦除 6
         向右擦除 7
         垂直百页窗 8
         水平百页窗 9
         横向棋盘式 10
         纵向棋盘式 11
         溶解 12
         左右向中部收缩 13
         中部向左右展开 14
         上下向中部收缩 15
         中部向上下展开 16
         阶梯状向左下展开 17
         阶梯状向左上展开 18
         阶梯状向右下展开 19
         阶梯状向右上展开 20
         随机水平线 21
         随机垂直线 22
         随机 23
         */
//第二种方法 操控IE滤镜的方法，
if (!pageInOut.filters) return;
pageInOut.filters[0].Apply();
if (pageInOut.style.visibility == "visible") {
    pageInOut.style.visibility = "hidden";
    pageInOut.filters.revealTrans.transition = 23;
} else {
    pageInOut.style.visibility = "visible";
    pageInOut.filters[0].transition = 23;
}
pageInOut.filters[0].Play();