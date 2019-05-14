<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      primaryColor: "#409eff",
      items: [
        {
          icon: "el-icon-message",
          index: "dashboard",
          title: "标签首页"
        },
        {
          icon: "el-icon-message",
          index: "3",
          title: "标签生命周期管理",
          subs: [
              {
              index: "lifecycle",
              title: "目录形式"
            },
            {
              index: "edit",
              title: "标签编辑"
            },
            {
              index: "source",
              title: "标签数据源"
            },
            {
              index: "selectSource",
              title: "选择数据源"
            },
            {
              index: "3-2",
              title: "配置标签",
              subs: [
                {
                  index: "settingTags",
                  title: "配置标签"
                },
                {
                  index: "templateTags",
                  title: "模板标签"
                },
                {
                  index: "colsTags",
                  title: "列标签"
                }
              ]
            },
            {
              index: "approvalManagement",
              title: "审批管理"
            },
            {
              index: "smartSearch",
              title: "智能检索"
            }
          ]
        },

        {
          icon: "el-icon-message",
          index: "7",
          title: "标签价值评估",
          subs: [
            {
              index: "tagsEvaluate",
              title: "标签评价"
            },
            {
              index: "tagsLogs",
              title: "标签使用日志分析"
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
    //this.primaryColor=localStorage.getItem('color')
    bus.$on("changeColor", data => {
      this.primaryColor = data;
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
