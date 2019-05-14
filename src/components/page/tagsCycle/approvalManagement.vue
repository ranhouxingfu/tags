<template>
  <div>
    <el-row>
      <el-button type="primary">标签分类</el-button>
      <el-button type="primary">树形展示</el-button>
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
      <el-table-column label="审批" width="180">
        <template slot-scope="scope">
          <el-button size="mini">批准</el-button>
          <el-button size="mini" type="danger">不批准</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

  <script>
export default {
  data() {
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
      ]
    };
  }
};
</script>