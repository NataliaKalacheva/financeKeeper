<template>
      <div class="list-item">
        <span class="budget-comment">{{ item.comment }}</span>
        <span class="budget-value">{{ item.value }}</span>
        <ElButton type="danger" size="mini" @click="confirmVisible = true">Delete</ElButton>

        <el-dialog title="Delete item" :visible.sync="confirmVisible" width="30%">
        <span>Confirm deleting item</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="confirmVisible = false">Cancel</el-button>
          <el-button type="primary" @click="onDeleteItem(item.id)">Confirm</el-button>
        </span>
      </el-dialog>
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
    data: () => ({
      confirmVisible: false
    }),
    methods: {
      onDeleteItem(id) {
        this.$emit('onDeleteItem', id);
        this.confirmVisible = false;
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

