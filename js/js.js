
$(function () {
echarts_1();
// echarts_2();
echarts_4();
// echarts_31();
// echarts_32();
//echarts_33();
echarts_5();
echarts_6();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

    var SumconfirmedNum=[];
    var SumcuresNum=[];
    var SumdeathsNum=[];
    var confirmed=0;
    var cures=0;
    var death=0;

    $.ajax({
            // type: "post",
            async: true,
            url: './data/chinese.json',
            data: {},
            dataType: "json",
            success: function (result) {
                // console.log(result);
                for (var i = result.world[0].series.length - 1; i >= 0; i--) {
                    for(var j=0;j<208;j++){
                        //某一天所有国家的数据
                        confirmed += result.world[j].series[i].confirmedNum;
                        cures += result.world[j].series[i].curesNum;
                        death += result.world[j].series[i].deathsNum;
                    }
                    SumconfirmedNum.push(confirmed);
                    SumcuresNum.push(cures);
                    SumdeathsNum.push(death);
                }
                var Scon = 0;
                var Scur = 0;
                var Sdea = 0;
                // for(var a = 0;a<SumconfirmedNum.length;a++)
                // {
                //     Scon += SumconfirmedNum[a];
                //     Scur += SumcuresNum[a];
                //     Sdea += SumdeathsNum[a];
                // }

                var sum1=[];
                var sum2=[];
                var sum3=[];
                var zoom = 40;
                for(var i=1;i<89;i++){
                    // sum1[i] = zoom*(SumconfirmedNum[i+1] -SumconfirmedNum[i])/Scon;
                    // sum2[i] = zoom*(SumcuresNum[i+1] -SumcuresNum[i])/Scur;
                    // sum3[i] = zoom*(SumdeathsNum[i+1] -SumdeathsNum[i])/Sdea;
                    sum1[i]=Math.pow(7,-(SumconfirmedNum[i] -SumconfirmedNum[i+1])/(SumconfirmedNum[i] -SumconfirmedNum[i-1]));
                    sum2[i]=Math.pow(5,-(SumcuresNum[i] -SumcuresNum[i+1])/(SumcuresNum[i] -SumcuresNum[i-1]));
                    sum3[i]=Math.pow(4,-(SumdeathsNum[i] -SumdeathsNum[i+1])/(SumdeathsNum[i] -SumdeathsNum[i-1]));
                }
                console.log(sum1) ;
                console.log(sum2) ;

                console.log(sum3) ;


                function getVirtulData(year,x) {
                    year = year || '2021';
                    var date = +echarts.number.parseDate(year + '-01-01');
                    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
                    var dayTime = 3600 * 24 * 1000;
                    var data1 = [];
                    var data2 = [];
                    var data3 = [];
                    ;
                    var n;
                    for (var time = date,n=109; time < end; time += dayTime,n--) {
                        if (n > 89) {
                            data1.push([
                                echarts.format.formatTime('yyyy-MM-dd', time),
                                0
                            ]);
                            data2.push([
                                echarts.format.formatTime('yyyy-MM-dd', time),
                                0
                            ]);
                            data3.push([
                                echarts.format.formatTime('yyyy-MM-dd', time),
                                0
                            ]);
                        }


                        if (89 >= n > 0) {
                            data1.push([
                                echarts.format.formatTime('yyyy-MM-dd', time),
                                sum1[n]
                            ]);
                            data2.push([
                                echarts.format.formatTime('yyyy-MM-dd', time),
                                sum2[n]
                            ]);
                            data3.push([
                                echarts.format.formatTime('yyyy-MM-dd', time),
                                sum3[n]
                            ]);
                        }
                        if(n<=0){
                            data1.push([
                                echarts.format.formatTime('yyyy-MM-dd', time),
                                sum1[1]
                            ]);
                            data2.push([
                                echarts.format.formatTime('yyyy-MM-dd', time),
                                sum2[1]
                            ]);
                            data3.push([
                                echarts.format.formatTime('yyyy-MM-dd', time),
                                sum3[1]
                            ]);

                        }
                    }

                    if(x===0){return data1};
                    if(x===1){return data2};
                    if(x===2){return data3};

                };

                var data1 = getVirtulData(2020,0);
                var data2 = getVirtulData(2020,1);
                var data3 = getVirtulData(2020,2);

                console.log(data1);


                myChart.setOption ({
                    backgroundColor: 'rgba(11,32,113,0.5)',

                    // title: {
                    //     top: 10,
                    //     text: '世界新冠疫情新增变化率',
                    //     left: 'center',
                    //     textStyle: {
                    //         color: '#fff'
                    //     }
                    // },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '30',
                        left: '100',
                        data: ['确诊', '治愈','死亡'],
                        textStyle: {
                            color: '#fff'
                        }
                    },//标题图例部分
                    calendar: [{
                        top: 80,
                        left: 'center',
                        range: ['2020-01-21', '2020-02-29'],
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#000',
                                width: 4,
                                type: 'solid'
                            }
                        },
                        yearLabel: {
                            formatter: 'jan-feb',
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        itemStyle: {
                            color: '#323c48',
                            borderWidth: 1,
                            borderColor: '#111'
                        }
                    },
                        {
                            top: 250,
                            left: 'center',
                            range: ['2020-03-01', '2020-03-31'],
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#000',
                                    width: 4,
                                    type: 'solid'
                                }
                            },
                            yearLabel: {
                                formatter: 'March',
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            itemStyle: {
                                color: '#323c48',
                                borderWidth: 1,
                                borderColor: '#111'
                            }
                        },
                        {
                            top: 440,
                            left: 'center',
                            range: ['2020-04-01', '2020-04-21'],
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#000',
                                    width: 4,
                                    type: 'solid'
                                }
                            },
                            yearLabel: {
                                formatter: ' April',
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            itemStyle: {
                                color: '#323c48',
                                borderWidth: 1,
                                borderColor: '#111'
                            }
                        }],//三个日历表
                    series: [
                        {
                            name: '确诊',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            data: data1,
                            symbolSize: function (val) {
                                return val[1];
                            },
                            itemStyle: {
                                color: '#c23531',
                            },
                        },
                        {
                            name: '确诊',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            calendarIndex: 1,
                            data: data1,
                            symbolSize: function (val) {
                                return val[1];
                            },
                            itemStyle: {
                                color: '#c23531'
                            }
                        },
                        {
                            name: '确诊',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            calendarIndex: 2,
                            data: data1,
                            symbolSize: function (val) {
                                return val[1];
                            },
                            itemStyle: {
                                color: '#c23531'
                            }
                        },
                        //确诊数据

                        {
                            name: '治愈',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            data: data2,
                            symbolSize: function (val) {
                                return val[1] ;
                            },
                            itemStyle: {
                                color: '#00d887'
                            }
                        },
                        {
                            name: '治愈',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            calendarIndex: 1,
                            data: data2,
                            symbolSize: function (val) {
                                return val[1] ;
                            },
                            itemStyle: {
                                color: '#00d887'
                            }
                        },
                        {
                            name: '治愈',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            calendarIndex: 2,
                            data: data2,
                            symbolSize: function (val) {
                                return val[1] ;
                            },
                            itemStyle: {
                                color: '#00d887'
                            }
                        },
                        //治愈数据

                        {
                            name: '死亡',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            data: data3,
                            symbolSize: function (val) {
                                return val[1] ;
                            },
                            itemStyle: {
                                color: '#251fc4'
                            }
                        },
                        {
                            name: '死亡',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            calendarIndex: 1,
                            data: data3,
                            symbolSize: function (val) {
                                return val[1] ;
                            },
                            itemStyle: {
                                color: '#251fc4'
                            }
                        },
                        {
                            name: '死亡',
                            type: 'scatter',
                            coordinateSystem: 'calendar',
                            calendarIndex: 2,
                            data: data3,
                            symbolSize: function (val) {
                                return val[1] ;
                            },
                            itemStyle: {
                                color: '#251fc4'
                            }
                        },//死亡数据

                    ]
                });

            }




        },

    );
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
       
        type: 'bar',
        data: [1,1,1,1,1,1],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#27d08a',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
		
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例

        var myChart = echarts.init(document.getElementById('echart5'));

        option1 = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 10,
                data: []
            },


            series: [

            ]
        };

        var country_name5 = [];
        var num_s = [];



        $.ajax({
            // type: "post",
            async: true,
            url: './data/chinese.json',
            data: {},
            dataType: "json",
            success: function (result) {
                console.log(result.world[0].series[0].confirmedNum)
                for (var i = 0; i < result.world.length; i++) {
                    country_name5.push(result.world[i].name);
                }
                // option.legend.data.push(country_name5);
                console.log(country_name5)

                for (var j = 0; j < result.world[0].series.length-30; j++) { // 日期循环   90
                    num_s = [];

                    for (var k = 0; k < result.world.length; k++) {  // 国家循环
                        var tem = {
                            value: result.world[k].series[j].confirmedNum,
                            name: result.world[k].name
                        }
                        // console.log(tem)
                        num_s.push(tem)
                    }
                    option1.series.push({

                        ame: '感染国家人数比例',
                        type: 'pie',
                        radius: [20+1.5*j, 25+1.5*j],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '10',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: num_s

                    })
                }
                console.log(num_s)
                myChart.setOption(option1);

            },
            error: function (errorMsg) {
                alert("图表请求数据失败!");
                myChart.hideLoading();
            }
        })


        // 使用刚指定的配置项和数据显示图表。

        // window.addEventListener("resize",function(){
        //     myChart.resize();
        // });
    }

    function echarts_4(str) {
        var myChart = echarts.init(document.getElementById('echart4'));
        myChart.setOption({
            tooltip: {},
            legend: {
                data: ['confirmedNum', 'curesNum', 'deathsNum'],
                textStyle:{
                    color:'#a8aab0'
                }
            },
            xAxis: {
                data: [],
                axisLabel:
                    {
                        textStyle:{
                            color:'#a8aab0'
                        }
                    }
            },
            yAxis: {
                axisLabel:
                    {
                        textStyle:{
                            color:'#a8aab0'
                        }
                    }
            },
            series: [{
                name: "",
                type: 'line',
                data: []
            }]
        });

        myChart.showLoading();
        var name2 = ['confirmedNum', 'curesNum', 'deathsNum'];
        var date = [];
        var nums1 = [];
        var nums2 = [];
        var nums3 = [];
        var world_date=[];
        var world_num=0;
        var worldall_num1=0;
        var worldall1=[];
        var worldall_num2=0;
        var worldall2=[];
        var worldall_num3=0;
        var worldall3=[];
        mycolor=['#ff0a0a','#1225f5','#1cf50c']
        $.ajax({
            // type: "post",
            async: true,
            url: 'data/chinese.json',
            data: {},
            dataType: "json",
            success: function (result) {
                console.log(result);
                if (result) {
                    if(str<500) {
                        for (var i = result.world[str].series.length - 1; i >= 0; i--) {
                            nums1.push(result.world[str].series[i].confirmedNum);
                            nums2.push(result.world[str].series[i].curesNum);
                            nums3.push(result.world[str].series[i].deathsNum);
                            date.push(result.world[str].series[i].date);
                        }
                        var sales_data = [];
                        sales_data.push(nums1);
                        sales_data.push(nums2);
                        sales_data.push(nums3);
                        var s_data = [];
                        for (var j = 0; j < 3; j++) {
                            s_temp = {
                                name: name2[j],
                                type: "line",
                                symbol: 'point',
                                data: sales_data[j]
                            };
                            s_data.push(s_temp)
                        }
                        myChart.hideLoading();
                        myChart.setOption({
                            xAxis: {
                                data: date
                            },
                            series: s_data
                        });
                    }else{
                        for (var i = result.world[0].series.length - 1; i >= 0; i--) {
                            world_date.push(result.world[0].series[i].date);
                            for (j in result.world) {
                                worldall_num1 = worldall_num1 + result.world[j].series[i].confirmedNum;
                                worldall_num2 = worldall_num2 + result.world[j].series[i].curesNum;
                                worldall_num3 = worldall_num3 + result.world[j].series[i].deathsNum;
                            }
                            worldall1.push(worldall_num1);
                            worldall2.push(worldall_num2);
                            worldall3.push(worldall_num3);
                            worldall_num1=0;
                            worldall_num2=0;
                            worldall_num3=0;
                        }
                        var sales_data = [];
                        sales_data.push(worldall1);
                        sales_data.push(worldall2);
                        sales_data.push(worldall3);
                        var s_data = [];
                        for (var j = 0; j < 3; j++) {
                            s_temp = {
                                name: name2[j],
                                type: "line",
                                symbol: 'point',
                                data: sales_data[j],
                                itemStyle: {
                                    normal: {
                                        color: mycolor[j], // 折线条的颜3
                                        borderColor:  mycolor[j], // 拐点边框颜色
                                        areaStyle: {
                                            type: 'default',
                                            opacity: 0.4
                                        }
                                    }
                                }
                            };
                            s_data.push(s_temp)
                        }
                        myChart.hideLoading();
                        myChart.setOption({
                            xAxis: {
                                data: world_date,
                                type:'category',
                                axisLabel :{
                                    rotate:-90,
                                    fontSize:8
                                },
                                tooltip:{
                                    trigger:'axis'
                                },
                                axisPointer:{
                                    show:true,
                                    color:"#000",
                                }
                            },
                            dataZoom:[{　type: 'slider',//图表下方的伸缩条
                                show : true, //是否显示
                                realtime : true, //拖动时，是否实时更新系列的视图
                                start : 0, //伸缩条开始位置（1-100），可以随时更改
                                end : 100, //伸缩条结束位置（1-100），可以随时更改
                            }],
                            series: s_data
                        });
                    }
                }

            },
            error: function (errorMsg) {
                alert("图表请求数据失败!");
                myChart.hideLoading();
            }
        })
    }
function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

    //跳转代码
    myChart.on('click', function(params) {
        console.log(params.name);
        window.open(params.data.url);
        // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.value));
    });

    var colorList = [[
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
        '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ],
        [
            '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
            '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
            '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
            '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
        ],
        [
            '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
            '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
            '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
            '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
        ]][2];

    option = {
        // 图表标题
        title: {
            show:true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
            text: '"抗疫"主题图谱',//主标题文本，'\n'指定换行
            x: 'center',        // 水平安放位置，默认为左对齐，可选为：
            // 'center' ¦ 'left' ¦ 'right'
            // ¦ {number}（x坐标，单位px）
            y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
            // 'top' ¦ 'bottom' ¦ 'center'
            // ¦ {number}（y坐标，单位px）
            //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',    // 标题边框颜色
            borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
            padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
                                    // 接受数组分别设定上右下左边距，同css
            itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
            textStyle: {
                fontSize: 18,
                fontWeight: 'bolder',
                color: '#333'        // 主标题文字颜色
            },
            subtextStyle: {
                color: '#aaa'        // 副标题文字颜色
            }
        },
        /*backgroundColor: '#fff',*/
        tooltip: {},
        animationDurationUpdate: function(idx) {
            // 越往后的数据延迟越大
            return idx * 100;
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [{
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 500,
                edgeLength: 10
            },
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            data: [{
                "name": "新冠肺炎愈后一般6个月内不会再得",
                "value": 2373,
                "symbolSize": 48,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[0],
                        "color": colorList[0]
                    }
                },
                "url":"http://news.sina.com.cn/c/2020-02-09/doc-iimxxste9954717.shtml"
            }, {
                "name": "女篮两连胜后大喊武汉加油",
                "value": 5449,
                "symbolSize": 73,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[1],
                        "color": colorList[1]
                    }
                },
                "url":"http://news.sina.com.cn/c/2020-02-09/doc-iimxxste9961604.shtml"
            }, {
                "name": "火神山医院开微博",
                "value": 2289,
                "symbolSize": 67,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[2],
                        "color": colorList[2]
                    }
                },
                "url":"http://news.sina.com.cn/c/2020-02-09/doc-iimxxste9990601.shtml"
            }, {
                "name": "医疗队女队员集体理平头和光头",
                "value": 2518,
                "symbolSize": 50,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[3],
                        "color": colorList[3]
                    }
                },
                "url":"https://baijiahao.baidu.com/s?id=1658028715354829242&wfr=spider&for=pc"
            }, {
                "name": "缅怀疫情中逝去的人们",
                "value": 4730,
                "symbolSize": 88,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[4],
                        "color": colorList[4]
                    }
                },
                "url":"https://www.sohu.com/a/385478700_482851"
            }, {
                "name": "妨害疫情防控的违法行为",
                "value": 1952,
                "symbolSize": 55,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[5],
                        "color": colorList[5]
                    }
                },
                "url":"https://baijiahao.baidu.com/s?id=1657656263063060584&wfr=spider&for=pc"
            }, {
                "name": "66岁重症患者8天快速康复",
                "value": 926,
                "symbolSize": 70,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[6],
                        "color": colorList[6]
                    }
                },
                "url":"https://baijiahao.baidu.com/s?id=1658022108982946332&wfr=spider&for=pc"
            }, {
                "name": "别让快递小哥一直等在寒风中",
                "value": 4536,
                "symbolSize": 67,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[7],
                        "color": colorList[7]
                    }
                },
                "url":"https://baijiahao.baidu.com/s?id=1657965911376981447&wfr=spider&for=pc"
            }, {
                "name": "湖北以外地区新增病例数连降5天",
                "value": 750,
                "symbolSize": 47,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[8],
                        "color": colorList[8]
                    }
                },
                "url":"https://www.guancha.cn/politics/2020_02_09_535235.shtml"
            }, {
                "name": "女儿写给战疫一线爸爸的信",
                "value": 493,
                "symbolSize": 82,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[9],
                        "color": colorList[9]
                    }
                },
                "url":"https://www.sohu.com/a/375738247_99956815"
            }, {
                "name": "青海连续3天无新增病例",
                "value": 385,
                "symbolSize": 59,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[10],
                        "color": colorList[10]
                    }
                },
                "url":"http://society.people.com.cn/gb/n1/2020/0209/c1008-31577915.html"
            }, {
                "name": "辽宁再派1000名医护人员驰援武汉",
                "value": 4960,
                "symbolSize": 90,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[11],
                        "color": colorList[11]
                    }
                },
                "url":"http://news.sina.com.cn/c/2020-02-09/doc-iimxyqvz1394234.shtml"
            }, {
                "name": "抗击新型肺炎第一线",
                "value": 8694000,
                "symbolSize": 134,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[12],
                        "color": colorList[12]
                    }
                },
                "url":"https://baijiahao.baidu.com/s?id=1656759232614648347&wfr=spider&for=pc"
            }, {
                "name": "12项疫情防控惠民政策",
                "value": 5668,
                "symbolSize": 75,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[13],
                        "color": colorList[13]
                    }
                },
                "url":"https://baijiahao.baidu.com/s?id=1657891825698013989&wfr=spider&for=pc"
            }, {
                "name": "战疫一线的别样团圆",
                "value": 339,
                "symbolSize": 68,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[14],
                        "color": colorList[14]
                    }
                },
                "url":"http://finance.sina.com.cn/wm/2020-02-08/doc-iimxxste9892145.shtml"
            }, {
                "name": "31省区市心理援助热线",
                "value": 671,
                "symbolSize": 62,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[15],
                        "color": colorList[15]
                    }
                },
                "url":"http://unn.people.com.cn/n1/2020/0208/c14717-31577296.html"
            }, {
                "name": "元宵节亮灯为武汉加油",
                "value": 27000,
                "symbolSize": 114,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[16],
                        "color": colorList[16]
                    }
                },
                "url":"https://baijiahao.baidu.com/s?id=1658010726851087679&wfr=spider&for=pc"
            }, {
                "name": "抗击新型肺炎我们在行动",
                "value": 10777000,
                "symbolSize": 130,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[17],
                        "color": colorList[17]
                    }
                },
                "url":"https://baijiahao.baidu.com/s?id=1656782120466434996&wfr=spider&for=pc"
            }, {
                "name": "疫情中的逆行者",
                "value": 92000,
                "symbolSize": 123,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[18],
                        "color": colorList[18]
                    }
                },
                "url":"https://baijiahao.baidu.com/s?id=1656398243144763735&wfr=spider&for=pc"
            }, {
                "name": "一张图看懂新冠肺炎",
                "value": 20000,
                "symbolSize": 141,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[19],
                        "color": colorList[19]
                    }
                },
                "url": "https://gallery.echartsjs.com/preview.html?c=xPLngHx_Z&v=1"
            }]
        }]
    }
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1')); 
option = {
   
	    title: [{
        text: '年龄分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['0岁以下','20-29岁','30-39岁','40-49岁','50岁以上'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'年龄分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                  color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:1, name:'0岁以下'},
                {value:4, name:'20-29岁'},
                {value:2, name:'30-39岁'},
                {value:2, name:'40-49岁'},
                {value:1, name:'50岁以上'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
option = {
   
	    title: [{
        text: '职业分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['电子商务','教育','IT/互联网','金融','学生','其他'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'年龄分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:5, name:'电子商务'},
                {value:1, name:'教育'},
                {value:6, name:'IT/互联网'},
                {value:2, name:'金融'},
                {value:1, name:'学生'},
                {value:1, name:'其他'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
option = {
	    title: [{
        text: '兴趣分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['汽车','旅游','财经','教育','软件','其他'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'兴趣分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                   color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:2, name:'汽车'},
                {value:3, name:'旅游'},
                {value:1, name:'财经'},
                {value:4, name:'教育'},
                {value:8, name:'软件'},
                {value:1, name:'其他'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
				
	
})

function echarts_4(str) {
    var myChart = echarts.init(document.getElementById('echart4'));
    myChart.setOption({
        tooltip: {},
        legend: {
            data: ['confirmedNum', 'curesNum', 'deathsNum'],
            textStyle:{
                color:'#a8aab0'
            }
        },
        xAxis: {
            data: [],
            axisLabel:
                {
                    textStyle:{
                        color:'#a8aab0'
                    }
                }
        },
        yAxis: {
            axisLabel:
                {
                    textStyle:{
                        color:'#a8aab0'
                    }
                }
        },
        series: [{
            name: "",
            type: 'line',
            data: []
        }]
    });

    myChart.showLoading();
    var name2 = ['confirmedNum', 'curesNum', 'deathsNum'];
    var date = [];
    var nums1 = [];
    var nums2 = [];
    var nums3 = [];
    var world_date=[];
    var world_num=0;
    var worldall_num1=0;
    var worldall1=[];
    var worldall_num2=0;
    var worldall2=[];
    var worldall_num3=0;
    var worldall3=[];
    mycolor=['#ff0a0a','#1225f5','#1cf50c']
    $.ajax({
        type: "post",
        async: true,
        url: 'data/chinese.json',
        data: {},
        dataType: "json",
        success: function (result) {
            console.log(result);
            if (result) {
                if(str<500) {
                    for (var i = result.world[str].series.length - 1; i >= 0; i--) {
                        nums1.push(result.world[str].series[i].confirmedNum);
                        nums2.push(result.world[str].series[i].curesNum);
                        nums3.push(result.world[str].series[i].deathsNum);
                        date.push(result.world[str].series[i].date);
                    }
                    var sales_data = [];
                    sales_data.push(nums1);
                    sales_data.push(nums2);
                    sales_data.push(nums3);
                    var s_data = [];
                    for (var j = 0; j < 3; j++) {
                        s_temp = {
                            name: name2[j],
                            type: "line",
                            symbol: 'point',
                            data: sales_data[j]
                        };
                        s_data.push(s_temp)
                    }
                    myChart.hideLoading();
                    myChart.setOption({
                        xAxis: {
                            data: date
                        },
                        series: s_data
                    });
                }else{
                    for (var i = result.world[0].series.length - 1; i >= 0; i--) {
                        world_date.push(result.world[0].series[i].date);
                        for (j in result.world) {
                            worldall_num1 = worldall_num1 + result.world[j].series[i].confirmedNum;
                            worldall_num2 = worldall_num2 + result.world[j].series[i].curesNum;
                            worldall_num3 = worldall_num3 + result.world[j].series[i].deathsNum;
                        }
                        worldall1.push(worldall_num1);
                        worldall2.push(worldall_num2);
                        worldall3.push(worldall_num3);
                        worldall_num1=0;
                        worldall_num2=0;
                        worldall_num3=0;
                    }
                    var sales_data = [];
                    sales_data.push(worldall1);
                    sales_data.push(worldall2);
                    sales_data.push(worldall3);
                    var s_data = [];
                    for (var j = 0; j < 3; j++) {
                        s_temp = {
                            name: name2[j],
                            type: "line",
                            symbol: 'point',
                            data: sales_data[j],
                            itemStyle: {
                                normal: {
                                    color: mycolor[j], // 折线条的颜3
                                    borderColor:  mycolor[j], // 拐点边框颜色
                                    areaStyle: {
                                        type: 'default',
                                        opacity: 0.4
                                    }
                                }
                            }
                        };
                        s_data.push(s_temp)
                    }
                    myChart.hideLoading();
                    myChart.setOption({
                        xAxis: {
                            data: world_date,
                            type:'category',
                            axisLabel :{
                                rotate:-90,
                                fontSize:8
                            },
                            tooltip:{
                                trigger:'axis'
                            },
                            axisPointer:{
                                show:true,
                                color:"#000",
                            }
                        },
                        dataZoom:[{　type: 'slider',//图表下方的伸缩条
                            show : true, //是否显示
                            realtime : true, //拖动时，是否实时更新系列的视图
                            start : 0, //伸缩条开始位置（1-100），可以随时更改
                            end : 100, //伸缩条结束位置（1-100），可以随时更改
                        }],
                        series: s_data
                    });
                }
            }

        },
        error: function (errorMsg) {
            alert("图表请求数据失败!");
            myChart.hideLoading();
        }
    })
}

		
		
		


		









