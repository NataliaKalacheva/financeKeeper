<template>
  <div class="budget-list-wrap">
      <ElCard :header="header">

           <el-select v-model="value" filterable placeholder="Select" @change="filterList(value)">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>

           <template v-if="isItems">
             <BudgetItem v-for='(item, prop) in filteredList' :key="prop" :item='item' @onDeleteItem="onDeleteItem"/>
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
        default: () => ({})  //для сложных типов всегда указываем функцию
      }
    },
    data: () => ({
      header: "My Finance",
      emptyTitle: "No information yet",
      options: [{
          value: 'show_all',
          label: 'Show all'
        }, {
          value: 'INCOME',
          label: 'Income'
        }, {
          value: 'OUTCOME',
          label: 'Outcome'
        }],
      value: 'show_all',
      filteredList: null
    }),
    computed: {
      isItems() {
        return Boolean(Object.keys(this.list).length);
      },
      filter() {
        if (this.value == 'show_all') {
          return this.list;
        }
        let res = {};
        for (const item in this.list) {
          if (this.list[item].type == this.value) {
            const id = this.list[item].id;
            res[id] = this.list[item];
          }
        }

       return res;
      }
    },
    methods: {
      onDeleteItem(id) {
        this.$emit('onDeleteItem', id);
      },
      filterList(value) {
        this.value = value;
        this.filteredList = this.filter;
      }
    },
    created() {
    this.filteredList = this.list;
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