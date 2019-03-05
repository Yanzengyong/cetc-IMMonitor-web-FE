<template>
    <div class="layout">
      <Table border :columns="columns" :data="tableData"></Table>
    </div>
</template>
<style lang="scss">
.progress-yellow .ivu-progress-bg{
  background-color: #f5f10b;
}
.progress-violence .ivu-progress-bg{
  background-color: #fa2922;
}
.progress-Politics .ivu-progress-bg{
  background-color: #141b04;
}
.ivu-progress-outer{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>

<script>
import { Table, Button, Progress, Tag } from 'iview'
export default {
  name: 'IndexPage',
  data () {
    return {
      columns: [
        {
          title: '群名称',
          key: 'groupName',
          width: 200
        },
        {
          title: '群人数',
          key: 'peopleNumber',
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
                  }
                }
              }, '详情')
            ])
          }
        }
      ],
      tableData: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  components: {
    Table
  },
  computed: {

  },
  methods: {

  }
}
</script>
