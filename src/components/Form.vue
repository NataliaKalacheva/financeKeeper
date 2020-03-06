<template>
  <ElCard>
    <ElForm ref="form" :model="form" label-width="120px">
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    ruleForm: {
      type: '',
      value: '',
      comment: '',
    }
  })
}
</script>

<style scoped>

</style>