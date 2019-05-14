<template>
  <div style="height:100%">
    
    <!-- <el-row>
      <el-button type="primary">标签分类</el-button>
      <el-button type="primary" @click="drawTree">树形展示</el-button>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="one" label="一级标签分类"></el-table-column>
      <el-table-column prop="two" label="二级标签分类"></el-table-column>
      <el-table-column prop="three" label="三级标签分类"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="des" label="描述"></el-table-column>
      <el-table-column prop="reason" label="创建原因"></el-table-column>
      <el-table-column prop="status" label="审批状态"></el-table-column>
      <el-table-column prop="time" label="创建时间"></el-table-column>
      <el-table-column prop="people" label="创建人"></el-table-column>
    </el-table>
    <el-dialog title="树形图展示" :visible.sync="centerDialogVisible" width="40%" center>
      <div id="myChart" :style="{width: '100%', height: '320px'}"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>-->

    <el-container>
      <el-aside width="280px">
        <!-- <el-tree
  :data="data"
  :props="defaultProps"
  accordion
  @node-click="handleNodeClick">
        </el-tree>-->
        <el-tree :data="data5" node-key="id" :props="defaultProps" accordion>
          <span  class="custom-tree-node" slot-scope="{ node, data }" @contextmenu="oncontextmenuTag">
            <span>{{ node.label }}</span>
            <!-- <span>
              <el-button type="text" size="mini" @click="() => append(data)">添加标签</el-button>
              <el-button type="text" size="mini" @click="() => remove(node, data)">删除标签</el-button>
            </span> -->
          </span>
        </el-tree>
      </el-aside>
      <el-main>
        <!-- <el-row>
      <el-button type="primary">标签分类</el-button>
      <el-button type="primary" @click="drawTree">树形展示</el-button>
        </el-row>-->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="index" label="序号" width="50"></el-table-column>
          <el-table-column prop="one" label="一级标签分类"></el-table-column>
          <el-table-column prop="two" label="二级标签分类"></el-table-column>
          <el-table-column prop="three" label="三级标签分类"></el-table-column>
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="des" label="描述"></el-table-column>
          <el-table-column prop="reason" label="创建原因"></el-table-column>
          <el-table-column prop="status" label="审批状态"></el-table-column>
          <el-table-column prop="time" label="创建时间"></el-table-column>
          <el-table-column prop="people" label="创建人"></el-table-column>
        </el-table>
        <el-dialog title="添加标签" :visible.sync="centerDialogVisible" width="40%" center>
          <edit></edit>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-main>
    </el-container>
    <!--自定义右键菜单html代码-->
    <div id="menu" @mouseleave="leaveScc">
      <div class="menu" @click="() => append(data)">添加标签</div>
      <div class="menu">删除标签</div>
    </div>
  </div>
</template>
<style>
.el-aside {
  text-align: center;
  height: 100%;
  padding: 22px 0px 0px 0px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  width: 30%;
}
.el-container {
  height: 100%;
}
body > .el-container {
  margin-bottom: 40px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
/*css代码*/
#menu {
  width: 0; /*设置为0 隐藏自定义菜单*/
  height: 55px;
  overflow: hidden; /*隐藏溢出的元素*/
  box-shadow: 0 1px 1px #888, 1px 0 1px #ccc;
  position: absolute; /*自定义菜单相对与body元素进行定位*/
  background: whitesmoke;
}
.menu {
  width: 85px;
  height: 25px;
  line-height: 25px;
  padding: 0 10px;
}
.menu:hover{
  background: #409EFF;
}
</style>
  <script>
import edit from "./edit";
let id = 1000;
export default {
  data() {
    const datas = [
      {
        id: 1,
        label: "人口主题表",
        children: [
          {
            id: 4,
            label: "涉恐",
            children: [
              {
                id: 9,
                label: "三级 1-1-1"
              },
              {
                id: 10,
                label: "三级 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "车辆主题表",
        children: [
          {
            id: 5,
            label: "二级 2-1"
          },
          {
            id: 6,
            label: "二级 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "案件主题表",
        children: [
          {
            id: 7,
            label: "二级 3-1"
          },
          {
            id: 8,
            label: "二级 3-2"
          }
        ]
      }
    ];
    return {
      tableData: [
        {
          index: 1,
          one: "业务特征",
          two: "人员信息",
          three: "涉黑认页",
          name: "非法制造买卖枪支人员",
          des: "",
          reason: "业务需要",
          status: "审批通过",
          time: "2019/4/11",
          people: "张三"
        },
        {
          index: 2,
          one: "业务特征",
          two: "人员信息",
          three: "涉黑认页",
          name: "非法制造买卖枪支人员",
          des: "",
          reason: "业务需要",
          status: "审批通过",
          time: "2019/4/11",
          people: "张三"
        },
        {
          index: 3,
          one: "业务特征",
          two: "人员信息",
          three: "涉黑认页",
          name: "非法制造买卖枪支人员",
          des: "",
          reason: "业务需要",
          status: "审批通过",
          time: "2019/4/11",
          people: "张三"
        },
        {
          index: 4,
          one: "业务特征",
          two: "人员信息",
          three: "涉黑认页",
          name: "非法制造买卖枪支人员",
          des: "",
          reason: "业务需要",
          status: "审批通过",
          time: "2019/4/11",
          people: "张三"
        }
      ],
      centerDialogVisible: false,
      option: {
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      },
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      data4: JSON.parse(JSON.stringify(datas)),
      data5: JSON.parse(JSON.stringify(datas))
    };
  },
  mounted() {
    
      window.oncontextmenu = function(e) {
        //取消默认的浏览器自带右键 很重要！！
        e.preventDefault();
        //获取我们自定义的右键菜单
      
      };
  },
  components: {
    edit
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption(this.option);
    },
    drawTree() {
      this.centerDialogVisible = true;
      this.$nextTick(() => {
        this.drawLine();
      });
    },
    handleNodeClick(data) {
      this.$notify({
        title: "成功",
        message: "刷新表格",
        type: "success"
      });
    },
    append(data) {
      // const newChild = { id: id++, label: 'testtest', children: [] };
      // if (!data.children) {
      //   this.$set(data, 'children', []);
      // }
      // data.children.push(newChild);
      this.centerDialogVisible=true
     
    },

    remove(node, data) {
      // const parent = node.parent;
      // const children = parent.data.children || parent.data;
      // const index = children.findIndex(d => d.id === data.id);
      // children.splice(index, 1);
      this.$notify({
        title: "删除",
        message: "确定要删除吗",
        type: "success"
      });
    },
    oncontextmenuTag(e){
        document.getElementById('menu').style.display='block'
        var menu = document.querySelector("#menu");

        // //根据事件对象中鼠标点击的位置，进行定位
        menu.style.left = (e.clientX-250) + "px";
        menu.style.top = (e.clientY -70)+ "px";

        // //改变自定义菜单的宽，让它显示出来
        menu.style.width = "85px";
    },
    leaveScc(){
      document.getElementById('menu').style.display='none';
    }
  }
};
</script>