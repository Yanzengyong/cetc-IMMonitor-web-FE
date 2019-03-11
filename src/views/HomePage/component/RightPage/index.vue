<template>
  <div class="right-container">
    <div class="top-block">
      <div class="center-title">
        敏感词云<span class="char">TOP8</span>排行榜
      </div>
      <div id="wordCloudBar" class="wordCloudBar"></div>
    </div>
    <div class="center-block">
      <div class="center-title">
        微信群危险程度排名
      </div>
      <div class="tableStyle">
        <table>
          <thead>
            <tr>
              <th>排名</th>
              <th>群名称</th>
              <th>分数及趋势</th>
            </tr>
          </thead>
          <tbody>
            <tr class="danger">
              <td>1</td>
              <td>XXX</td>
              <td>1.00 <span><span class="arrow toTop"></span><span class="straight top"></span></span></td>
            </tr>
            <tr class="danger">
              <td>2</td>
              <td>XXX</td>
              <td>1.00 <span><span class="straight down"></span><span class="arrow toDown"></span></span></td>
            </tr>
            <tr class="danger">
              <td>3</td>
              <td>XXX</td>
              <td>1.00 <span><span class="straight down"></span><span class="arrow toDown"></span></span></td>
            </tr>
            <tr>
              <td>4</td>
              <td>XXX</td>
              <td>1.00 <span><span class="straight down"></span><span class="arrow toDown"></span></span></td>
            </tr>
            <tr>
              <td>5</td>
              <td>XXX</td>
              <td>1.00 <span><span class="straight down"></span><span class="arrow toDown"></span></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bottom-block">
      <div class="center-title">
        总结
      </div>
      <div id="wordCloud" class="wordCloud">
        <!--<p>-->
          <!--该群可能涉嫌1040阳光工程，其工程是属于新型变相传销的一种,应高度关注，加大打击扫清力度，以免造成更多无辜人员的经济损失伤害。-->
        <!--</p>-->
      </div>
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
    .top-block{
      flex: 1.5 1 auto;
      .wordCloudBar{
        position: absolute;
        top: 4.7vh;
        bottom: 12px;
        left: 0;
        right: 0;
      }
    }
    .center-block{
      flex: 1.8 1 auto;
      >.tableStyle{
        position: absolute;
        top: 4.7vh;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: auto;
        padding: 10px;
        >table{
          width: 100%;
          .danger{
            td{
              color: red;
            }
          }
          >thead>tr>th,>tbody>tr>td{
            text-align: center;
            line-height: 36px;
          }
          >thead>tr>th{
            font-size:16px;
          }
          >tbody>tr>td{
            font-size:14px;
          }
          tbody>tr td:last-child{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            >span{
              display: flex;
              align-items: center;
              flex-direction: column;
              position: relative;
              margin-left: 0.2vw;
              top:-0.2vh;
            }
            .arrow{
              top: 0;
              bottom: 0;
              display: inline-block;
              width: 0px;
              height: 0px;
              border: 6px solid transparent;
              overflow: hidden;
            }
            .toTop{
              border-top: none;
              border-bottom-color: red;
            }
            .toDown{
              border-bottom: none;
              border-top-color: dodgerblue;
            }
            .straight{
              display: inline-block;
              width: 0.2vw;
              height: 1.3vh;
            }
            .top{
              background: red;
            }
            .down{
              background: dodgerblue;
            }
          }
        }
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
            width: 89%;
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
      >div:last-child{
        position: absolute;
        top: 4.7vh;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        padding: 0 20px;
        p{
          font-size: 16px;
          line-height: 38px;
        }
      }
    }
  }
</style>

<script>
  import echarts from 'echarts'
  import '../../../../assets/iconfont/iconfont.css'

  require('echarts-wordcloud')

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
      wordCloudBar () {
        this.chart = echarts.init(document.getElementById('wordCloudBar'))
        var option = {
          color: ['#00baff'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: '{b0}: {c0}'
          },
          grid: {
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['连锁业', '1040', '阳光工程', '暴恐', '出局证书', '抢劫', '防火', '强奸'],
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                color: '#a299b4',
                interval: 0
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              show: false
            }
          ],
          series: [
            {
              name: '数量',
              type: 'bar',
              barWidth: '40%',
              data: [43, 29, 26, 23, 20, 18, 14, 10]
            }
          ]
        }
        this.chart.setOption(option)
        this.chart.resize()
      },
      createRandomItemStyle () {
        return {
          normal: {
            color: 'rgb(' + [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') + ')'
          }
        }
      },
      wordCloud () {
        this.chart1 = echarts.init(document.getElementById('wordCloud'))
        var cloudOption = {
          tooltip: {
            show: true
          },
          series: [{
            name: '词云评价',
            type: 'wordCloud',
            size: ['80%', '80%'],
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 14
            },
            color: ['#00dcff'],
            data: [
              {
                name: '菜品',
                value: 10000,
                itemStyle: {
                  normal: {
                    color: 'black'
                  }
                }
              },
              {
                name: '医术高明',
                value: 6181,
                itemStyle: this.createRandomItemStyle()
              },
              {
                name: '服务好',
                value: 4386,
                itemStyle: this.createRandomItemStyle()
              },
              {
                name: '上菜',
                value: 4055,
                itemStyle: this.createRandomItemStyle()
              },
              {
                name: '有耐心',
                value: 2467,
                itemStyle: this.createRandomItemStyle()
              },
              {
                name: '价格',
                value: 2244,
                itemStyle: this.createRandomItemStyle()
              },
              {
                name: '有耐心',
                value: 1898,
                itemStyle: this.createRandomItemStyle()
              },
              {
                name: '干净',
                value: 1484,
                itemStyle: this.createRandomItemStyle()
              },
              {
                name: '环境优美',
                value: 1112,
                itemStyle: this.createRandomItemStyle()
              },
              {
                name: '安静',
                value: 965,
                itemStyle: this.createRandomItemStyle()
              },
              {
                name: '温暖',
                value: 847,
                itemStyle: this.createRandomItemStyle()
              },
              {
                name: '态度一般',
                value: 582,
                itemStyle: this.createRandomItemStyle()
              }
            ]
          }]
        }
        this.chart1.setOption(cloudOption)
        this.chart1.resize()
      }
    },
    mounted () {
      this.wordCloudBar()
      this.wordCloud()
    },
    beforeDestroy () {
      if (!this.chart || !this.chart1) {
        return
      }
      this.chart.dispose()
      this.chart1.dispose()
      this.chart = null
      this.chart1 = null
    }
  }
</script>
