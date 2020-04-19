<template>
  <div class="budget-list-wrap">
      <ElCard :header="header">
           <template v-if="isItems">
             <div class="list-item" v-for='(item, prop) in list' :key="prop">
             <span class="budget-comment">{{ item.comment }}</span>
             <span class="budget-value">{{ item.value }}</span>
             <ElButton type="danger" size="mini" @click="deleteItem(item.id)">Delete</ElButton>
           </div>
           </template>
           <ElAlert v-else type='info' :title="emptyTitle" :closable="false"></ElAlert>
      </ElCard>
  </div>
</template>

<script>
export default {
    name: 'BudgetList',
    props: {
      list: {
        type: Object,
        default: () => ({})  //для сложных типов всегда указываем фунцию
      }
    },
    data: () => ({
      header: "My Finance",
      emptyTitle: "No information yet",
    }),
    computed: {
      isItems() {
        return Boolean(Object.keys(this.list).length);
      }
    },
    methods: {
      deleteItem(id) {
        this.$emit('deleteItem', id);
      }
    }
}
</script>

<style scoped>
  .budget-list-wrap {
    max-width: 500px;
    margin: 0 auto;
  }
  .list-item {
   display: flex;
   align-items: center;
   padding: 10px 15px;
 }

  .budget-value {
    font-weight: 700;
    margin-left: auto;
    margin-right: 20px;
  }
</style>