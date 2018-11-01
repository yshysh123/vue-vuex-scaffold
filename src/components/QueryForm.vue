<template>
  <div class="queryForm">
    <el-form ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      :model="ruleForm"
      :rules="rules">
      <el-row>
        <el-col :span="6"
          v-if="showForm.name">
          <el-form-item label="活动名称"
            prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6"
          v-if="showForm.region">
          <el-form-item label="活动区域"
            prop="region">
            <el-select v-model="ruleForm.region"
              placeholder="请选择活动区域">
              <el-option label="区域一"
                value="shanghai"></el-option>
              <el-option label="区域二"
                value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6"
          v-if="showForm.date">
          <el-form-item label="活动时间"
            required>
            <el-form-item prop="date1">
              <el-date-picker type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-form-item>
        </el-col>
        <el-col :span="6"
          v-if="showForm.desc">
          <el-form-item label="活动形式"
            prop="desc">
            <el-input v-model="ruleForm.desc"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex"
        class="row-bg"
        justify="end">
        <el-form-item>
          <el-button type="primary"
            @click="submitForm('ruleForm')">{{$t('form.submit')}}</el-button>
          <el-button @click="resetForm('ruleForm')">{{$t('form.reset')}}</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'queryForm',
  data: function() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' },
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
      },
    }
  },
  props: {
    showForm: Object,
  },
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style scoped lang="less" type="text/css">
</style>
