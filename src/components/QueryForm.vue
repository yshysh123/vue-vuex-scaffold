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
          <el-form-item :label="$t('user.name')"
            prop="name">
            <el-input :placeholder="$t('user.namePlaceHolder')"
              v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6"
          v-if="showForm.age">
          <el-form-item :label="$t('user.age')"
            prop="age">
            <el-input :placeholder="$t('user.agePlaceHolder')"
              v-model="ruleForm.age"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6"
          v-if="showForm.sex">
          <el-form-item :label="$t('user.sex')"
            prop="sex">
            <el-select v-model="ruleForm.sex"
              :placeholder="$t('user.sexPlaceHolder')">
              <el-option :label="$t('user.sexMan')"
                value="1"></el-option>
              <el-option :label="$t('user.sexWoman')"
                value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6"
          v-if="showForm.date">
          <el-form-item :label="$t('user.date')"
            required>
            <el-form-item prop="date">
              <el-date-picker type="date"
                :placeholder="$t('user.datePlaceHolder')"
                v-model="ruleForm.date"
                style="width: 100%;"></el-date-picker>
            </el-form-item>
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
import timeFormat from 'tool/timeFormat'
import { mapMutations } from 'vuex'
export default {
  name: 'queryForm',
  data: function() {
    return {
      ruleForm: {
        name: '',
        sex: '',
        date: '',
        age: '',
      },
    }
  },
  props: {
    showForm: Object,
  },
  computed: {
    rules() {
      return {
        name: [
          {
            required: true,
            message: this.$t('user.rulesName'),
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: this.$t('user.rulesNameLength'),
            trigger: 'blur',
          },
        ],
        sex: [
          {
            required: true,
            message: this.$t('user.rulesSex'),
            trigger: 'change',
          },
        ],
        date: [
          {
            required: true,
            message: this.$t('user.rulesDate'),
            trigger: 'change',
          },
        ],
        age: [
          {
            required: true,
            message: this.$t('user.rulesAge'),
            trigger: 'blur',
          },
        ],
      }
    },
  },
  mounted() {
    const { query } = this.$route
    this.ruleForm = query
  },
  methods: {
    ...mapMutations('RootStore', ['setQueryFrom']),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Object.keys(this.ruleForm).forEach(item => {
            if (this.ruleForm[item] instanceof Date) {
              this.ruleForm[item] = timeFormat(this.ruleForm[item])
            }
          })
          const { query } = this.$route
          let new_query = {
            x: '',
          }
          let params = {
            ...query,
            ...this.ruleForm,
            ...new_query,
            pageSize: query.pageSize ? query.pageSize : 10,
            pageNo: query.pageNo ? query.pageNo : 1,
          }
          let location = {
            query: params,
          }
          this.$router.push(location)
          this.setQueryFrom(params)
          this.$emit('onSubmit', params)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.setQueryFrom(this.ruleForm)
    },
  },
}
</script>

<style scoped lang="less" type="text/css">
</style>
