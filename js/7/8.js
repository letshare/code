function backAd(e){//    定时关闭的背投广告===========================start

            var time = 5000, //间隔多久关闭
                    timeID = -1;//间时调用线程

            timeID=setInterval(function(){

                if(time == 0){//如果时间等于0，则关闭背投广告，停止调用
                    e.style.display = "none";//隐藏元素
                    clearInterval(timeID);//关闭调用
                }

                time-=1000;//递减时间
                e.innerHTML = (time/1000) + "秒后关闭背投广告";//修改多少秒关闭广告
            },1000)
        }
        document.getElementById("backAd").onclick = function(){ //定时关闭的背投广告===========start
            backAd(document.getElementById("backAd"));
        }