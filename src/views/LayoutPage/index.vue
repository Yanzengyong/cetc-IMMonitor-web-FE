<template>
    <div class="layout">
        <Layout class="container">
            <Sider ref="side1" hide-trigger collapsible :width="230" :collapsed-width="78" v-model="isCollapsed">
                <div class="project_name">
                  <span>通讯软件危险监测系统</span>
                </div>
                <Menu
                  :open-names="openName"
                  :active-name="activeName"
                  theme="dark"
                  width="auto" >
                  <Submenu
                    v-for="(item, index) in subMenuItems"
                    :key="index"
                    :name="item.subMenuName">
                    <template slot="title">
                      <IconLabel :style="{marginRight: '10px'}" :icon='item.subMenuIcon'/>
                      {{ item.subMenu }}
                    </template>
                    <MenuItem
                      v-for="(ite, ind) in item.menuItems"
                      :key="ind"
                      :name="ite.menuName"
                      :to="ite.menuPath">{{ ite.menu }}</MenuItem>
                  </Submenu>
                  <MenuItem
                    :to="'/user'"
                    name='user'>
                    <IconLabel :style="{marginRight: '10px'}" icon='icon-user'/>
                    个人中心
                  </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header class="layout-header-bar">
                  <div class="layout-header-bar-left">
                    <div class="layout-header-bar-left-company">
                      <img src="../../assets/images/logo.png" alt="">
                      <span>国家工程实验室</span>
                    </div>
                  </div>
                  <div class="layout-header-bar-right">
                    <Dropdown trigger="click" style="margin-left: 20px">
                      <a href="javascript:void(0)">
                        <Avatar shape="square" :src="headImgUrl ? headImgUrl : require('../../assets/images/headpic.png')" size="large" />
                        <Icon class="avatar-icon" type="md-arrow-dropdown" />
                      </a>
                      <DropdownMenu slot="list">
                        <DropdownItem>驴打滚</DropdownItem>
                        <DropdownItem>炸酱面</DropdownItem>
                        <DropdownItem>豆汁儿</DropdownItem>
                        <DropdownItem>冰糖葫芦</DropdownItem>
                        <DropdownItem>北京烤鸭</DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
                  </div>
                </Header>
                <Content :style="{margin: '1px', background: '#fff', width: '100%', overflow: 'scroll', padding: '20px', height: '100%'}">
                  <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<style lang="scss" scoped>
.menuList{
  display: flex;
  align-items: center;
  justify-content: center;
}
.layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    height: 100%;
    .container{
      height: 100%;
    }
    .project_name{
      height: 80px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: -1px 1px 1px 1px rgba(0, 0, 0, .7);
      z-index: 999;
      position: relative;
      width: 100%;
      box-sizing: border-box;
      span{
        padding: 0 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 28px;
    box-sizing: border-box;
    .layout-header-bar-left{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .layout-header-bar-left-company{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 8px;
        img{
          width: 35px;
          height: 35px;
          margin-right: 8px;
        }
        span{
          font-size: 16px;
        }
      }
    }
  }
}
.menu-icon{
    transition: all .3s;
    cursor: pointer;
}
.avatar-icon{
  cursor: pointer;
}
.rotate-icon{
    transform: rotate(-90deg);
}
.menu-item span{
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
    margin-left: 10px;
}
.menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
}
.collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
    margin: 0;
}
.collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}
</style>

<script>
import {Layout, Sider, Menu, MenuItem, Submenu, Icon, Avatar, Dropdown, DropdownMenu, DropdownItem} from 'iview'
// import axios from '@/tools/api.request'
// import { mapState } from 'vuex'
import IconLabel from '../../components/iconComponent'
export default {
  name: 'IndexPage',
  data () {
    return {
      isCollapsed: false,
      subMenuItems: [this.menuFormat(
        ['监控器', '1', 'icon-monitor'],
        [
          ['控制台', '1-1', '/monitor/chat'],
          ['群列表', '1-2', '/monitor/list']
        ]
      )],
      headImgUrl: null,
      openName: ['1'],
      activeName: '1-1'
    }
  },
  components: {
    Layout,
    Sider,
    Menu,
    MenuItem,
    Icon,
    Avatar,
    IconLabel,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Submenu
  },
  computed: {

  },
  created () {
    if (!this.$store.state.MonitorStore.uin && !this.$store.state.MonitorStore.username) {
      this.wxInit()
    }
  },
  mounted () {

  },
  methods: {
    isChinese (temp) {
      let reg = new RegExp('[\\u4E00-\\u9FFF]+$', 'g')
      if (reg.test(temp)) return true
      return false
    },
    getMenuItems (arr) {
      let newArr = arr.map((curVal, index) => {
        let ObjInit = {}
        curVal.map((cv) => {
          let Obj = {}
          if (this.isChinese(cv)) {
            Obj['menu'] = cv
          } else if (cv.indexOf('-') !== -1) {
            Obj['menuName'] = cv
          } else if (cv.indexOf('/') !== -1) {
            Obj['menuPath'] = cv
          }
          ObjInit = Object.assign(Obj, ObjInit)
        })
        return ObjInit
      })
      return newArr
    },
    getMenuMain (arr) {
      let ObjInit = {}
      arr.map((cv) => {
        let Obj = {}
        if (this.isChinese(cv)) {
          Obj['subMenu'] = cv
        } else if (cv.indexOf('-') !== -1) {
          Obj['subMenuIcon'] = cv
        } else {
          Obj['subMenuName'] = cv
        }
        ObjInit = Object.assign(Obj, ObjInit)
      })
      return ObjInit
    },
    menuFormat (Arr, ArrItem) {
      let Obj = {}
      Obj = Object.assign(this.getMenuMain(Arr), {})
      Obj['menuItems'] = this.getMenuItems(ArrItem)
      return Obj
    },
    async wxInit () {
      try {
        let data = await this.$store.dispatch('wxInit')
        console.log(data)
        if (data && data.code === 200) {
          this.headImgUrl = data.data.HeadImgUrl
          this.getGroupContact()
        }
      } catch (error) {

      }
    },
    async getGroupContact () {
      try {
        let data = await this.$store.dispatch('getGroupContact')
        console.log(data)
      } catch (error) {

      }
    }
  }
}
</script>
