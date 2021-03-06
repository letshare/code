/*
 * 如果tr存在则是新增操作，否则为删除操作
 * 当为删除操作的时候，参数 --- table为表格的table对象，num为被删除的单元行序列数
 * 当为新增行操作的时候，参数 ---  table为表格的table对象，num是新增单元行的位置，tr为新增行的单元格的字符串型数组，
 * */
var trAct = function(table, num, tr) {
    //如果num不存在则执行删除操作
    if (!tr) {
        var _num = table.rows[num];
        //如果被删除的行对象存在，则删除 ，返回true
        if (_num) {
            //js的原生函数删除行
            table.deleteRow(_num);
            return true;
        } else {
            //如果删除的对象不存在，则删除失败，返回false
            return false;
        }
    } else {
        //在指定的位置创建行对象
        var r = table.insertRow(num),
            i = 0,
            //待插入的数据长度
            l = tr.length;
        //遍历待插入数据
        for (; i < l; i++) {
            //插入新单元格数据
            r.insertCell(i).innerHTML = tr[i];
        }
        //新增成功返回 true
        return true;
    }
},
    //当前的页数
    currentPage = 1,
    //table对象
    table = null,
    //当前页的UI显示
    currentPageUi = null,
    //所有页的UI显示
    allPage = null,
    //更新表格UI
    updateUi = function() {
        //更新表格的内容Ui
        tableUi();
        //设置当前页数
        currentPageUi.innerHTML = currentPage;
        //设置总页数
        allPage.innerHTML = allPages;
    },
    //模拟后端返回的数据结构，以供分页使用
    getPageData = function() {
        return [
            ["第" + currentPage + "页内容", "第" + currentPage + "页内容"], ["第" + currentPage + "页内容", "第" + currentPage + "页内容"]]
    },
    //模拟所有页数
    allPages = 5,
    //初始化分页
    tablePaging = function(args) {
        table = args.tablePaging;
        currentPageUi = args.currentPage;
        allPage = args.allPage;
        nextPaging(args.nextPaging);
        prevPaging(args.prevPaging);
        updateUi();
    },
    //分页的下一页
    nextPaging = function(e) {
        e.onclick = function() {
            currentPage++;
            //如果页数高于最大页，则修改页数为最大页，并阻止程序流
            if (currentPage > allPages) {
                currentPage = allPages;
                return;
            }
            //更新ui
            updateUi();
        }
    },
    //分页的上一页
    prevPaging = function(e) {
        e.onclick = function() {
            currentPage--;
            //如果页数低于1页，则修改页数为1，并阻止程序流
            if (currentPage < 1) {
                currentPage = 1;
                return;
            }
            //更新ui
            updateUi();
        }
    },
    //更新当前页数的表格数据
    tableUi = function() {
        //返回模拟的后台数据
        var d = getPageData(),
            _dataI = null,
            l = d.length,
            i = 0;
        //清空表格数据，由于数据结构没变，所有清空数据与插入数据都是2
        for (; i < l; i++) {
            //由于节点的动态改变，不断减少，所以删除的节点永远是第一个
            trAct(table, 0);
        }
        //插入表格数据
        for (i = 0; i < l; i++) {
            _dataI = d[i];
            //调用前几一节的API增加td内容
            trAct(table, 0, [
                _dataI[0],
                _dataI[1]
            ]);
        }
    };
//表格分页**********************************************
tablePaging({
    "tablePaging": document.getElementById("tablePaging"),
    "currentPage": document.getElementById("currentPage"),
    "allPage": document.getElementById("allPage"),
    "nextPaging": document.getElementById("nextPaging"),
    "prevPaging": document.getElementById("prevPaging")
});