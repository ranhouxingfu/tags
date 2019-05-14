<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-container>
        <img src="../../../assets/img/img.jpg" class="image">
      <el-aside width="200px">
        <el-form-item label="标签创建者评价" label-width="200px"></el-form-item>
        <el-form-item label="张三 123456789" label-width="200px"></el-form-item>
        <el-form-item label="江苏省常州市公安局" label-width="200px"></el-form-item>
      </el-aside>
      <el-main>
        <el-form-item label="标签创意">
          <el-rate v-model="value3" show-text></el-rate>
        </el-form-item>
        <el-form-item label="反馈速度">
          <el-rate v-model="value3" show-text></el-rate>
        </el-form-item>
      </el-main>
    </el-container>
<el-container>
  <el-header></el-header>
</el-container>
    <el-container>
      <el-aside width="200px">
        <img src="../../../assets/1.png" class="image" width="200">
        <el-form-item label="非法制作买卖枪支人员" label-width="200px"></el-form-item>
      </el-aside>
      <el-main>
        <el-form-item label="标签评分">
          <el-rate v-model="value3" show-text></el-rate>
        </el-form-item>
        <el-form-item label="用户印象" >
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="数据准确" name="type"></el-checkbox>
      <el-checkbox label="实用性高" name="type"></el-checkbox>
      <el-checkbox label="数据实时" name="type"></el-checkbox>
      <el-checkbox label="业务数据" name="type"></el-checkbox>
      <el-checkbox label="自定义标签" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
        <el-form-item label="标签评论">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-main>
    </el-container>
<el-container>
  <el-header>
      <div>
          <el-button type="primary" round>发表</el-button>
    <el-checkbox type="primary" label="匿名评价" border></el-checkbox>
  </div>
  </el-header>
</el-container>
    
  </el-form>
</template>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      value3: null
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>