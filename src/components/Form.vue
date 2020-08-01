<template>
  <ElCard class="form-card">
    <ElForm ref="addItemForm" :model="formData" :rules="rules" label-position="left">
      <ElFormItem label="Type" prop="type">
        <ElSelect v-model="formData.type" placeholder="Choose type..." class="type-select">
          <ElOption label="Income" value="INCOME"></ElOption>
          <ElOption label="Outcome" value="OUTCOME"></ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Source" prop="comment">
        <ElInput v-model="formData.comment"></ElInput>
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value"></ElInput>
      </ElFormItem>
      
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: 'Form',
  data() {
      let checkValue = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the value'));
        }
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value <= 0) {
              callback(new Error('Value must be greater than 0'));
            } else {
              callback();
            }
          }
      };
      return {
        formData: {
          type: 'INCOME',
          value: 0,
          comment: '',
        },
        rules: {
          type: [{ required: true, message: 'Please select type', trigger: 'blur' }],
          comment: [{ required: true, message: 'Please left comment', trigger: 'blur' }],
          value: [{ required: true, message: 'Please input value', trigger: 'blur' },
          { validator: checkValue, trigger: 'blur' }]
        }
      };
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          this.$emit('submitForm', {...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    }
  }
}
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: 0 auto;
}
.type-select {
  width: 100%;
}
</style>