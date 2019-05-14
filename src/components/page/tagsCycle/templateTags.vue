<template>
    
<div class="innerCla">
<el-form ref="form"  label-width="80px">
  <el-form-item label="标签名称">
    <el-input value='青年'></el-input>
  </el-form-item>
  <el-form-item label="标签权重">
    <el-input value='0'></el-input>
  </el-form-item>
<el-form-item label="标签类型">
    <el-radio-group v-model="form.resource">
      <el-radio label="兼容性"></el-radio>
      <el-radio label="排他性"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="创建原因">
    <el-input type="textarea" value='年龄段区分'></el-input>
  </el-form-item>
  <el-form-item label="标签描述">
    <el-input type="textarea" value='年龄段区分'></el-input>
  </el-form-item>
 <el-form-item label="模板表名">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  </el-form-item>

  <el-form-item label="主题表名">
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  </el-form-item>
 
  
  <el-form-item label="">
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<style lang="scss">
.innerCla{
    .el-input__inner{
        width:30%
    }
}
.innerCla{
    .el-textarea__inner{
        width:30%
    }
}
</style>


<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
