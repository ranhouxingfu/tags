<template>
  <div style="width:60%;margin-left:20%;">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标签名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="标签权重">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="标签类型">
        <el-radio-group v-model="form.resource">
          <el-radio label="兼容性"></el-radio>
          <el-radio label="排他性"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="创建人">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="使用次数">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="是否有效">
        <el-radio-group v-model="form.resource">
          <el-radio label="有效"></el-radio>
          <el-radio label="无效"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="数据类型">
        <el-select v-model="form.region" placeholder="请选择数据类型">
          <el-option label="模型资源" value="shanghai"></el-option>
          <el-option label="关系资源" value="beijing"></el-option>
          <el-option label="数据中心资源" value="beijing2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="周期性">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="开始时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="结束时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="创建原因">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="标签描述">
        <el-input type="textarea" v-model="form.desc1"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
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
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>