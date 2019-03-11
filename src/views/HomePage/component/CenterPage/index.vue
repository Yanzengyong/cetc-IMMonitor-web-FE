<template>
  <div class="right-container">
    <div class="top-block">
      <div class="center-title">
        涉敏感词云群成员省市分布
      </div>
      <div id="countyMap" class="countyMap"></div>
    </div>
    <div class="center-block">
      <ul>
        <li>
          <div>
            <div>四川省</div>
            <div><span>200</span>人</div>
            <div>15%</div>
          </div>
          <div>
            <div>成都：50人</div>
            <div>乐山：39人</div>
            <div>攀枝花：42人</div>
            <div>南充49人</div>
            <div>绵阳：49人</div>
          </div>
        </li>
        <li>
          <div>
            <div>四川省</div>
            <div><span>200</span>人</div>
            <div>15%</div>
          </div>
          <div>
            <div>成都：50人</div>
            <div>乐山：39人</div>
            <div>攀枝花：42人</div>
            <div>南充49人</div>
            <div>绵阳：49人</div>
          </div>
        </li>
        <li>
          <div>
            <div>四川省</div>
            <div><span>200</span>人</div>
            <div>15%</div>
          </div>
          <div>
            <div>成都：50人</div>
            <div>乐山：39人</div>
            <div>攀枝花：42人</div>
            <div>南充49人</div>
            <div>绵阳：49人</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom-block">
      <div class="center-title">
        违规消息占比变化趋势
      </div>
      <div id="outMessage" class="outMessage"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .right-container{
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    flex-flow: column;
    bottom: 0;
    filter: blur(0px);
    .char{
      font-family: 'Aril';
    }
    .center-title {
      width: 100%;
      height: 4.7vh;
      position: relative;
      text-align: left;
      display: flex;
      padding-left: 0.5vw;
      align-items: center;
      border-left: 4px solid #00f6ff;
      box-shadow: 9px -5px 27px -11px #00f6ff inset;
      border-bottom: 1px solid #08c9d0;
      color: #ffffff;
      border-image: linear-gradient(to right, #03f2fb, #161755) 2;
      background: linear-gradient(to right, #131c57, #160546);
      font-size: 18px;
      > span {
        margin-left: 0.5vw;
      }
    }
    >div{
      position: relative;
    }
    .top-block{
      flex: 1.8 1.8 auto;
      .countyMap{
        position: absolute;
        top: 4.7vh;
        bottom: 12px;
        left: 0;
        right: 0;
        height: 100%;
      }
    }
    .center-block{
      flex: 1 1 auto;
      background: rgba(16, 0, 64, 0.4);
      >ul{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px 30px;
        >li:not(:first-child){
          margin-top: 2vh;
        }
        >li{
          width: 100%;
          height: 6vh;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          >div{
            width: 100%;
          }
          >div:first-child{
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            >div:first-child{
              flex: 2 2 auto;
            }
            >div:nth-child(2){
              flex: 2 2 auto;
            }
            >div:last-child{
              flex: 1 1 auto;
            }
          }
          >div:last-child{
            font-size: 13px;
            color: rgba(255,255,255,0.7);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 1.2vh;
            >div{
              flex: 1 1 auto;
            }
          }
        }
      }
    }
    .bottom-block{
      flex: 1.2 1.2 auto;
      background: rgba(16, 0, 64, 0.4);
      .outMessage{
        position: absolute;
        top: 4.7vh;
        bottom: 12px;
        left: 0;
        right: 0;
      }
    }
  }
</style>

<script>
  import echarts from 'echarts/dist/echarts'
  import '../../../../assets/iconfont/iconfont.css'
  import china from '../../../../assets/data/china.json'
  export default {
    data () {
      return {
        list: [
          {
            imgUrl: require('../../../../assets/images/home_01.png'),
            text: '王一小'
          },
          {
            imgUrl: require('../../../../assets/images/home_01.png'),
            text: '王一小'
          },
          {
            imgUrl: require('../../../../assets/images/home_01.png'),
            text: '王一小'
          },
          {
            imgUrl: require('../../../../assets/images/home_01.png'),
            text: '王一小'
          },
          {
            imgUrl: require('../../../../assets/images/home_01.png'),
            text: '王一小'
          },
          {
            imgUrl: require('../../../../assets/images/home_01.png'),
            text: '王一小'
          },
          {
            imgUrl: require('../../../../assets/images/home_01.png'),
            text: '王一小'
          },
          {
            imgUrl: require('../../../../assets/images/home_01.png'),
            text: '王一小'
          }
        ],
        sexPortion:
          [
            {
              text: '女',
              percent: '60%',
              total: '912',
              font: '&#xe6f9;'
            },
            {
              text: '男',
              percent: '20%',
              total: '228',
              font: '&#xe6f9;'
            }
          ]
      }
    },
    methods: {
      countyMap () {
        this.countyMapChart = echarts.init(document.getElementById('countyMap'))
        echarts.registerMap('china', china)
        var option = {
          tooltip: {},
          grid: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          },
          visualMap: {
            show: false,
            min: 0,
            max: 1500,
            left: 'left',
            top: 'bottom',
            text: ['High', 'Low'],
            seriesIndex: [1],
            inRange: {
              color: ['#210044', '#4559fa', '#4806bf']
            },
            calculable: true
          },
          geo: {
            map: 'china',
            roam: true,
            zoom: 1.01,
            top: '5%',
            width: '100%',
            height: '100%',
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#ffffff'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(0, 0, 0, 0.2)'
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          series: [
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              symbolSize: 0,
              symbolRotate: 0,
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
                normal: {
                  color: '#F06C00'
                }
              }
            },
            {
              name: 'categoryA',
              type: 'map',
              geoIndex: 0,
              // layoutCenter: ['80%', '80%'],
              zoom: 3,
              data: china.features.map(item => ({
                name: item.properties.name,
                value: Math.random() * 1500
              })),
              itemStyle: {
                areaColor: '#000'
              }
            }
          ]
        }
        this.countyMapChart.setOption(option)
        this.countyMapChart.resize()
      },
      outMessage () {
        this.outMessageChart = echarts.init(document.getElementById('outMessage'))
        let base = +new Date(2018, 9, 3)
        const oneDay = 24 * 3600 * 1000
        const date = []
        const dataDay = []
        const data = [Math.random() * 300]
        for (let i = 1; i < 300; i++) {
          let now = new Date(base += oneDay)
          date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
          data.push(Math.round((Math.random() + 0.1) * 440))
          dataDay.push(Math.round((Math.random() + 0.1) * 426))
        }
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          grid: {
            top: '23%',
            bottom: '15%'
          },
          xAxis: [
            {
              type: 'category',
              maxInterval: 3600 * 1000 * 24,
              // data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              data: date,
              axisPointer: {
                type: 'shadow'
              },
              axisLabel: {
                textStyle: {
                  color: '#11bfe8'
                }
              },
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(204, 204, 204, .4)'
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['#11bfe8'],
                  width: 1,
                  type: 'solid',
                  opacity: 0.2
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '数量',
              min: 0,
              max: 500,
              interval: 50,
              axisLine: {
                lineStyle: {
                  color: 'rgba(8,219,230, .4)'
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['#11bfe8'],
                  width: 1,
                  type: 'solid',
                  opacity: 0.2
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: '#11bfe8'
                }
              }
            },
            {
              type: 'value',
              name: '时段',
              min: 0,
              max: 500,
              interval: 50,
              axisLabel: {
                show: false,
                formatter: '{value} °C'
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['#11bfe8'],
                  width: 1,
                  type: 'solid',
                  opacity: 0.2
                }
              },
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(8,219,230, 0.5)'
                }
              }
            }
          ],
          dataZoom: [
            {
              start: 0,
              end: 5,
              type: 'slider',
              show: true,
              xAxisIndex: [0],
              handleSize: 0,
              height: 8,
              handleColor: '#ccc',
              bottom: 0,
              handleStyle: {
                borderColor: '#cacaca',
                borderWidth: '1',
                shadowBlur: 2,
                background: '#ccc',
                shadowColor: '#ccc'
              },
              fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: '#1eb5e5'
                },
                {
                  offset: 1,
                  color: '#1eb5e5'
                }]),
              backgroundColor: '#ccc',
              showDataShadow: 'auto',
              showDetail: false,
              handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
              filterMode: 'filter'
            },
            {
              type: 'inside',
              show: true,
              xAxisIndex: [0],
              start: 0,
              end: 1000
            }],
          series: [
            {
              name: '每天变化',
              type: 'bar',
              data: dataDay,
              // data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {offset: 0, color: 'rgba(8,219,230, 0.1)'},
                    {offset: 0.5, color: 'rgba(28,219,230, 0.5)'},
                    {offset: 1, color: 'rgba(23, 131, 223, 1)'}
                  ])
                },
                emphasis: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {offset: 0, color: 'rgba(8,219,230, 0.1)'},
                    {offset: 0.5, color: 'rgba(23, 131, 223, 0.5)'},
                    {offset: 1, color: 'rgba(23, 131, 223, 1)'}
                  ])
                }
              }
            },
            {
              name: '时段变化',
              type: 'line',
              yAxisIndex: 1,
              data: data,
              // data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
              itemStyle: {
                normal: {
                  color: '#08dbe6'
                }
              }
            }
          ]
        }
        this.outMessageChart.setOption(option)
        this.outMessageChart.resize()
      }
    },
    mounted () {
      this.countyMap()
      this.outMessage()
    },
    beforeDestroy () {
      if (!this.countyMapChart) {
        return
      }
      this.countyMapChart.dispose()
      this.outMessageChart.dispose()
      this.countyMapChart = null
      this.outMessageChart = null
    }
  }
</script>
