<template>
  <ElCard class="form-card">
    <ElForm ref="addItemForm" :model="formData" :rules="rules" label-position="left">
      <ElFormItem label="Type" prop="type">
        <ElSelect v-model="formData.type" placeholder="Choose type..." class="type-select">
          <ElOption label="Income" value="INCOME"></ElOption>
          <ElOption label="Outcome" value="OUTCOME"></ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value"></ElInput>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment"></ElInput>
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    formData: {
      type: 'INCOME',
      value: 0,
      comment: '',
    },
    rules: {
      type: [{ required: true, message: 'Please select type', trigger: 'blur' }],
      comment: [{ required: true, message: 'Please left comment', trigger: 'blur' }],
      value: [{ required: true, message: 'Please input value', trigger: 'blur' },
      { type: 'number', message: 'Value must be a number', trigger: 'change' }]
    },
  }),
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