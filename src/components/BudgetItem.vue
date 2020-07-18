<template>
      <div class="list-item">
        <i class="icon" :class="icon"></i>
        <span class="budget-comment">{{ item.comment }}</span>
        <span class="budget-value" :class="color">{{ item.value }}</span>
        <ElButton type="danger" size="mini" @click="confirmVisible = true" icon="el-icon-delete">Delete</ElButton>

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
    computed: {
      icon() {
        if (this.item.type == "INCOME") {
           return 'el-icon-top';
        } else {
           return 'el-icon-bottom';
        }
      },
      color() {
        if (this.item.type == "INCOME") {
           return 'green';
        } else {
           return 'danger';
        }
      },
    },
    methods: {
      onDeleteItem(id) {
        this.$emit('onDeleteItem', id);
        this.confirmVisible = false;
      },
    }
}
</script>

<style scoped>
   .budget-value {
    font-weight: 700;
    margin-left: auto;
    margin-right: 20px;
  }

  .green {
    color: #67C23A;
  }

  .danger {
    color: #F56C6C;
  }

  .icon {
    margin-right: 10px;
  }
</style>

