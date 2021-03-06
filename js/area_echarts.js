
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));

var geoCoordMap = {

    "Angola":[17.87,-11.20],
    "Afghanistan":[67.71,33.94],
    "Albania":[20.17,41.15],
    "Algeria":[1.66,28.03],
    "Andorra":[1.52,42.51],
    "Anguilla":[-63.07,18.22],
    "Argentina":[-63.62,-38.42],
    "Armenia":[45.04,40.07],
    "Ascension":[-90.94,30.20],
    "Australia":[133.78,-25.27],
    "Austria":[14.55,47.52],
    "Azerbaijan":[47.58,40.14],
    "Bahamas":[-77.40,25.03],
    "Bahrain":[50.56,26.07],
    "Bangladesh":[90.36,23.68],
    "Barbados":[-59.54,13.19],
    "Belarus":[27.95,53.71],
    "Belgium":[4.47,50.50],
    "Belize":[-88.50,17.19],
    "Benin":[2.32,9.31],
    "Bermuda Is":[-64.75,32.31],
    "Bolivia":[-63.59,-16.29],
    "Botswana":[24.68,-22.33],
    "Brazil":[-51.93,-14.24],
    "Brunei":[114.73,4.54],
    "Bulgaria":[25.49,42.73],
    "Burkina-faso":[-1.56,12.24],
    "Burma":[95.96,21.92],
    "Burundi":[29.92,-3.37],
    "Cameroon":[12.35,7.37],
    "Canada":[-106.35,56.13],
    "Cayman Is":[-117.64,33.64],
    "Central African Republic":[20.94,6.61],
    "Chad":[18.73,15.45],
    "Chile":[-71.54,-35.68],
    "China":[104.20,35.86],
    "Colombia":[-74.30,4.57],
    "Congo":[15.83,-0.23],
    "Cook Is":[-90.49,47.61],
    "Costa Rica":[-83.75,9.75],
    "Croatia":[15.2,45.1],
    "Cuba":[-77.78,21.52],
    "Cyprus":[33.43,35.13],
    "Czech Republic":[15.47,49.82],
    "Denmark":[9.50,56.26],
    "Djibouti":[42.59,11.83],
    "Dominica Rep":[-0.19,51.52],
    "Ecuador":[-78.18,-1.83],
    "Egypt":[30.80,26.82],
    "EI Salvador":[-88.90,13.79],
    "Estonia":[25.01,58.60],
    "Ethiopia":[40.49,9.15],
    "Fiji":[178.07,-17.71],
    "Finland":[25.75,61.92],
    "France":[2.21,46.23],
    "French Guiana":[-53.13,3.93],
    "Gabon":[11.61,-0.80],
    "Gambia":[-15.31,13.44],
    "Georgia":[-82.90,32.17],
    "Germany":[10.45,51.17],
    "Ghana":[-1.02,7.95],
    "Gibraltar":[-5.35,36.14],
    "Greece":[21.82,39.07],
    "Grenada":[-61.68,12.12],
    "Guam":[144.79,13.44],
    "Guatemala":[-90.23,15.78],
    "Guinea":[-9.70,9.95],
    "Guyana":[-58.93,4.86],
    "Haiti":[-72.29,18.97],
    "Honduras":[-86.24,15.20],
    "Hong Kong":[114.11,22.40],
    "Hungary":[19.50,47.16],
    "Iceland":[-19.02,64.96],
    "India":[78.96,20.59],
    "Indonesia":[113.92,-0.79],
    "Iran":[53.69,32.43],
    "Iraq":[43.68,33.22],
    "Ireland":[-8.24,53.41],
    "Israel":[34.85,31.05],
    "Italy":[12.57,41.87],
    "Ivory Coast":[-5.55,7.54],
    "Jamaica":[-77.30,18.11],
    "Japan":[138.25,36.20],
    "Jordan":[36.24,30.59],
    "Kampuchea":[105.46,12.00],
    "Kazakstan":[66.92,48.02],
    "Kenya":[37.91,-0.02],
    "Korea":[127.98,37.66],
    "Kuwait":[47.48,29.31],
    "Kyrgyzstan":[74.77,41.20],
    "Laos":[102.50,19.86],
    "Latvia":[24.60,56.88],
    "Lebanon":[35.86,33.85],
    "Lesotho":[28.23,-29.61],
    "Liberia":[-9.43,6.43],
    "Libya":[17.23,26.34],
    "Liechtenstein":[9.56,47.17],
    "Lithuania":[23.88,55.17],
    "Luxembourg":[6.13,49.82],
    "Macao":[113.54,22.20],
    "Madagascar":[46.87,-18.77],
    "Malawi":[34.30,-13.25],
    "Malaysia":[101.98,4.21],
    "Maldives":[73.54,1.98],
    "Mali":[-4.00,17.57],
    "Malta":[14.38,35.94],
    "Mariana Is":[-43.41,-20.37],
    "Martinique":[-61.02,14.64],
    "Mauritius":[57.55,-20.35],
    "Mexico":[-102.55,23.63],
    "Monaco":[7.42,43.74],
    "Mongolia":[103.85,46.86],
    "Montserrat Is":[-62.19,16.74],
    "Morocco":[-7.09,31.79],
    "Mozambique":[35.53,-18.67],
    "Namibia":[18.49,-22.96],
    "Nauru":[166.93,-0.52],
    "Nepal":[84.12,28.39],
    "Netheriands Antilles":[-68.26,12.20],
    "Netherlands":[5.29,52.13],
    "New Zealand":[174.89,-40.90],
    "Nicaragua":[-85.21,12.87],
    "Niger":[8.08,17.61],
    "Nigeria":[8.68,9.08],
    "North Korea":[127.51,40.34],
    "Norway":[8.47,60.47],
    "Oman":[55.98,21.47],
    "Pakistan":[69.35,30.38],
    "Panama":[-80.78,8.54],
    "Papua New Cuinea":[143.96,-6.31],
    "Paraguay":[-58.44,-23.44],
    "Peru":[-75.02,-9.19],
    "Philippines":[121.77,12.88],
    "Poland":[19.15,51.92],
    "French Polynesia":[-149.41,-17.68],
    "Portugal":[-8.22,39.40],
    "Puerto Rico":[-66.59,18.22],
    "Qatar":[51.18,25.35],
    "Reunion":[55.54,-21.12],
    "Romania":[24.97,45.94],
    "Russia":[105.32,61.52],
    "Saint Lueia":[-60.98,13.91],
    "Saint Vincent":[7.64,45.75],
    "Samoa Eastern":[-121.83,37.35],
    "Samoa Western":[-124.15,40.80],
    "San Marino":[12.46,43.94],
    "Sao Tome and Principe":[6.61,0.19],
    "Saudi Arabia":[45.08,23.89],
    "Senegal":[-14.45,14.50],
    "Seychelles":[55.49,-4.68],
    "Sierra Leone":[-11.78,8.46],
    "Singapore":[103.82,1.35],
    "Slovakia":[19.70,48.67],
    "Slovenia":[15.00,46.15],
    "Solomon Is":[-97.37,38.92],
    "Somali":[46.20,5.15],
    "South Africa":[22.94,-30.56],
    "Spain":[-3.75,40.46],
    "Sri Lanka":[80.77,7.87],
    "St.Lucia":[-60.98,13.91],
    "St.Vincent":[-91.06,29.99],
    "Sudan":[30.22,12.86],
    "Suriname":[-56.03,3.92],
    "Swaziland":[31.47,-26.52],
    "Sweden":[18.64,60.13],
    "Switzerland":[8.23,46.82],
    "Syria":[39.00,34.80],
    "Taiwan":[120.96,23.70],
    "Tajikstan":[71.28,38.86],
    "Tanzania": [34.89, -6.37],
    "Thailand": [100.99, 15.87],
    "Togo": [0.82, 8.62],
    "Tonga": [-175.20, -21.18],
    "Trinidad and Tobago": [-61.22, 10.69],
    "Tunisia": [9.54, 33.89],
    "Turkey": [35.24, 38.96],
    "Turkmenistan": [59.56, 38.97],
    "Uganda": [32.29, 1.37],
    "Ukraine": [31.17, 48.38],
    "United Arab Emirates": [53.85, 23.42],
    "United Kingdom": [-3.44, 55.38],
    "United States": [-95.71, 37.09],
    "Uruguay": [-55.77, -32.52],
    "Uzbekistan": [64.59, 41.38],
    "Venezuela": [-66.59, 6.42],
    "Vietnam": [108.28, 14.06],
    "Yemen": [48.52, 15.55],
    "Yugoslavia": [121.02, 14.48],
    "Zimbabwe": [29.15, -19.02],
    "Zaire": [21.76, -4.04],
    "Zambia": [27.85, -13.13]
};
option= {
            baseOption: {
                timeline: {//时间线
                    axisType: 'category',
                    realtime: true,
                    loop: true,
                    autoPlay: true,
                    rewind: false,
                    playInterval: 1000,
                    left: 299,
                    right: 0,
                    bottom: '0%',
                    width: '50%',
                    label: {
                        position: 'bottom',
                        interval: 1,
                        rotate: -60,
                        color: '#fff',
                    },
                    itemStyle: {
                        color: '#fff',
                        borderColor: '#adbefe'
                    },
                    checkpointStyle: {
                        symbol: 'diamond',
                        color: '#5b60f4'
                    },
                    controlStyle: {
                        color: '#fff',
                    },
                    data: []//timeline的数据；Array的每一项，可以是直接的数值。如果需要对每个数据项单独进行样式定义，则数据项写成object;
                },
                tooltip: {
                    formatter: function (params) {
                        var info = '<p style="font-size:18px">' + params.name + '</p><p style="font-size:14px">' + params.value + '</p>'
                        return info;
                    },
                    backgroundColor: "#6a75ff",
                    textStyle: {color: "#f0f0f0"}
                },
                legend:{
                    data:[
                        {
                            name:'各国累计感染人数'
                        },
                        {
                            name:'各国累计治愈人数'
                        },
                        {
                            name:'各国累计死亡人数'
                        }
                        ],
                    textStyle:{
                        color:'#a8aab0'
                    },
                    selected:{ // 设置默认不显示
                        '各国累计治愈人数':false,
                        '各国累计死亡人数':false,
                    },
                    selectedMode:'single' // 设置单选多选模式
                },
               visualMap: {
                    show: true,
                    max:5000,
                    x: 270,
                    y: 'bottom',
                    calculable: true,
                    inRange: {
                        color: ['#cdcdcd', '#cda1a1', '#cd4243', '#cd3232', '#cd1C19', '#cd0000']
                    },
                    textStyle:{
                        color:'gray',
                        fontSize:'10'
                    }
                },
                /*visualMap: {
                    show: true,
                    max:100000,
                    x: 270,
                    y: 'bottom',
                    calculable: true,
                    inRange: {
                        color: ['#cdcdcd', '#a1cd9f', '#7bcd74', '#58cd4f', '#2ECD2A', '#00CD00']
                    },
                    textStyle:{
                        color:'gray',
                        fontSize:'10'
                    }
                },*/
                /*visualMap: {
                    show: true,
                    max:3000,
                    x: 270,
                    y: 'bottom',
                    calculable: true,
                    inRange: {
                        color: ['#E1E1E1', '#B9B9B9', '#919191', '#696969', '#414141', '#191919']
                    },
                    textStyle:{
                        color:'gray',
                        fontSize:'10'
                    }
                },*/
                series: [
                    {
                        name: '各国累计感染人数',
                        type: 'map',
                        mapType: 'world',
                        roam:true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            /*normal: {
                                color: '#ffeb7b'
                            }*/
                            normal: {
                                borderColor: '#2d98fc',
                                borderWidth: 1.5,
                                shadowColor: '#03377d',
                                shadowBlur: 20
                            },
                            emphasis: {
                                areaColor: '#2d96f9'
                            }
                        },
                        data: []
                    },
                    {
                        name: '各国累计治愈人数',
                        type: 'map',
                        mapType: 'world',
                        roam:true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            /*normal: {
                                color: '#ffeb7b'
                            }*/
                            normal: {
                                borderColor: '#2d98fc',
                                borderWidth: 1.5,
                                shadowColor: '#03377d',
                                shadowBlur: 20
                            },
                            emphasis: {
                                areaColor: '#2d96f9'
                            }
                        },
                        data: []
                    },
                    {
                        name: '各国累计死亡人数',
                        type: 'map',
                        mapType: 'world',
                        roam:true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            /*normal: {
                                color: '#ffeb7b'
                            }*/
                            normal: {
                                borderColor: '#2d98fc',
                                borderWidth: 1.5,
                                shadowColor: '#03377d',
                                shadowBlur: 20
                            },
                            emphasis: {
                                areaColor: '#2d96f9'
                            }
                        },
                        data: []
                    }
                ]
            },
            animationDurationUpdate: 1000,
            options: []
        };
        myChart.showLoading();

    var datMap_series_1=[];
    var datMap_series_2=[];
    var datMap_series_3=[];
    $.ajax({
                // type: "post",
                async: true,
                url: 'data/world_data_highecharts.json',
                data: {},
                dataType: "json",
                success: function (result) {
                    console.log(result);
                    if (result) {
                        for (i=80;i>=0;i-=2) {
                            var dataMap_1 = [];
                            var dataMap_2 = [];
                            var dataMap_3 = [];
                            for (j in result.world) {
                                var obj1 = new Object();
                                obj1.name = result.world[j].name;
                                obj1.value = result.world[j].series[i].confirmedNum;
                                dataMap_1.push(obj1);
                            }
                            for (j in result.world) {
                                var obj2 = new Object();
                                obj2.name = result.world[j].name;
                                obj2.value = result.world[j].series[i].curesNum;
                                dataMap_2.push(obj2);
                            }
                            for (j in result.world) {
                                var obj3 = new Object();
                                obj3.name = result.world[j].name;
                                obj3.value = result.world[j].series[i].deathsNum;
                                dataMap_3.push(obj3);
                            }
                            option.baseOption.timeline.data.push(result.world[0].series[i].date);
                            datMap_series_1.push(dataMap_1);
                            datMap_series_2.push(dataMap_2);
                            datMap_series_3.push(dataMap_3);
                        } ;
                        for (i=0;i<datMap_series_1.length;i++){
                            option.options.push({
                                series:[
                                    {
                                        data:datMap_series_1[i]
                                    },
                                    {
                                        data:datMap_series_2[i]
                                    },
                                    {
                                        data:datMap_series_3[i]
                                    }
                                ]
                            })
                        }
                        myChart.hideLoading();

                        myChart.setOption(option);
                    }

                },
                error: function (errorMsg) {
                    alert("图表请求数据失败!");
                    myChart.hideLoading();
                }
            })
    }
})

