<template>
    <div>

<el-tabs type="border-card">
  <el-tab-pane label="数据资源">
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="警种">
    <el-radio v-model="radio8" label="1" border size="mini">治安</el-radio>
    <el-radio v-model="radio8" label="2" border size="mini">出入境</el-radio>
    <el-radio v-model="radio8" label="3" border size="mini">交警</el-radio>
    <el-radio v-model="radio8" label="4" border size="mini">指挥</el-radio>
    <el-radio v-model="radio8" label="5" border size="mini">情报</el-radio>
    <el-radio v-model="radio8" label="6" border size="mini">禁毒</el-radio>
  </el-form-item>
  <el-form-item label="要素">
    <el-radio v-model="radio6" label="1" border size="mini">人</el-radio>
    <el-radio v-model="radio6" label="2" border size="mini">车</el-radio>
    <el-radio v-model="radio6" label="3" border size="mini">地址</el-radio>
    <el-radio v-model="radio6" label="4" border size="mini">组织</el-radio>
    <el-radio v-model="radio6" label="5" border size="mini">案时间</el-radio>
    <el-radio v-model="radio6" label="6" border size="mini">虚拟身份</el-radio>
    <el-radio v-model="radio6" label="7" border size="mini">其他</el-radio>
  </el-form-item>
  <el-form-item label="业务">
    <el-radio v-model="radio9" label="1" border size="mini">维稳反恐</el-radio>
    <el-radio v-model="radio9" label="2" border size="mini">涉黑涉恶</el-radio>
    <el-radio v-model="radio9" label="3" border size="mini">基础工作</el-radio>
    <el-radio v-model="radio9" label="4" border size="mini">黄赌毒</el-radio>
    <el-radio v-model="radio9" label="5" border size="mini">经济犯罪</el-radio>
    <el-radio v-model="radio9" label="6" border size="mini">交通管理</el-radio>
    <el-radio v-model="radio9" label="7" border size="mini">重点人员</el-radio>
  </el-form-item>
  
  <el-row>
  <el-col :span="3" v-for="(o, index) in 21" :key="o" >
    <el-card :body-style="{ padding: '0px'}">
      <img src="../../../assets/1.png" class="image">
      <div style="padding: 2px;">
        <span>基本信息</span>
      </div>
      
    </el-card>
  </el-col>
</el-row>
<div style="float:right">
<el-pagination
  background
  layout="prev, pager, next"
  :total="30">
</el-pagination>
</div>
</el-form>
  </el-tab-pane>
  <el-tab-pane label="场景资源">
      场景资源界面
  </el-tab-pane>
  <el-tab-pane label="关系资源">关系资源界面</el-tab-pane>
</el-tabs>
    </div>
</template>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;

    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
      },
          radio6:'1',
          radio8:'1',
          radio9:'1',
          currentDate: new Date()
    }},
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>