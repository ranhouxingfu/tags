import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {
        title: '自述文件'
      },
      children: [{
          path: '/dashboard',
          component: resolve => require(['../components/page/Dashboard.vue'], resolve),
          meta: {
            title: '系统首页'
          }
        },
        {
          path: '/lifecycle',
          component: resolve => require(['../components/page/tagsCycle/lifecycle.vue'], resolve),
          meta: {
            title: '目录形式展示'
          }
        },
        {
          path: '/edit',
          component: resolve => require(['../components/page/tagsCycle/edit.vue'], resolve),
          meta: {
            title: '标签编辑'
          }
        }, {
          path: '/source',
          component: resolve => require(['../components/page/tagsCycle/source.vue'], resolve),
          meta: {
            title: '标签数据源'
          }
        }, {
          path: '/selectSource',
          component: resolve => require(['../components/page/tagsCycle/selectSource.vue'], resolve),
          meta: {
            title: '选择数据源'
          }
        }, {
          path: '/approvalManagement',
          component: resolve => require(['../components/page/tagsCycle/approvalManagement.vue'], resolve),
          meta: {
            title: '审批管理'
          }
        },  {
          path: '/smartSearch',
          component: resolve => require(['../components/page/tagsCycle/smartSearch.vue'], resolve),
          meta: {
            title: '智能检索'
          }
        },  {
          path: '/tagsEvaluate',
          component: resolve => require(['../components/page/tagsCycle/tagsEvaluate.vue'], resolve),
          meta: {
            title: '标签评价'
          }
        },  {
          path: '/tagsLogs',
          component: resolve => require(['../components/page/tagsCycle/tagsLogs.vue'], resolve),
          meta: {
            title: '标签使用日志'
          }
        },  {
          path: '/templateTags',
          component: resolve => require(['../components/page/tagsCycle/templateTags.vue'], resolve),
          meta: {
            title: '模板标签'
          }
        },  {
          path: '/colsTags',
          component: resolve => require(['../components/page/tagsCycle/colsTags.vue'], resolve),
          meta: {
            title: '列标签'
          }
        },  {
          path: '/settingTags',
          component: resolve => require(['../components/page/tagsCycle/colsTags.vue'], resolve),
          meta: {
            title: '配置标签'
          }
        }
      ]
    }
  ]
})
