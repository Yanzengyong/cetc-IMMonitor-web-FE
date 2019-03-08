<template>
  <div class="left-container">
    <div class="top-block">
      <div class="center-title">违规消息占比</div>
      <div id="outRule" class="outRule" ref="outRule"></div>
    </div>
    <div class="center-block">
      <div class="center-title">
        涉敏感词云群成员  <span class="char">TOP8</span>
      </div>
      <ul>
        <li v-for="(item) in list">
          <img  :src="item.imgUrl" />
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
    <div class="bottom-block">
      <div class="center-title">
        涉敏感词云群成员男女比例分布
      </div>
      <ul>
        <li>
          <div>
            <span class="iconfont womanActive">&#xe6f9;</span>
            <span class="iconfont womanActive">&#xe6f9;</span>
            <span class="iconfont womanActive">&#xe6f9;</span>
            <span class="iconfont womanActive">&#xe6f9;</span>
            <span class="iconfont womanActive">&#xe6f9;</span>
            <span class="iconfont womanActive">&#xe6f9;</span>
            <span class="iconfont">&#xe6f9;</span>
            <span class="iconfont">&#xe6f9;</span>
            <span class="iconfont">&#xe6f9;</span>
            <span class="iconfont">&#xe6f9;</span>
          </div>
          <div class="dataStyle">
            <p>60%</p>
            <p>女<span class="char">912</span>人</p>
          </div>
        </li>
        <li>
          <div>
            <span class="iconfont manActive">&#xe6fa;</span>
            <span class="iconfont manActive">&#xe6fa;</span>
            <span class="iconfont">&#xe6fa;</span>
            <span class="iconfont">&#xe6fa;</span>
            <span class="iconfont">&#xe6fa;</span>
            <span class="iconfont">&#xe6fa;</span>
            <span class="iconfont">&#xe6fa;</span>
            <span class="iconfont">&#xe6fa;</span>
            <span class="iconfont">&#xe6fa;</span>
            <span class="iconfont">&#xe6fa;</span>
          </div>
          <div class="dataStyle">
            <p>20%</p>
            <p>男<span class="char">228</span>人</p>
          </div>
        </li>
        <li>
          <div>
            <span class="iconfont unknownActive">&#xe6fa;</span>
            <span class="iconfont unknownActive">&#xe6f9;</span>
            <span class="iconfont">&#xe6fa;</span>
            <span class="iconfont">&#xe6f9;</span>
            <span class="iconfont">&#xe6fa;</span>
            <span class="iconfont">&#xe6f9;</span>
            <span class="iconfont">&#xe6fa;</span>
            <span class="iconfont">&#xe6f9;</span>
            <span class="iconfont">&#xe6fa;</span>
            <span class="iconfont">&#xe6f9;</span>
          </div>
          <div class="dataStyle">
            <p>20%</p>
            <p>未知<span class="char">228</span>人</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .left-container{
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    flex-flow: column;
    bottom: 0;
    background: rgba(16, 0, 64, 0.4);
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
    >div:first-child{
      flex: 1.2 1 auto;
    }
    .top-block{
      .outRule{
        position: absolute;
        top: 4.7vh;
        bottom: 12px;
        left: 0;
        right: 0;
      }
    }
      .center-block{
        flex: 1.5 1 auto;
        >ul{
          position: absolute;
          top: 4.7vh;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          bottom: 20px;
          overflow: auto;
          >li{
            width: 5vw;
            height: 13vh;
            text-align: center;
            padding: 5px 10px;
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
              width: 70%;
            }
            >p{
              font-size: 14px;
              position: relative;
              top: 1vh;
            }
          }
        }
      }
    .bottom-block{
      flex: 1 1 auto;
      >ul{
        position: absolute;
        top: 4.7vh;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        >li{
          display: flex;
          width: 24.8vw;
          height: 6vh;
          align-items: center;
          justify-content: space-between;
          >div{
            display: flex;
            height: inherit;
            align-items: center;
            flex: 2 1 auto
          }
          .dataStyle{
            flex-direction: column;
            flex: 1 1 auto;
            .char{
              font-size: 14px;
              margin: 0 3px;
            }
            p:first-child{
              font-size: 20px;
              font-weight: bold;
            }
            p:last-child{
              font-size: 14px;
              color: #cdd1da;
            }
          }
        }
        >li{
          span{
            font-size: 48px;
            width: 1.2vw;
          }
          .womanActive{
            color: #ff9292;
          }
          .manActive{
            color: #0094e0;
          }
          .unknownActive{
            color: #b0ffff;
          }
        }
      }
    }
  }
</style>

<script>
  import echarts from 'echarts/dist/echarts'
  import '../../../../assets/iconfont/iconfont.css'
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
      wordPie () {
        this.chart1 = echarts.init(document.getElementById('wordProportion'))
        var option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}:{c}({d}%)'
          },
          color: ['rgb(0, 160, 232)', 'rgb(51, 51, 51)'],
          series: [
            {
              name: '涉敏词云占比',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: 400,
                name: '涉敏词云人数',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: 'rgb(0, 160, 232)'
                    }, {
                      offset: 1,
                      color: 'rgb(0, 230, 226)'
                    }])
                  }
                }}, {
                value: 95,
                name: '不涉敏词云人数',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      offset: 0,
                      color: 'rgb(51, 51, 51)'
                    }, {
                      offset: 1,
                      color: 'rgb(51, 51, 51)'
                    }])
                  }
                }}]
            }
          ]
        }
        this.chart1.setOption(option)
      },
      outRule () {
        const a = document.getElementById('outRule')
        this.outRuleChart = echarts.init(a)
        var outRuleOption = {
          tooltip: {
            position: 'right'
          },
          color: ['#09f2ff'],
          radar: {
            radius: '69%',
            center: ['45%', '54%'],
            name: {
              textStyle: {
                color: '#ccc',
                borderRadius: 3
              }
            },
            splitArea: {
              areaStyle: {
                color: [
                  'rgba(114, 172, 209, 0)'],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 10
              }
            },
            indicator: [
              {name: '暴恐', max: 165},
              {name: '色情', max: 112},
              {name: '政治敏感', max: 166},
              {name: '组织管理', max: 166}
            ],
            axisLine: {
              lineStyle: {
                color: '#040e28'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#0c3693'
              }
            }
          },
          // grid: {
          //   left: 70,
          //   top: 40,
          //   right: 70,
          //   bottom: 20
          // },
          series: [{
            name: '违规信息',
            type: 'radar',
            symbolSize: 7,
            data: [
              {
                value: [72, 82, 123, 118],
                name: '违规信息'
              }
            ],
            areaStyle: {
              normal: {
                opacity: 0.9,
                color: new echarts.graphic.RadialGradient(0, 0.4, 1, [
                  {
                    color: 'rgba(17,81,129,0.3)',
                    offset: 0
                  },
                  {
                    color: '#086c85',
                    offset: 1
                  }
                ])
              }
            }
          }]
        }
        this.outRuleChart.setOption(outRuleOption)
      }
    },
    mounted () {
      // this.wordPie()
      this.outRule()
      window.onresize = () => {
        this.outRuleChart.resize()
      }
    },
    beforeDestroy () {
      if (!this.outRuleChart) {
        return
      }
      this.outRuleChart.dispose()
      this.outRuleChart = null
    }
  }
</script>
