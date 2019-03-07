<template>
  <div class="chat_page_container">
    <ChatBox class="chat_window"/>
    <div class="danger_user_box">
      <div class="danger_user_box_title">
        <Icon class="icon_style" icon='icon-danger'/>
        <span>高危人物</span>
      </div>
      <div class="danger_user_info_box">
        <div class="danger_user_info_row">
          <span class="danger_user_info_col_name">昵称</span>
          <b></b>
          <span class="danger_user_info_col_result">
            <img src="../../assets/images/headpic.png" >
            <span>小明</span>
          </span>
        </div>
        <div class="danger_user_info_row">
          <span class="danger_user_info_col_name">微信号码</span>
          <b></b>
          <span class="danger_user_info_col_result">yzzz465465644</span>
        </div>
        <div class="danger_user_info_row">
          <span class="danger_user_info_col_name">危险词云</span>
          <b class="danger_user_info_col_line"></b>
          <span class="danger_user_info_col_result danger_img">
            <div id="main"></div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat_page_container{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .chat_window{
    width: 460px;
    margin-right: 30px;
  }
  .danger_user_box{
    width: 400px;
    // height: 500px;
    background-color: #fff;
    border: 1px solid #c4c1c1;
    .danger_user_box_title{
      padding: 15px 0;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 19px;
      border-bottom: 1px solid #e7e7e7;
      .icon_style{
        width: 30px;
        height: 30px;
      }
      span{
        margin-left: 10px;
      }
    }
    .danger_user_info_box{
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      .danger_user_info_row{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        min-height: 36px;
        margin-bottom: 10px;
        box-sizing: border-box;
        .danger_user_info_col_name{
          font-size: 15px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 100%;
        }
        b{
          width: 2px;
          height: 36px;
          background-color: #333;
        }
        .danger_user_info_col_result{
          font-size: 15px;
          flex: 2.8;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 20px;
          box-sizing: border-box;
          img{
            width: 32px;
            height: 32px;
            margin-right: 10px;
          }
        }
        .danger_user_info_col_line{
          height: 260px;
        }
        .danger_img{
          width: 100%;
          height: 260px;
          div{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

<script>
import ChatBox from '../../components/chatWindowComponent'
import Icon from '../../components/iconComponent'
var echarts = require('echarts')
require('echarts-wordcloud')
export default {
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
    var imgMask = new Image()
    imgMask.src = require('../../assets/images/man.png')
    var chart = echarts.init(document.getElementById('main'))
    chart.setOption({
      series: [{
        type: 'wordCloud',

        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // callback function, or a keyword present. Available presents are circle (default),
        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

        shape: 'circle',

        // A silhouette image which the white area will be excluded from drawing texts.
        // The shape option will continue to apply as the shape of the cloud to grow.

        maskImage: imgMask,

        // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
        // Default to be put in the center and has 75% x 80% size.

        left: 'center',
        top: 'center',
        width: '100%',
        height: '100%',
        right: null,
        bottom: null,

        // Text size range which the value in data will be mapped to.
        // Default to have minimum 12px and maximum 60px size.

        sizeRange: [6, 12],

        // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

        rotationRange: [-90, 90],
        rotationStep: 45,

        // size of the grid in pixels for marking the availability of the canvas
        // the larger the grid size, the bigger the gap between words.

        gridSize: 8,

        // set to true to allow word being draw partly outside of the canvas.
        // Allow word bigger than the size of the canvas to be drawn
        drawOutOfBound: false,

        // Global text style
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
              // Random color
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },

        // Data is an array. Each array item must have name and value property.
        data: [{
          name: 'Jayfee个啊撒',
          value: '666'
        }, {
          name: 'Nancy大手',
          value: '520'
        }, {
          name: '生活资源',
          value: '999'
        }, {
          name: '供热管理',
          value: '888'
        }, {
          name: '供气质量',
          value: '777'
        }, {
          name: '生活用水管理',
          value: '688'
        }, {
          name: '一次供水问题',
          value: '588'
        }, {
          name: '交通运输',
          value: '516'
        }, {
          name: '城市交通',
          value: '515'
        }, {
          name: '环境保护',
          value: '483'
        }, {
          name: '房地产管理',
          value: '462'
        }, {
          name: '城乡建设',
          value: '449'
        }, {
          name: '社会保障与福利',
          value: '429'
        }, {
          name: '社会保障',
          value: '407'
        }, {
          name: '文体与教育管理',
          value: '406'
        }, {
          name: '公共安全',
          value: '406'
        }, {
          name: '公交运输管理',
          value: '386'
        }, {
          name: '出租车运营管理',
          value: '385'
        }, {
          name: '供热管理',
          value: '375'
        }, {
          name: '市容环卫',
          value: '355'
        }, {
          name: '自然资源管理',
          value: '355'
        }, {
          name: '粉尘污染',
          value: '335'
        }, {
          name: '噪声污染',
          value: '324'
        }, {
          name: '土地资源管理',
          value: '304'
        }, {
          name: '物业服务与管理',
          value: '304'
        }, {
          name: '医疗卫生',
          value: '284'
        }, {
          name: '粉煤灰污染',
          value: '284'
        }, {
          name: '占道',
          value: '284'
        }, {
          name: '供热发展',
          value: '254'
        }, {
          name: '农村土地规划管理',
          value: '254'
        }, {
          name: '生活噪音',
          value: '253'
        }, {
          name: '供热单位影响',
          value: '253'
        }, {
          name: '城市供电',
          value: '223'
        }, {
          name: '房屋质量与安全',
          value: '223'
        }, {
          name: '大气污染',
          value: '223'
        }, {
          name: '房屋安全',
          value: '223'
        }, {
          name: '文化活动',
          value: '223'
        }, {
          name: '拆迁管理',
          value: '223'
        }, {
          name: '公共设施',
          value: '223'
        }, {
          name: '供气质量',
          value: '223'
        }, {
          name: '供电管理',
          value: '223'
        }, {
          name: '燃气管理',
          value: '152'
        }, {
          name: '教育管理',
          value: '152'
        }, {
          name: '医疗纠纷',
          value: '152'
        }, {
          name: '执法监督',
          value: '152'
        }, {
          name: '设备安全',
          value: '152'
        }, {
          name: '政务建设',
          value: '152'
        }, {
          name: '县区、开发区',
          value: '152'
        }, {
          name: '宏观经济',
          value: '152'
        }, {
          name: '教育管理',
          value: '112'
        }, {
          name: '社会保障',
          value: '112'
        }, {
          name: '生活用水管理',
          value: '112'
        }, {
          name: '物业服务与管理',
          value: '112'
        }, {
          name: '分类列表',
          value: '112'
        }, {
          name: '农业生产',
          value: '112'
        }, {
          name: '二次供水问题',
          value: '112'
        }, {
          name: '城市公共设施',
          value: '92'
        }, {
          name: '拆迁政策咨询',
          value: '92'
        }, {
          name: '物业服务',
          value: '92'
        }, {
          name: '物业管理',
          value: '92'
        }, {
          name: '社会保障保险管理',
          value: '92'
        }, {
          name: '低保管理',
          value: '92'
        }, {
          name: '文娱市场管理',
          value: '72'
        }, {
          name: '城市交通秩序管理',
          value: '72'
        }, {
          name: '执法争议',
          value: '72'
        }, {
          name: '商业烟尘污染',
          value: '72'
        }, {
          name: '占道堆放',
          value: '71'
        }, {
          name: '地上设施',
          value: '71'
        }, {
          name: '水质',
          value: '71'
        }, {
          name: '无水',
          value: '71'
        }]
      }]
    })
  },
  components: {
    ChatBox,
    Icon
  }
}
</script>
