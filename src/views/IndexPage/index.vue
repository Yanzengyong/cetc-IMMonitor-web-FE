<template>
  <div>
    <Table border :columns="columns" :data="groupList"></Table>
    <Spin fix v-if='groupList.length > 0 ? false : false'>
      <Icon type="ios-loading" size=38 class="demo-spin-icon-load"></Icon>
      <div class="text">个人及群组信息获取中...</div>
    </Spin>
  </div>
</template>
<style lang="scss">
.progress-yellow .ivu-progress-bg{
  background-color: #efeb3a;
}
.progress-violence .ivu-progress-bg{
  background-color: #fb4a44;
}
.progress-Politics .ivu-progress-bg{
  background-color: #585858;
}
.ivu-progress-outer{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.text{
  font-size: 16px;
  margin-top: 8px;
}
.demo-spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
</style>

<script>
import { Table, Button, Progress, Tag, Spin, Icon } from 'iview'
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  data () {
    return {
      columns: [
        {
          title: '群名称',
          key: 'NickName',
          width: 200
        },
        {
          title: '群人数',
          key: 'MemberCount',
          width: 100
        },
        {
          title: '群状态',
          key: 'groupStatus',
          width: 120,
          render: (h, params) => {
            return h(Tag, {
              props: {
                color: 'success'
              }
            }, 'aaa')
          }
        },
        {
          title: '历史危险',
          key: 'historicalDanger',
          width: 120,
          render: (h, params) => {
            return h(Tag, {
              props: {
                color: 'success'
              }
            }, 'aaa')
          }
        },
        {
          title: '危险周期',
          key: 'dangerousCycle',
          width: 120,
          filters: [
            {
              label: 'Greater than 25',
              value: 1
            },
            {
              label: 'Less than 25',
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            if (value === 1) {
              return row.age > 25
            } else if (value === 2) {
              return row.age < 25
            }
          },
          render: (h, params) => {
            return h(Tag, {
              props: {
                color: 'success'
              }
            }, 'aaa')
          }
        },
        {
          title: '危险报告',
          key: 'dangerReport',
          render: (h, params) => {
            return h('div', [
              h('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }
              }, [
                h('div', {
                  style: {
                    width: '30px',
                    marginRight: '8px'
                  }
                }, '涉黄'),
                h(Progress, {
                  props: {
                    percent: 60,
                    hideInfo: true
                  },
                  class: 'progress-yellow'
                })
              ]),
              h('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }
              }, [
                h('div', {
                  style: {
                    width: '30px',
                    marginRight: '8px'
                  }
                }, '涉暴'),
                h(Progress, {
                  props: {
                    percent: 60,
                    status: 'wrong',
                    hideInfo: true
                  },
                  class: 'progress-violence'
                })
              ]),
              h('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }
              }, [
                h('div', {
                  style: {
                    width: '30px',
                    marginRight: '8px'
                  }
                }, '涉政'),
                h(Progress, {
                  props: {
                    percent: 60,
                    status: 'wrong',
                    hideInfo: true
                  },
                  class: 'progress-Politics'
                })
              ])
            ])
          }
        },
        {
          title: '操作',
          key: 'action',
          width: 100,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(Button, {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    console.log(params.index)
                    this.$router.push('/info')
                  }
                }
              }, '详情')
            ])
          }
        }
      ],
      tableData: null
    }
  },
  components: {
    Table,
    Spin,
    Icon
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'groupList'
      // ...
    ])
  },
  created () {
    // this.wxInit()
  },
  mounted () {
    // console.log(this.groupList.data)
    // this.tableData = this.groupList
  },
  methods: {

  }
}
</script>
