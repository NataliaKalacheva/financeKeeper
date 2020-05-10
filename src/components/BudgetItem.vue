<template>
      <div class="list-item">
        <span class="budget-comment">{{ item.comment }}</span>
        <span class="budget-value">{{ item.value }}</span>
        <ElButton type="danger" size="mini" @click="deleteItem(item.id)">Delete</ElButton>
      </div>
</template>

<script>
export default {
    name: 'BudgetItem',
    props: {
      item: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({}),
    methods: {
      deleteItem(id) {
        this.$emit('deleteItem', id);
      }
    }
}
</script>

<style scoped>
   .budget-value {
    font-weight: 700;
    margin-left: auto;
    margin-right: 20px;
  }
</style>