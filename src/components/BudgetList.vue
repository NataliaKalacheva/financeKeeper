<template>
  <div class="budget-list-wrap">
      <ElCard :header="header">
           <template v-if="isItems">
             <BudgetItem v-for='(item, prop) in list' :key="prop" :item='item' @onDeleteItem="onDeleteItem"/>
           </template>
           <ElAlert v-else type='info' :title="emptyTitle" :closable="false"></ElAlert>
      </ElCard>
  </div>
</template>

<script>
import BudgetItem from '@/components/BudgetItem';

export default {
    name: 'BudgetList',
    components: {
      BudgetItem
    },
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
      onDeleteItem(id) {
        this.$emit('onDeleteItem', id);
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

</style>